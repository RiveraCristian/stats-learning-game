import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { CodeBlock } from '../common/CodeBlock';
import { TrendingDown, Mountain, Compass } from 'lucide-react';

export const GradientDescent: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-4">
                    Gradient Descent
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El motor que impulsa el aprendizaje de las redes neuronales
                </p>
            </div>

            <Section title="La Metáfora de la Montaña" icon={<Mountain />}>
                <div className="relative h-48 bg-gradient-to-b from-blue-100 to-green-100 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                    {/* Visual metaphor placeholder */}
                    <div className="text-center">
                        <p className="text-4xl mb-2">🏔️ 🏃</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Objetivo: Llegar al valle (mínimo error)</p>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                    Imagina que estás en la cima de una montaña en medio de una densa niebla. No puedes ver el valle abajo,
                    pero quieres llegar allí lo más rápido posible.
                </p>
                <p className="mb-4">
                    ¿Qué haces? Miras a tu alrededor, sientes la pendiente bajo tus pies y das un paso en la dirección
                    donde el terreno desciende más pronunciadamente. Repites esto una y otra vez hasta llegar al fondo.
                    Eso es exactamente lo que hace el <strong>Descenso de Gradiente</strong>.
                </p>
            </Section>

            <Section title="¿Cómo funciona?" icon={<TrendingDown />}>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                    <li>
                        <strong>Inicialización:</strong> Empezamos con valores aleatorios para los parámetros del modelo (pesos).
                    </li>
                    <li>
                        <strong>Cálculo del Error (Loss):</strong> Vemos qué tan mal predice nuestro modelo actualmente.
                    </li>
                    <li>
                        <strong>Cálculo del Gradiente:</strong> Calculamos la derivada (la pendiente) de la función de error. Esto nos dice en qué dirección debemos movernos para aumentar el error.
                    </li>
                    <li>
                        <strong>Actualización (El paso):</strong> Nos movemos en la dirección <em>opuesta</em> al gradiente para reducir el error.
                    </li>
                </ol>

                <CodeBlock
                    title="El Algoritmo en Python (simplificado)"
                    language="python"
                    code={`# Repetir hasta converger:
W = W - learning_rate * gradiente(W)`}
                />
            </Section>

            <Section title="Learning Rate (Tasa de Aprendizaje)" icon={<Compass />}>
                <p className="mb-4">
                    Es el hiperparámetro más importante. Decide qué tan grandes son los "pasos" que damos bajando la montaña.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-600 mb-2">Muy Alto</h4>
                        <p className="text-sm">Damos saltos gigantes. Podríamos saltarnos el valle completamente e incluso subir al otro lado (divergencia).</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-yellow-600 mb-2">Muy Bajo</h4>
                        <p className="text-sm">Pasos de hormiga. Llegaremos al valle, pero nos tomará una eternidad (lento).</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-600 mb-2">Justo</h4>
                        <p className="text-sm">Pasos adecuados. Convergencia rápida y estable hacia el mínimo global.</p>
                    </div>
                </div>
            </Section>

            <KeyConcept title="Mínimos Locales vs Globales">
                Uno de los peligros es quedarse atascado en un "pequeño valle" (mínimo local) pensando que es el punto más bajo de todos (mínimo global).
                <br /><br />
                Variantes modernas como <strong>SGD (Stochastic Gradient Descent)</strong> o optimizadores como <strong>Adam</strong> ayudan a evitar este problema añadiendo "momentum" o aleatoriedad.
            </KeyConcept>

            <Example title="Analogía Visual" color="green">
                <p>
                    Piensa en una bola rodando dentro de un tazón.
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                    <li>El tazón es la función de Costo (Loss Function).</li>
                    <li>La posición de la bola son los Pesos (Weights) del modelo.</li>
                    <li>La gravedad es el Gradiente.</li>
                    <li>El fondo del tazón es el modelo perfecto.</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
