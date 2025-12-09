import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GameTemplateProps {
  title: string;
  description: string;
  onComplete: (score: number) => void;
  children: React.ReactNode;
}

export const GameTemplate: React.FC<GameTemplateProps> = ({
  title,
  description,
  onComplete,
  children,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="min-h-[400px]">{children}</div>
    </div>
  );
};
