import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Brain, AlertTriangle, CheckCircle } from 'lucide-react';

export const OverfittingUnderfitting: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                    Overfitting vs Underfitting
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El dilema fundamental del aprendizaje automático: encontrar el equilibrio justo
                </p>
            </div>

            <Section title="¿Qué es el problema?" icon={<AlertTriangle className="text-yellow-500" />}>
                <p className="text-lg leading-relaxed">
                    En Machine Learning, nuestro objetivo es crear modelos que <strong>generalicen</strong> bien a datos nuevos que nunca han visto.
                    Sin embargo, podemos fallar de dos maneras opuestas: haciendo el modelo demasiado simple (Underfitting) o demasiado complejo (Overfitting).
                </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="border-4 border-red-200 dark:border-red-900/30 rounded-xl p-6 bg-red-50 dark:bg-red-900/10">
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Underfitting</h3>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 mb-4">"El modelo no estudia lo suficiente"</p>
                    <ul className="space-y-2">
                        <li className="flex gap-2">❌ <strong>Alto Bias (Sesgo)</strong></li>
                        <li className="flex gap-2">❌ Modelo demasiado simple</li>
                        <li className="flex gap-2">❌ Mal rendimiento en entrenamiento</li>
                        <li className="flex gap-2">❌ Mal rendimiento en prueba</li>
                    </ul>
                </div>

                <div className="border-4 border-blue-200 dark:border-blue-900/30 rounded-xl p-6 bg-blue-50 dark:bg-blue-900/10">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Overfitting</h3>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 mb-4">"El modelo memoriza las respuestas"</p>
                    <ul className="space-y-2">
                        <li className="flex gap-2">❌ <strong>Alta Varianza</strong></li>
                        <li className="flex gap-2">❌ Modelo demasiado complejo</li>
                        <li className="flex gap-2">✅ Excelente en entrenamiento</li>
                        <li className="flex gap-2">❌ Pobre en prueba (no generaliza)</li>
                    </ul>
                </div>
            </div>

            <Section title="La Zona Ricitos de Oro (Good Fit)" icon={<CheckCircle className="text-green-500" />}>
                <p className="mb-4">
                    Queremos un modelo que esté "justo en el medio". Un modelo balanceado captura los patrones subyacentes de los datos (la señal) ignorando el ruido aleatorio.
                </p>
                <KeyConcept title="El Trade-off Bias-Varianza">
                    Hay una tensión constante: reducir el bias suele aumentar la varianza y viceversa.
                    El objetivo del ingeniero de ML es encontrar el punto dulce donde el <strong>Error Total</strong> es mínimo.
                </KeyConcept>
            </Section>

            <Section title="Síntomas y Soluciones" icon={<Brain />}>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        <thead className="uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-4">Problema</th>
                                <th scope="col" className="px-6 py-4">Síntomas</th>
                                <th scope="col" className="px-6 py-4">Soluciones Comunes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Underfitting</th>
                                <td className="px-6 py-4">Errores altos tanto en train como en test</td>
                                <td className="px-6 py-4">
                                    <ul className="list-disc list-inside">
                                        <li>Usar modelo más complejo</li>
                                        <li>Agregar más features</li>
                                        <li>Entrenar por más tiempo</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">Overfitting</th>
                                <td className="px-6 py-4">Error bajo en train, pero alto en test</td>
                                <td className="px-6 py-4">
                                    <ul className="list-disc list-inside">
                                        <li>Conseguir más datos</li>
                                        <li><strong>Regularización</strong> (L1/L2)</li>
                                        <li>Feature selection</li>
                                        <li>Cross-validation</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            <Example title="Analogía: Estudiar para un Examen" color="orange">
                <ul className="space-y-4">
                    <li>
                        <strong>Underfitting:</strong> Solo leíste el índice del libro. No sabes lo suficiente para aprobar el examen.
                    </li>
                    <li>
                        <strong>Overfitting:</strong> Memorizaste las respuestas exactas de los exámenes de años anteriores. Si el profesor cambia un poco las preguntas, reprobarás porque no entendiste los conceptos, solo memorizaste.
                    </li>
                    <li>
                        <strong>Good Fit:</strong> Estudiaste los conceptos y principios. Puedes resolver problemas que nunca has visto antes usando tu conocimiento.
                    </li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
