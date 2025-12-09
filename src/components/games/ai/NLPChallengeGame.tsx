import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GameTemplate } from '../GameTemplate';

interface NLPChallengeGameProps {
  onComplete: (score: number) => void;
}

export const NLPChallengeGame: React.FC<NLPChallengeGameProps> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const handleComplete = () => {
    const finalScore = Math.max(40, Math.min(100, 100 - attempts * 5 + score));
    onComplete(finalScore);
  };

  return (
    <GameTemplate
      title="NLP Challenge"
      description="Procesa texto y aprende sobre tokenización"
      onComplete={onComplete}
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            NLP Challenge
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Procesa texto y aprende sobre tokenización
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-slate-700 rounded-xl p-8 max-w-md w-full space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Intentos</p>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">{attempts}</p>
          </div>

          <button
            onClick={() => {
              setAttempts(attempts + 1);
              setScore(Math.min(100, score + Math.floor(Math.random() * 20) + 10));
            }}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Intentar
          </button>

          {attempts >= 3 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleComplete}
              className="w-full px-6 py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Completar Juego
            </motion.button>
          )}
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
          <p className="mb-2">💡 Tip: Este es un juego de demostración</p>
          <p>Realiza al menos 3 intentos para completar el juego</p>
        </div>
      </div>
    </GameTemplate>
  );
};
