import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FormulaProps {
    children: ReactNode;
    label?: string;
}

export const Formula: React.FC<FormulaProps> = ({ children, label }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-6 p-6 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl border-2 border-purple-300 dark:border-purple-700 shadow-lg"
        >
            {label && (
                <div className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">
                    {label}
                </div>
            )}
            <div className="text-center text-xl md:text-2xl font-mono font-bold text-gray-900 dark:text-white">
                {children}
            </div>
        </motion.div>
    );
};
