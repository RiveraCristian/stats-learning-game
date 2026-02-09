import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ArticleLayoutProps {
    children: ReactNode;
    category?: 'probability' | 'statistics' | 'ml' | 'ai';
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children, category = 'probability' }) => {
    const categoryColors = {
        probability: 'from-purple-600 to-purple-400',
        statistics: 'from-blue-600 to-blue-400',
        ml: 'from-green-600 to-green-400',
        ai: 'from-orange-600 to-orange-400',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
        >
            {/* Progress indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
                <motion.div
                    className={`h-full bg-gradient-to-r ${categoryColors[category]}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Article content */}
            <div className="max-w-4xl mx-auto">
                {children}
            </div>
        </motion.div>
    );
};
