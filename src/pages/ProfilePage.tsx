import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Star, Award } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Badge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { achievements } from '../data/achievements';
import { getProgressPercentage } from '../utils/scoring';
import { categories } from '../data/categories';

export const ProfilePage: React.FC = () => {
  const { profile } = useUser();
  const xpProgress = getProgressPercentage(profile.totalXP, profile.level);

  const stats = [
    { icon: <Trophy className="w-6 h-6" />, label: 'Nivel', value: profile.level },
    { icon: <Star className="w-6 h-6" />, label: 'Total XP', value: profile.totalXP },
    { icon: <Flame className="w-6 h-6" />, label: 'Racha', value: `${profile.streak} días` },
    { icon: <Award className="w-6 h-6" />, label: 'Logros', value: profile.achievements.length },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-5xl">
              🎮
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.name}</h1>
              <p className="text-lg opacity-90">Nivel {profile.level} • {profile.totalXP} XP</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="opacity-90">Progreso al nivel {profile.level + 1}</span>
              <span className="font-bold">{xpProgress.toFixed(0)}%</span>
            </div>
            <ProgressBar
              current={xpProgress}
              total={100}
              color="#FFFFFF"
              showLabel={false}
              height="h-4"
            />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg mb-3 mx-auto">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Category Progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Progreso por Categoría
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const progress = profile.categoryProgress[category.id as keyof typeof profile.categoryProgress];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                  style={{ borderLeft: `4px solid ${category.color}` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {progress?.totalXP || 0} XP • {progress?.gamesCompleted || 0} juegos
                      </p>
                    </div>
                  </div>
                  <ProgressBar
                    current={progress?.gamesCompleted || 0}
                    total={progress?.totalGames || 1}
                    color={category.color}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Logros ({profile.achievements.length} / {achievements.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {achievements.map((achievement) => (
              <Badge
                key={achievement.id}
                icon={achievement.icon}
                name={achievement.name}
                description={achievement.description}
                earned={profile.achievements.includes(achievement.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
