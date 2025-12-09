import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  icon: string;
  name: string;
  description: string;
  earned: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ icon, name, description, earned }) => {
  return (
    <motion.div
      whileHover={earned ? { scale: 1.05 } : {}}
      className={`p-4 rounded-xl text-center ${
        earned
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg'
          : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
      }`}
    >
      <div className={`text-4xl mb-2 ${!earned && 'grayscale'}`}>{icon}</div>
      <h4 className={`font-bold mb-1 ${earned ? 'text-white' : 'text-gray-700 dark:text-gray-400'}`}>
        {name}
      </h4>
      <p className={`text-xs ${earned ? 'text-white/90' : 'text-gray-500 dark:text-gray-500'}`}>
        {description}
      </p>
    </motion.div>
  );
};
