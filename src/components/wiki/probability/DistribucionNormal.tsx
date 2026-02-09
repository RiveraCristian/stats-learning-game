import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Activity, Bell, BarChart2 } from 'lucide-react';

export const DistribucionNormal: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Distribución Normal
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    La famosa "Campana de Gauss": el patrón más común en la naturaleza
                </p>
            </div>

            <Section title="¿Qué es?" icon={<Activity />}>
                <p className="text-lg leading-relaxed mb-4">
                    La Distribución Normal es una distribución de probabilidad continua que es simétrica alrededor de su media.
                    Es increíblemente importante porque muchos fenómenos naturales siguen este patrón: altura de las personas,
                    errores de medición, puntajes de CI, presión sanguínea, etc.
                </p>
                <div className="flex justify-center my-8">
                    <svg viewBox="0 0 400 200" className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        {/* Simple SVG representation of a bell curve */}
                        <path d="M 20 180 C 100 180, 150 20, 200 20 C 250 20, 300 180, 380 180" fill="none" className="stroke-purple-600 stroke-[3]" />
                        <line x1="200" y1="20" x2="200" y2="180" className="stroke-gray-300 stroke-dasharray-4" />
                        <text x="200" y="195" textAnchor="middle" className="fill-gray-500 text-sm">Media μ</text>
                    </svg>
                </div>
            </Section>

            <Section title="Parámetros Clave" icon={<BarChart2 />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Media (μ)</h3>
                        <p>
                            El centro de la distribución. Determina <strong>dónde</strong> está ubicada la campana. En una distribución normal, la media, mediana y moda son iguales.
                        </p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                        <h3 className="text-xl font-bold text-pink-700 dark:text-pink-300 mb-2">Desviación Estándar (σ)</h3>
                        <p>
                            El ancho de la campana. Determina <strong>qué tan dispersos</strong> están los datos.
                            <br />
                            Mayor σ = campana más ancha y baja.
                            <br />
                            Menor σ = campana más angosta y alta.
                        </p>
                    </div>
                </div>
            </Section>

            <Section title="La Regla Empírica (68-95-99.7)" icon={<Bell />}>
                <p className="mb-4">
                    Una propiedad muy útil que nos dice qué porcentaje de datos cae dentro de ciertas desviaciones estándar de la media:
                </p>

                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center font-bold text-purple-700 dark:text-purple-300 text-xl border-2 border-purple-200">
                            68%
                        </div>
                        <div>
                            <p className="font-semibold">Dentro de 1 desviación estándar (μ ± 1σ)</p>
                            <p className="text-sm text-gray-500">La mayoría de la gente es "promedio".</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-300 text-xl border-2 border-indigo-200">
                            95%
                        </div>
                        <div>
                            <p className="font-semibold">Dentro de 2 desviaciones estándar (μ ± 2σ)</p>
                            <p className="text-sm text-gray-500">Casi todos los datos caen aquí.</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-bold text-blue-700 dark:text-blue-300 text-lg border-2 border-blue-200">
                            99.7%
                        </div>
                        <div>
                            <p className="font-semibold">Dentro de 3 desviaciones estándar (μ ± 3σ)</p>
                            <p className="text-sm text-gray-500">Los valores fuera de esto son extremadamente raros (outliers).</p>
                        </div>
                    </li>
                </ul>
            </Section>

            <KeyConcept title="Z-Score (Puntaje Z)">
                <p>Una forma de estandarizar cualquier valor de una distribución normal para compararlo con otros.</p>
                <Formula>
                    Z = (X - μ) / σ
                </Formula>
                <p>
                    Nos dice: <strong>¿A cuántas desviaciones estándar de la media está este valor?</strong>
                </p>
            </KeyConcept>

            <Example title="Ejemplo: Altura" color="green">
                <p className="mb-2">
                    Supongamos que la altura promedio de los hombres es <strong>175 cm</strong> (μ) con una desviación estándar de <strong>7 cm</strong> (σ).
                </p>

                <div className="space-y-4 mt-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold">Si mides 182 cm:</p>
                        <p className="font-mono text-sm mt-1">Z = (182 - 175) / 7 = 1</p>
                        <p className="text-sm text-green-600 mt-1">Estás 1 desviación estándar por encima del promedio. Eres más alto que el ~84% de los hombres.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                        <p className="font-semibold">Si mides 189 cm:</p>
                        <p className="font-mono text-sm mt-1">Z = (189 - 175) / 7 = 2</p>
                        <p className="text-sm text-green-600 mt-1">Estás 2 desviaciones estándar por encima. Eres más alto que el ~97.5% de los hombres.</p>
                    </div>
                </div>
            </Example>
        </ArticleLayout>
    );
};
