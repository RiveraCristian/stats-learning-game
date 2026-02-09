import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    variant?: 'default' | 'highlight' | 'warning';
}

export const Section: React.FC<SectionProps> = ({
    title,
    children,
    icon,
    variant = 'default'
}) => {
    const variants = {
        default: 'border-l-4 border-gray-300 dark:border-gray-600',
        highlight: 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20',
        warning: 'border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    };

    return (
        <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`pl-6 py-4 ${variants[variant]} rounded-r-lg`}
        >
            <div className="flex items-center gap-3 mb-4">
                {icon && <span className="text-2xl">{icon}</span>}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {children}
            </div>
        </motion.section>
    );
};
