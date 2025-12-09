import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface CoinFlipGameProps {
  onComplete: (score: number) => void;
}

export const CoinFlipGame: React.FC<CoinFlipGameProps> = ({ onComplete }) => {
  const [flips, setFlips] = useState<boolean[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [numFlips, setNumFlips] = useState(10);

  const flipCoins = async () => {
    setIsFlipping(true);
    const newFlips: boolean[] = [];
    
    for (let i = 0; i < numFlips; i++) {
      const result = Math.random() < 0.5;
      newFlips.push(result);
      setFlips([...newFlips]);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsFlipping(false);
  };

  const reset = () => {
    setFlips([]);
  };

  const calculateRunningAverage = () => {
    const data: { flip: number; heads: number; expected: number }[] = [];
    let headsCount = 0;

    flips.forEach((isHeads, index) => {
      if (isHeads) headsCount++;
      data.push({
        flip: index + 1,
        heads: headsCount / (index + 1),
        expected: 0.5,
      });
    });

    return data;
  };

  const data = calculateRunningAverage();
  const headsCount = flips.filter(f => f).length;
  const percentage = flips.length > 0 ? (headsCount / flips.length * 100).toFixed(1) : 0;

  const handleComplete = () => {
    // Score based on number of flips performed
    const score = Math.min(100, Math.floor((flips.length / 100) * 100));
    onComplete(score);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Ley de Grandes Números
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A medida que aumentan los lanzamientos, la proporción de caras se acerca a 0.5
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Lanzamientos:
          </label>
          <select
            value={numFlips}
            onChange={(e) => setNumFlips(Number(e.target.value))}
            disabled={isFlipping}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          >
            {[10, 25, 50, 100, 500, 1000].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <button
          onClick={flipCoins}
          disabled={isFlipping}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 transition-colors"
        >
          <Play className="w-5 h-5" />
          {isFlipping ? 'Lanzando...' : 'Lanzar'}
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar
        </button>
      </div>

      {/* Stats */}
      {flips.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-4"
        >
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {headsCount}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Caras</p>
          </div>
          <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">
              {flips.length - headsCount}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cruces</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {percentage}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">% Caras</p>
          </div>
        </motion.div>
      )}

      {/* Chart */}
      {data.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4"
        >
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            Convergencia a 0.5
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="flip" 
                label={{ value: 'Número de Lanzamiento', position: 'insideBottom', offset: -5 }}
              />
              <YAxis domain={[0, 1]} />
              <Tooltip />
              <ReferenceLine y={0.5} stroke="#666" strokeDasharray="3 3" label="Esperado (0.5)" />
              <Line type="monotone" dataKey="heads" stroke="#9333EA" strokeWidth={2} dot={false} name="Proporción de Caras" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      {/* Complete Button */}
      {flips.length >= 50 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <button
            onClick={handleComplete}
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Completar Juego
          </button>
        </motion.div>
      )}
    </div>
  );
};
