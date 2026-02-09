import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { HelpCircle, Target, Dna } from 'lucide-react';

export const QueEsProbabilidad: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    ¿Qué es la Probabilidad?
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Entendiendo la incertidumbre del mundo
                </p>
            </div>

            <Section title="Definición" icon={<HelpCircle />}>
                <p className="text-lg leading-relaxed mb-4">
                    La probabilidad es una medida de la certidumbre de que ocurrirá un evento. Es un número entre 0 y 1, donde:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-center">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <div className="text-2xl font-bold text-red-600 mb-2">0</div>
                        <div className="font-semibold">Imposible</div>
                        <div className="text-sm text-gray-500">Ej: Sacar un 7 en un dado normal</div>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">0.5</div>
                        <div className="font-semibold">Posible (50/50)</div>
                        <div className="text-sm text-gray-500">Ej: Cara o Cruz</div>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-600 mb-2">1</div>
                        <div className="font-semibold">Seguro</div>
                        <div className="text-sm text-gray-500">Ej: El sol saldrá mañana</div>
                    </div>
                </div>
            </Section>

            <KeyConcept title="Enfoque Frecuentista vs Bayesiano">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <strong className="text-purple-600">Frecuentista:</strong>
                        <p>La probabilidad es la frecuencia relativa de un evento a largo plazo. "Si lanzo esta moneda infinitas veces, el 50% será cara".</p>
                    </div>
                    <div>
                        <strong className="text-blue-600">Bayesiano:</strong>
                        <p>La probabilidad es un grado de creencia. "Estoy 50% seguro de que será cara, basado en lo que sé".</p>
                    </div>
                </div>
            </KeyConcept>

            <Example title="Ejemplos Cotidianos" color="purple">
                <ul className="space-y-2">
                    <li>🌦️ <strong>Clima:</strong> "Hay un 30% de probabilidad de lluvia"</li>
                    <li>🏥 <strong>Medicina:</strong> "Esta cirugía tiene un 95% de éxito"</li>
                    <li>🎲 <strong>Juegos:</strong> "La probabilidad de ganar la lotería es 1 en 14 millones"</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
