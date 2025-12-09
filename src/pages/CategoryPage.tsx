import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getCategoryInfo } from '../data/categories';
import { getGamesByCategory, getGamesByLevel } from '../data/games';
import { useUser } from '../context/UserContext';
import { GameCard } from '../components/common/GameCard';
import { LevelSelector } from '../components/common/LevelSelector';
import { Level } from '../types';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedLevel, setSelectedLevel] = useState<Level>('basic');
  const { profile } = useUser();

  const category = getCategoryInfo(categoryId || '');
  const allGames = getGamesByCategory(categoryId as any);
  const filteredGames = getGamesByLevel(categoryId as any, selectedLevel);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            Volver al Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const completedInCategory = allGames.filter((game) =>
    profile.completedGames.includes(game.id)
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Dashboard
        </Link>

        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-8 mb-8 text-white shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${category.color} 0%, ${category.lightColor} 100%)`,
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{category.icon}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-lg opacity-90">{category.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-white/20">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">Juegos Completados</span>
              <p className="text-2xl font-bold">
                {completedInCategory} / {allGames.length}
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm opacity-75">XP en esta categoría</span>
              <p className="text-2xl font-bold">
                {profile.categoryProgress[categoryId as keyof typeof profile.categoryProgress]?.totalXP || 0} XP
              </p>
            </div>
          </div>
        </motion.div>

        {/* Level Selector */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Selecciona un Nivel
          </h2>
          <LevelSelector selectedLevel={selectedLevel} onSelectLevel={setSelectedLevel} />
        </div>

        {/* Games Grid */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Juegos Disponibles ({filteredGames.length})
          </h2>
          
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => {
                const bestScore = profile.categoryProgress[
                  categoryId as keyof typeof profile.categoryProgress
                ]?.bestScores[game.id];

                return (
                  <GameCard
                    key={game.id}
                    game={game}
                    bestScore={bestScore}
                    isLocked={false}
                  />
                );
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-12 text-center shadow-lg">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No hay juegos disponibles en este nivel todavía.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Próximamente se agregarán más juegos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
