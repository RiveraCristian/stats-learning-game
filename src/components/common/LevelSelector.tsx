import React from 'react';
import { Level } from '../../types';

interface LevelSelectorProps {
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({ selectedLevel, onSelectLevel }) => {
  const levels: { value: Level; label: string; emoji: string }[] = [
    { value: 'basic', label: 'Básico', emoji: '🟢' },
    { value: 'intermediate', label: 'Intermedio', emoji: '🟡' },
    { value: 'advanced', label: 'Avanzado', emoji: '🔴' },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {levels.map((level) => (
        <button
          key={level.value}
          onClick={() => onSelectLevel(level.value)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedLevel === level.value
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
          }`}
        >
          <span className="mr-2">{level.emoji}</span>
          {level.label}
        </button>
      ))}
    </div>
  );
};
