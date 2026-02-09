import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface ExampleProps {
    title: string;
    children: ReactNode;
    color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export const Example: React.FC<ExampleProps> = ({
    title,
    children,
    color = 'blue'
}) => {
    const colors = {
        blue: {
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            border: 'border-blue-300 dark:border-blue-700',
            text: 'text-blue-700 dark:text-blue-300',
            icon: 'text-blue-600 dark:text-blue-400',
        },
        green: {
            bg: 'bg-green-50 dark:bg-green-900/20',
            border: 'border-green-300 dark:border-green-700',
            text: 'text-green-700 dark:text-green-300',
            icon: 'text-green-600 dark:text-green-400',
        },
        purple: {
            bg: 'bg-purple-50 dark:bg-purple-900/20',
            border: 'border-purple-300 dark:border-purple-700',
            text: 'text-purple-700 dark:text-purple-300',
            icon: 'text-purple-600 dark:text-purple-400',
        },
        orange: {
            bg: 'bg-orange-50 dark:bg-orange-900/20',
            border: 'border-orange-300 dark:border-orange-700',
            text: 'text-orange-700 dark:text-orange-300',
            icon: 'text-orange-600 dark:text-orange-400',
        },
        red: {
            bg: 'bg-red-50 dark:bg-red-900/20',
            border: 'border-red-300 dark:border-red-700',
            text: 'text-red-700 dark:text-red-300',
            icon: 'text-red-600 dark:text-red-400',
        },
    };

    const theme = colors[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 ${theme.bg} border-l-4 ${theme.border} rounded-r-xl my-6`}
        >
            <div className="flex items-center gap-2 mb-4">
                <Lightbulb className={`w-5 h-5 ${theme.icon}`} />
                <h3 className={`text-lg font-bold ${theme.text}`}>
                    {title}
                </h3>
            </div>
            <div className="text-gray-700 dark:text-gray-300 space-y-3">
                {children}
            </div>
        </motion.div>
    );
};
