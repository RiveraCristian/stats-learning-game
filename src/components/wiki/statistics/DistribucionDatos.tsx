import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { BarChart, PieChart, LineChart } from 'lucide-react';

export const DistribucionDatos: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Distribución de Datos
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    La forma que toman los números
                </p>
            </div>

            <Section title="¿Qué es una distribución?" icon={<BarChart />}>
                <p className="text-lg mb-4">
                    Una distribución muestra todos los valores posibles de los datos y con qué frecuencia ocurren.
                    Es como el "huella digital" de un conjunto de datos.
                </p>
            </Section>

            <Section title="Formas Comunes" icon={<PieChart />}>
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">Simétrica (Normal)</h3>
                            <p className="text-sm text-gray-600">Parece una campana. La media y la mediana están en el centro.</p>
                        </div>
                        <div className="w-full md:w-1/3 bg-gray-100 h-24 rounded flex items-center justify-center text-xs text-gray-400">Gráfico de Campana</div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">Sesgada a la Derecha (Positiva)</h3>
                            <p className="text-sm text-gray-600">La "cola" larga está a la derecha. Pocos valores muy altos (ej: salarios).</p>
                            <p className="text-xs mt-1 text-blue-600">Media {'>'} Mediana</p>
                        </div>
                        <div className="w-full md:w-1/3 bg-gray-100 h-24 rounded flex items-center justify-center text-xs text-gray-400">Cola a la Derecha</div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">Sesgada a la Izquierda (Negativa)</h3>
                            <p className="text-sm text-gray-600">La "cola" larga está a la izquierda. Pocos valores muy bajos (ej: edad de jubilación).</p>
                            <p className="text-xs mt-1 text-blue-600">Media {'<'} Mediana</p>
                        </div>
                        <div className="w-full md:w-1/3 bg-gray-100 h-24 rounded flex items-center justify-center text-xs text-gray-400">Cola a la Izquierda</div>
                    </div>
                </div>
            </Section>

            <Section title="Curtosis (Kurtosis)" icon={<LineChart />}>
                <p className="mb-2">Mide qué tan "picuda" o "plana" es la distribución.</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li><strong>Leptocúrtica:</strong> Muy picuda, colas gordas (muchos outliers).</li>
                    <li><strong>Platicúrtica:</strong> Achatada, colas delgadas (pocos outliers).</li>
                </ul>
            </Section>
        </ArticleLayout>
    );
};
