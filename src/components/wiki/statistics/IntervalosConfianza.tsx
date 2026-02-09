import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Ruler, ShieldCheck, HelpCircle } from 'lucide-react';

export const IntervalosConfianza: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                    Intervalos de Confianza
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Abrazando la incertidumbre con precisión estadística
                </p>
            </div>

            <Section title="¿Qué son?" icon={<Ruler />}>
                <p className="text-lg leading-relaxed mb-4">
                    En estadística, rara vez conocemos el valor exacto de un parámetro poblacional (como el promedio de altura de todos los humanos).
                    En su lugar, usamos una muestra para estimarlo.
                </p>
                <p className="mb-4">
                    Un <strong>Intervalo de Confianza (IC)</strong> es un rango de valores, derivado de los datos de la muestra,
                    que es probable que contenga el valor del parámetro desconocido.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center border border-blue-200">
                    <p className="font-medium text-blue-800 dark:text-blue-200">
                        "Estoy 95% seguro de que el promedio real está entre X y Y"
                    </p>
                </div>
            </Section>

            <Formula label="Fórmula para la Media">
                Media ± (Z × Error Estándar)
            </Formula>

            <p className="text-center text-sm text-gray-500 mb-8">
                Donde Error Estándar = Desviación Estándar / √n
            </p>

            <Section title="La Interpretación Correcta" icon={<HelpCircle className="text-orange-500" />}>
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r">
                        <h4 className="font-bold text-red-700 dark:text-red-300">❌ Interpretación Incorrecta</h4>
                        <p>
                            "Hay un 95% de probabilidad de que la media real esté dentro de ESTE intervalo específico."
                        </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r">
                        <h4 className="font-bold text-green-700 dark:text-green-300">✅ Interpretación Correcta</h4>
                        <p>
                            "Si repitiéramos este experimento muchas veces, el 95% de los intervalos calculados contendrían la media real."
                        </p>
                    </div>
                </div>
            </Section>

            <KeyConcept title="Nivel de Confianza vs Precisión">
                <p className="mb-2">Hay un trade-off inevitable:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Más confianza (ej: 99%)</strong> → Intervalo más ancho (menos preciso).
                    </li>
                    <li>
                        <strong>Menos confianza (ej: 80%)</strong> → Intervalo más angosto (más preciso, pero mayor riesgo de error).
                    </li>
                </ul>
                <p className="mt-2 italic text-gray-600 dark:text-gray-400">
                    Es como pescar: una red más grande (intervalo ancho) tiene más probabilidad de atrapar el pez (media real), pero es menos específica sobre dónde está exactamente.
                </p>
            </KeyConcept>

            <Example title="Ejemplo: Encuesta Política" color="blue">
                <p className="mb-2">
                    Una encuesta dice que el candidato A tiene un apoyo del <strong>52%</strong> con un margen de error del <strong>±3%</strong> (con 95% de confianza).
                </p>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 mt-4">
                    <p className="font-semibold mb-2">Esto significa que el IC es [49%, 55%].</p>
                    <ul className="space-y-2 text-sm">
                        <li>¿Podría tener menos del 50% de apoyo? <strong>Sí</strong> (el intervalo incluye 49%).</li>
                        <li>¿Es seguro que ganará? <strong>No</strong>.</li>
                        <li>Si hiciéramos 100 encuestas idénticas, esperaríamos que en 95 de ellas el apoyo real caiga dentro de sus respectivos intervalos.</li>
                    </ul>
                </div>
            </Example>

            <Section title="¿Cuándo usar t-Student en vez de Z?" icon={<ShieldCheck />}>
                <p>
                    Usamos la distribución <strong>t-Student</strong> cuando:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>El tamaño de la muestra es pequeño (n {'<'} 30).</li>
                    <li>No conocemos la desviación estándar real de la población (casi siempre).</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                    La t-Student tiene "colas más gordas", lo que resulta en intervalos más anchos para compensar la incertidumbre adicional.
                </p>
            </Section>
        </ArticleLayout>
    );
};
