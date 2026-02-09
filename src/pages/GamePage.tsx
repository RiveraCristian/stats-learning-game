import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy } from 'lucide-react';
import { getGameById } from '../data/games';
import { getCategoryInfo } from '../data/categories';
import { useUser } from '../context/UserContext';
import { Modal } from '../components/common/Modal';
import { StarRating } from '../components/common/StarRating';
import { calculateStars } from '../utils/scoring';

// Import game components
import { CoinFlipGame } from '../components/games/probability/CoinFlipGame';
import { DistributionBuilderGame } from '../components/games/probability/DistributionBuilderGame';
import { BayesTheoremGame } from '../components/games/probability/BayesTheoremGame';
import { GuessMeasureGame } from '../components/games/statistics/GuessMeasureGame';
import { CorrelationDetectorGame } from '../components/games/statistics/CorrelationDetectorGame';
import { LinearRegressionGame } from '../components/games/statistics/LinearRegressionGame';
import { VisualClassifierGame } from '../components/games/ml/VisualClassifierGame';
import { KMeansClusteringGame } from '../components/games/ml/KMeansClusteringGame';
import { OverfittingGame } from '../components/games/ml/OverfittingGame';
import { AIMLDLGame } from '../components/games/ai/AIMLDLGame';
import { PromptEngineeringGame } from '../components/games/ai/PromptEngineeringGame';
import { NLPChallengeGame } from '../components/games/ai/NLPChallengeGame';
import { MontyHallGame } from '../components/games/probability/MontyHallGame';

export const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { profile, completeGame } = useUser();
  const [showResults, setShowResults] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const game = getGameById(gameId || '');
  const category = getCategoryInfo(game?.category || '');

  if (!game || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Juego no encontrado</h1>
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            Volver al Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleGameComplete = (score: number) => {
    setGameScore(score);
    completeGame(game, score);
    setShowResults(true);
  };

  const handleContinue = () => {
    setShowResults(false);
    navigate(`/category/${game.category}`);
  };

  const renderGame = () => {
    const gameProps = {
      onComplete: handleGameComplete,
    };

    switch (gameId) {
      case 'coin-flip':
        return <CoinFlipGame {...gameProps} />;
      case 'distribution-builder':
        return <DistributionBuilderGame {...gameProps} />;
      case 'bayes-theorem':
        return <BayesTheoremGame {...gameProps} />;
      case 'guess-measure':
        return <GuessMeasureGame {...gameProps} />;
      case 'correlation-detector':
        return <CorrelationDetectorGame {...gameProps} />;
      case 'linear-regression':
        return <LinearRegressionGame {...gameProps} />;
      case 'visual-classifier':
        return <VisualClassifierGame {...gameProps} />;
      case 'kmeans-clustering':
        return <KMeansClusteringGame {...gameProps} />;
      case 'overfitting-game':
        return <OverfittingGame {...gameProps} />;
      case 'ai-ml-dl':
        return <AIMLDLGame {...gameProps} />;
      case 'prompt-engineering':
        return <PromptEngineeringGame {...gameProps} />;
      case 'nlp-challenge':
        return <NLPChallengeGame {...gameProps} />;
      case 'monty-hall':
        return <MontyHallGame {...gameProps} />;
      case 'probability-tree':
      case 'hypothesis-test':
      case 'chi-square':
      case 'neural-network':
      case 'gradient-descent-viz':
      case 'ai-ethics':
      case 'transformer-attention':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Próximamente</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Este juego estará disponible pronto. ¡Estamos trabajando en traerte esta experiencia de aprendizaje!
            </p>
            <button
              onClick={() => handleGameComplete(75)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Obtener XP de Vista Previa
            </button>
          </div>
        );
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Este juego estará disponible pronto</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Estamos trabajando en traerte esta experiencia de aprendizaje.
            </p>
          </div>
        );
    }
  };

  const stars = calculateStars(gameScore);
  const bestScore = profile.categoryProgress[game.category]?.bestScores[game.id];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to={`/category/${game.category}`}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </Link>

          {bestScore && (
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mejor: {bestScore.score}
              </span>
              <StarRating stars={bestScore.stars} size="sm" />
            </div>
          )}
        </div>

        {/* Game Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Game Header */}
          <div
            className="p-6 text-white"
            style={{
              background: `linear-gradient(135deg, ${category.color} 0%, ${category.lightColor} 100%)`,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{game.name}</h1>
                <p className="text-sm opacity-90">{game.description}</p>
              </div>
            </div>
          </div>

          {/* Game Content */}
          <div className="p-6">{renderGame()}</div>
        </motion.div>
      </div>

      {/* Results Modal */}
      <Modal isOpen={showResults} onClose={() => setShowResults(false)} size="md">
        <div className="text-center py-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
          >
            <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
          </motion.div>

          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            ¡Juego Completado!
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Obtuviste {gameScore} puntos
          </p>

          <div className="flex justify-center mb-6">
            <StarRating stars={stars} size="lg" animate />
          </div>

          <div className="bg-gray-100 dark:bg-slate-700 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Experiencia ganada
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              +{game.xpReward[stars as 1 | 2 | 3] || 0} XP
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 px-6 py-3 rounded-lg font-medium bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
            >
              Jugar de Nuevo
            </button>
            <button
              onClick={handleContinue}
              className="flex-1 px-6 py-3 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: category.color }}
            >
              Continuar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
