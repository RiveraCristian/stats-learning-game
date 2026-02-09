import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'text',
    title
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-6"
        >
            {title && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded-t-lg">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">{title}</span>
                    <span className="ml-auto text-xs text-gray-400">{language}</span>
                </div>
            )}
            <pre className={`p-4 bg-gray-900 dark:bg-black text-gray-100 overflow-x-auto ${title ? 'rounded-b-lg' : 'rounded-lg'} font-mono text-sm`}>
                <code>{code}</code>
            </pre>
        </motion.div>
    );
};
