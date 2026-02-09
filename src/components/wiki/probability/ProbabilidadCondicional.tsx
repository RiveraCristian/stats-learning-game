import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Shuffle, GitMerge, AlertCircle } from 'lucide-react';

export const ProbabilidadCondicional: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Probabilidad Condicional
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Cómo cambia la probabilidad cuando sabemos que algo ya ocurrió
                </p>
            </div>

            <Section title="Definición" icon={<GitMerge />}>
                <p className="text-lg leading-relaxed mb-4">
                    La probabilidad condicional es la probabilidad de que ocurra un evento A, sabiendo que otro evento B <strong>ya ha ocurrido</strong>.
                </p>
                <p className="mb-4">
                    Se lee como "La probabilidad de A dado B" y se denota como <strong>P(A|B)</strong>.
                </p>

                <Formula label="Fórmula Básica">
                    P(A|B) = P(A ∩ B) / P(B)
                </Formula>

                <p className="text-sm text-center text-gray-500">
                    Donde P(B) {'>'} 0
                </p>
            </Section>

            <Example title="Ejemplo: Baraja de Cartas" color="purple">
                <p className="mb-3">
                    Imagina que sacas una carta de una baraja estándar de 52 cartas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Caso 1: Sin información</h4>
                        <p className="text-sm mb-2">¿Cuál es la probabilidad de sacar un Rey?</p>
                        <div className="font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded text-center">
                            P(Rey) = 4/52 ≈ 7.7%
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-2 border-purple-200 dark:border-purple-900/50">
                        <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Caso 2: Con información (Condicional)</h4>
                        <p className="text-sm mb-2">
                            Alguien ve la carta y te dice: <strong>"Es una figura"</strong> (J, Q, K).
                            <br />
                            ¿Cuál es la probabilidad de que sea un Rey <em>dado que</em> es una figura?
                        </p>
                        <div className="font-mono bg-purple-50 dark:bg-purple-900/30 p-2 rounded text-center">
                            P(Rey | Figura) = 4/12 ≈ 33.3%
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm italic">
                    ¡La probabilidad cambió drásticamente (de 7.7% a 33.3%) gracias a la nueva información!
                    El espacio muestral se redujo de 52 cartas a solo 12 figuras.
                </p>
            </Example>

            <Section title="Independencia" icon={<Shuffle />}>
                <p className="mb-4">
                    Dos eventos A y B son <strong>independientes</strong> si saber que B ocurrió no cambia la probabilidad de A.
                </p>

                <KeyConcept title="Regla de Independencia">
                    Si A y B son independientes:
                    <br />
                    <span className="font-mono bloc mt-2 text-center text-xl">P(A|B) = P(A)</span>
                </KeyConcept>

                <Example title="Independencia vs Dependencia" color="blue">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mt-1">INDEPENDIENTE</span>
                            <div>
                                <strong>Lanzar una moneda dos veces.</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Que salga cara en el primer lanzamiento no afecta en nada al segundo. P(Cara2 | Cara1) = P(Cara2) = 0.5.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded mt-1">DEPENDIENTE</span>
                            <div>
                                <strong>Sacar calcetines de un cajón sin mirar.</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Si sacas un calcetín rojo y no lo devuelves, la probabilidad de que el siguiente sea rojo disminuye (porque quedan menos rojos).
                                </p>
                            </div>
                        </li>
                    </ul>
                </Example>
            </Section>

            <Section title="La Falacia del Jugador" icon={<AlertCircle className="text-red-500" />}>
                <p className="mb-4">
                    Un error común es creer que los eventos independientes son dependientes.
                </p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
                    <p className="font-medium text-red-800 dark:text-red-200">
                        "Ha salido rojo 5 veces seguidas en la ruleta. ¡Seguro que ahora toca negro!"
                    </p>
                    <p className="mt-2 text-sm text-red-700 dark:text-red-300">
                        <strong>Incorrecto.</strong> La ruleta no tiene memoria. La probabilidad sigue siendo la misma en cada giro.
                    </p>
                </div>
            </Section>
        </ArticleLayout>
    );
};
