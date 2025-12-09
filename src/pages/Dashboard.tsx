import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Trophy } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { categories } from '../data/categories';
import { games } from '../data/games';
import { ProgressBar } from '../components/common/ProgressBar';
import { getProgressPercentage } from '../utils/scoring';

export const Dashboard: React.FC = () => {
  const { profile } = useUser();

  const getCategoryProgress = (categoryId: string) => {
    const categoryGames = games.filter((g) => g.category === categoryId);
    const completed = categoryGames.filter((g) => profile.completedGames.includes(g.id)).length;
    return {
      completed,
      total: categoryGames.length,
      percentage: (completed / categoryGames.length) * 100,
    };
  };

  const xpProgress = getProgressPercentage(profile.totalXP, profile.level);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                ¡Bienvenido, {profile.name}! 👋
              </h1>
              <p className="text-lg opacity-90">
                Continúa tu aventura de aprendizaje
              </p>
            </div>
            
            <div className="flex gap-6">
              <div className="text-center">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-2">
                  <Trophy className="w-6 h-6" />
                  <span className="text-2xl font-bold">{profile.level}</span>
                </div>
                <p className="text-sm opacity-75">Nivel</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-2">
                  <Flame className="w-6 h-6" />
                  <span className="text-2xl font-bold">{profile.streak}</span>
                </div>
                <p className="text-sm opacity-75">Racha</p>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="opacity-90">Progreso al siguiente nivel</span>
              <span className="font-bold">{profile.totalXP} XP</span>
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

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Juegos Completados', value: profile.completedGames.length },
            { label: 'Total XP', value: profile.totalXP },
            { label: 'Logros', value: profile.achievements.length },
            { label: 'Racha Máxima', value: profile.streak },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center"
            >
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Categories Grid */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Categorías
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const progress = getCategoryProgress(category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                style={{ borderLeft: `6px solid ${category.color}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <ProgressBar
                    current={progress.completed}
                    total={progress.total}
                    color={category.color}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-bold">{progress.completed}</span> de{' '}
                    <span className="font-bold">{progress.total}</span> completados
                  </div>
                  
                  <Link
                    to={`/category/${category.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all hover:shadow-md"
                    style={{ backgroundColor: category.color }}
                  >
                    Explorar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
