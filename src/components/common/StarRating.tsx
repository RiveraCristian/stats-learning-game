import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface StarRatingProps {
  stars: number;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ stars, size = 'md', animate = false }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => {
        const isEarned = i <= stars;
        const StarComponent = animate ? motion.div : 'div';
        const starProps = animate
          ? {
              initial: { scale: 0, rotate: -180 },
              animate: { scale: 1, rotate: 0 },
              transition: {
                delay: i * 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 10,
              },
            }
          : {};

        return (
          <StarComponent key={i} {...starProps}>
            <Star
              className={`${sizeClasses[size]} ${
                isEarned
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          </StarComponent>
        );
      })}
    </div>
  );
};
