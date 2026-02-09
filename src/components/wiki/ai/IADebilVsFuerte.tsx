import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Zap, BrainCircuit } from 'lucide-react';

export const IADebilVsFuerte: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    IA Débil vs IA Fuerte
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Especialistas vs Generalistas
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                        <Zap className="text-blue-500" /> IA Débil (ANI)
                    </h3>
                    <p className="text-center font-semibold text-gray-500 mb-4">Artificial Narrow Intelligence</p>
                    <p className="text-sm text-center mb-4">
                        Es la IA que tenemos hoy. Es <strong>superhumana</strong> en una tarea específica, pero inútil en cualquier otra cosa.
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-2 bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <li>Siri / Alexa</li>
                        <li>Recomendaciones de Netflix</li>
                        <li>Coches autónomos</li>
                        <li>AlphaGo</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                    <h3 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
                        <BrainCircuit className="text-red-500" /> IA Fuerte (AGI)
                    </h3>
                    <p className="text-center font-semibold text-gray-500 mb-4">Artificial General Intelligence</p>
                    <p className="text-sm text-center mb-4">
                        Es el "Santo Grial". Una IA tan versátil y flexible como la mente humana. Puede aprender a cocinar, programar y filosofar.
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-2 bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <li>C-3PO / R2-D2</li>
                        <li>Data (Star Trek)</li>
                        <li>Skynet (Versión mala)</li>
                        <li>JARVIS (Iron Man)</li>
                    </ul>
                </div>
            </div>

            <Section title="La Prueba del Café">
                <p className="mb-4">
                    Steve Wozniak (cofundador de Apple) propuso esta prueba para la AGI:
                </p>
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-center italic text-orange-900 dark:text-orange-100">
                    "Una máquina debe ser capaz de entrar en una casa promedio de Estados Unidos (que nunca ha visto antes) y descubrir cómo preparar café: encontrar la cafetera, el café, añadir agua, buscar una taza y servirlo sin ayuda."
                </div>
                <p className="mt-4 text-sm text-center">
                    Ningún robot actual está cerca de lograr esto de forma fiable.
                </p>
            </Section>

            <KeyConcept title="Superinteligencia (ASI)">
                <p>
                    El paso teórico siguiente a la AGI. Una inteligencia que supera a la mente humana más brillante en todos los campos, incluyendo la creatividad científica, la sabiduría general y las habilidades sociales.
                </p>
            </KeyConcept>
        </ArticleLayout>
    );
};
