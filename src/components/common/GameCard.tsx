import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Lock, Play } from 'lucide-react';
import { GameData } from '../../types';
import { getCategoryInfo } from '../../data/categories';

interface GameCardProps {
  game: GameData;
  bestScore?: { score: number; stars: number };
  isLocked?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({ game, bestScore, isLocked = false }) => {
  const categoryInfo = getCategoryInfo(game.category);
  const stars = bestScore?.stars || 0;

  return (
    <motion.div
      whileHover={!isLocked ? { scale: 1.05, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`relative rounded-xl p-6 shadow-lg ${
        isLocked
          ? 'bg-gray-200 dark:bg-gray-800 opacity-60'
          : 'bg-white dark:bg-slate-800'
      }`}
      style={
        !isLocked
          ? {
              borderTop: `4px solid ${categoryInfo?.color}`,
            }
          : {}
      }
    >
      {isLocked && (
        <div className="absolute top-4 right-4">
          <Lock className="w-6 h-6 text-gray-500" />
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{categoryInfo?.icon}</span>
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i <= stars
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {game.name}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {game.description}
      </p>

      <div className="flex items-center justify-between">
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={
            !isLocked
              ? {
                  backgroundColor: `${categoryInfo?.color}20`,
                  color: categoryInfo?.color,
                }
              : {}
          }
        >
          {game.level === 'basic' && '🟢 Básico'}
          {game.level === 'intermediate' && '🟡 Intermedio'}
          {game.level === 'advanced' && '🔴 Avanzado'}
        </span>

        {!isLocked ? (
          <Link
            to={`/game/${game.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all hover:shadow-md"
            style={{ backgroundColor: categoryInfo?.color }}
          >
            <Play className="w-4 h-4" />
            Jugar
          </Link>
        ) : (
          <button
            disabled
            className="px-4 py-2 rounded-lg font-medium text-gray-500 bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
          >
            Bloqueado
          </button>
        )}
      </div>

      {bestScore && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Mejor puntaje: <span className="font-bold">{bestScore.score}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
};
