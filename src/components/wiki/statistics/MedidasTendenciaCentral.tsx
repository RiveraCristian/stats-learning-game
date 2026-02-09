import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { BarChart2, Scale, Target } from 'lucide-react';

export const MedidasTendenciaCentral: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Medidas de Tendencia Central
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    En busca del "centro" de los datos
                </p>
            </div>

            <Section title="Las Tres Grandes M's" icon={<Scale />}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Media</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">El promedio aritmético. Sumas todo y divides por la cantidad.</p>
                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-center font-mono text-xs">
                            (1+2+3)/3 = 2
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-cyan-600 mb-2">Mediana</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">El valor justo en el medio cuando ordenas los datos de menor a mayor.</p>
                        <div className="bg-cyan-50 dark:bg-cyan-900/30 p-2 rounded text-center font-mono text-xs">
                            1, <strong>2</strong>, 9 (Mediana=2)
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-teal-600 mb-2">Moda</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">El valor que más se repite. Lo "de moda".</p>
                        <div className="bg-teal-50 dark:bg-teal-900/30 p-2 rounded text-center font-mono text-xs">
                            1, 2, 2, 3 (Moda=2)
                        </div>
                    </div>
                </div>
            </Section>

            <Example title="Salarios en una Startup" color="blue">
                <p className="mb-4">
                    Imagina una empresa con 5 empleados y sus salarios mensuales:
                </p>
                <ul className="list-none space-y-1 mb-4 font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded">
                    <li>Becario: $1,000</li>
                    <li>Junior: $2,000</li>
                    <li>Junior: $2,000</li>
                    <li>Senior: $5,000</li>
                    <li>CEO: $90,000</li>
                </ul>

                <div className="space-y-2">
                    <p><strong>Media:</strong> $20,000 (¡Parece que todos son ricos!)</p>
                    <p><strong>Mediana:</strong> $2,000 (Representa mucho mejor al empleado típico)</p>
                    <p><strong>Moda:</strong> $2,000 (El salario más común)</p>
                </div>
            </Example>

            <KeyConcept title="¿Cuál usar?">
                <ul className="list-disc list-inside space-y-2">
                    <li>Usa la <strong>Media</strong> si los datos son simétricos y no hay valores extremos (outliers).</li>
                    <li>Usa la <strong>Mediana</strong> si hay valores extremos (como el sueldo del CEO) que distorsionan el promedio.</li>
                    <li>Usa la <strong>Moda</strong> para datos categóricos (ej: "Color favorito").</li>
                </ul>
            </KeyConcept>
        </ArticleLayout>
    );
};
