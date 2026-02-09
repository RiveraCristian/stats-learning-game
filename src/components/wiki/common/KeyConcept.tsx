import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface KeyConceptProps {
    title: string;
    children: ReactNode;
}

export const KeyConcept: React.FC<KeyConceptProps> = ({ title, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl border-2 border-yellow-400 dark:border-yellow-600 shadow-lg my-6"
        >
            <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
            </div>
            <div className="text-gray-800 dark:text-gray-200 font-medium">
                {children}
            </div>
        </motion.div>
    );
};
