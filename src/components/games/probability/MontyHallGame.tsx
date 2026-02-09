import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Trophy } from 'lucide-react';

interface MontyHallGameProps {
    onComplete: (score: number) => void;
}

export const MontyHallGame: React.FC<MontyHallGameProps> = ({ onComplete }) => {
    const [gameState, setGameState] = useState<'select' | 'reveal' | 'switch' | 'result'>('select');
    const [selectedDoor, setSelectedDoor] = useState<number | null>(null);
    const [carDoor, setCarDoor] = useState<number>(Math.floor(Math.random() * 3));
    const [revealedDoor, setRevealedDoor] = useState<number | null>(null);
    const [finalChoice, setFinalChoice] = useState<number | null>(null);
    const [stats, setStats] = useState({ wins: 0, losses: 0, switched: 0, stayed: 0 });
    const [rounds, setRounds] = useState(0);

    const handleDoorSelect = (door: number) => {
        if (gameState !== 'select') return;

        setSelectedDoor(door);

        // Host reveals a goat door (not the car, not the selected)
        const availableDoors = [0, 1, 2].filter(d => d !== door && d !== carDoor);
        const revealed = availableDoors[Math.floor(Math.random() * availableDoors.length)];
        setRevealedDoor(revealed);
        setGameState('switch');
    };

    const handleSwitch = (shouldSwitch: boolean) => {
        const final = shouldSwitch
            ? [0, 1, 2].find(d => d !== selectedDoor && d !== revealedDoor)!
            : selectedDoor!;

        setFinalChoice(final);
        setGameState('result');

        const won = final === carDoor;
        setStats(prev => ({
            wins: won ? prev.wins + 1 : prev.wins,
            losses: won ? prev.losses : prev.losses + 1,
            switched: shouldSwitch ? prev.switched + 1 : prev.switched,
            stayed: shouldSwitch ? prev.stayed : prev.stayed + 1,
        }));
        setRounds(prev => prev + 1);
    };

    const reset = () => {
        setGameState('select');
        setSelectedDoor(null);
        setCarDoor(Math.floor(Math.random() * 3));
        setRevealedDoor(null);
        setFinalChoice(null);
    };

    const handleComplete = () => {
        const winRate = rounds > 0 ? (stats.wins / rounds) * 100 : 0;
        const score = Math.min(100, Math.floor(winRate));
        onComplete(score);
    };

    const getDoorContent = (door: number) => {
        if (gameState === 'result') {
            return door === carDoor ? '🚗' : '🐐';
        }
        if (door === revealedDoor) {
            return '🐐';
        }
        return '🚪';
    };

    const getDoorColor = (door: number) => {
        if (gameState === 'result') {
            if (door === finalChoice && door === carDoor) return 'bg-green-500';
            if (door === finalChoice && door !== carDoor) return 'bg-red-500';
            if (door === carDoor) return 'bg-yellow-500';
        }
        if (door === selectedDoor) return 'bg-blue-500';
        if (door === revealedDoor) return 'bg-gray-400';
        return 'bg-purple-600';
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Problema de Monty Hall
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    ¿Deberías cambiar de puerta? ¡Descubre la probabilidad contraintuitiva!
                </p>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    {gameState === 'select' && '1. Elige una puerta'}
                    {gameState === 'switch' && '2. El presentador reveló una cabra. ¿Cambias de puerta?'}
                    {gameState === 'result' && '3. ¡Resultado! Juega más rondas para ver el patrón'}
                </p>
            </div>

            {/* Doors */}
            <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((door) => (
                    <motion.button
                        key={door}
                        whileHover={{ scale: gameState === 'select' ? 1.05 : 1 }}
                        whileTap={{ scale: gameState === 'select' ? 0.95 : 1 }}
                        onClick={() => handleDoorSelect(door)}
                        disabled={gameState !== 'select'}
                        className={`${getDoorColor(door)} text-white rounded-xl p-8 text-6xl transition-all disabled:cursor-not-allowed relative`}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${door}-${gameState}`}
                                initial={{ rotateY: 90 }}
                                animate={{ rotateY: 0 }}
                                exit={{ rotateY: -90 }}
                                transition={{ duration: 0.3 }}
                            >
                                {getDoorContent(door)}
                            </motion.div>
                        </AnimatePresence>
                        <div className="absolute top-2 left-2 text-sm font-bold">
                            Puerta {door + 1}
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Switch Decision */}
            {gameState === 'switch' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 justify-center"
                >
                    <button
                        onClick={() => handleSwitch(false)}
                        className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                        Mantener Puerta {selectedDoor! + 1}
                    </button>
                    <button
                        onClick={() => handleSwitch(true)}
                        className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
                    >
                        Cambiar de Puerta
                    </button>
                </motion.div>
            )}

            {/* Result */}
            {gameState === 'result' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                >
                    <div className={`text-4xl font-bold ${finalChoice === carDoor ? 'text-green-600' : 'text-red-600'}`}>
                        {finalChoice === carDoor ? '¡Ganaste! 🎉' : 'Perdiste 😢'}
                    </div>
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 mx-auto px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Jugar de Nuevo
                    </button>
                </motion.div>
            )}

            {/* Statistics */}
            {rounds > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6"
                >
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                        Estadísticas ({rounds} rondas)
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">{stats.wins}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Victorias</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-600">{stats.losses}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Derrotas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">{stats.switched}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Cambiaste</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">{stats.stayed}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Te quedaste</div>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>Tasa de victoria:</strong> {rounds > 0 ? ((stats.wins / rounds) * 100).toFixed(1) : 0}%
                        </p>
                        {stats.switched > 0 && (
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Al cambiar:</strong> {((stats.switched > 0 ? stats.wins / stats.switched : 0) * 100).toFixed(1)}%
                            </p>
                        )}
                        {stats.stayed > 0 && (
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Al quedarse:</strong> {((stats.stayed > 0 ? (stats.wins - (stats.switched > 0 ? Math.floor(stats.wins * stats.switched / rounds) : 0)) / stats.stayed : 0) * 100).toFixed(1)}%
                            </p>
                        )}
                    </div>
                </motion.div>
            )}

            {/* Complete Button */}
            {rounds >= 10 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <button
                        onClick={handleComplete}
                        className="flex items-center gap-2 mx-auto px-8 py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
                    >
                        <Trophy className="w-6 h-6" />
                        Completar Juego
                    </button>
                </motion.div>
            )}

            {/* Educational Note */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    💡 <strong>Dato curioso:</strong> Cambiar de puerta te da 2/3 (66.7%) de probabilidad de ganar,
                    mientras que quedarte solo te da 1/3 (33.3%). ¡Juega varias rondas para comprobarlo!
                </p>
            </div>
        </div>
    );
};
