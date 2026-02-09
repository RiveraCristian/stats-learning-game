import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Brain, Layers, Cpu } from 'lucide-react';

export const RedesNeuronales: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Redes Neuronales
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Inspiradas en el cerebro, construidas con matemáticas
                </p>
            </div>

            <Section title="La Neurona Artificial (Perceptrón)" icon={<Brain />}>
                <p className="mb-4">
                    Es la unidad básica. Recibe varias entradas, las multiplica por "pesos" (importancia), las suma y decide si "disparar" una señal o no.
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">x1</div>
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">x2</div>
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">x3</div>
                        </div>
                        <div className="text-gray-400 text-xl">→</div>
                        <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center font-bold text-green-700 relative">
                            Σ + f
                            <span className="absolute -bottom-6 text-xs text-gray-500 w-32 text-center">Suma Ponderada + Activación</span>
                        </div>
                        <div className="text-gray-400 text-xl">→</div>
                        <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-xs font-bold border border-purple-200">Y</div>
                    </div>
                    <p className="text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">Output = Activación( w1*x1 + w2*x2 + ... + bias )</p>
                </div>
            </Section>

            <Section title="Capas Ocultas (Hidden Layers)" icon={<Layers />}>
                <p className="mb-4">
                    El poder real viene cuando conectamos miles de estas neuronas en capas.
                </p>
                <ul className="space-y-2">
                    <li><strong>Capa de Entrada:</strong> Recibe los datos crudos (píxeles de una imagen).</li>
                    <li><strong>Capas Ocultas:</strong> Aprenden características cada vez más complejas (bordes {'->'} formas {'->'} ojos {'->'} caras).</li>
                    <li><strong>Capa de Salida:</strong> Da la respuesta final ("Es un Gato").</li>
                </ul>
            </Section>

            <Example title="Deep Learning" color="green">
                <p>
                    Cuando una red neuronal tiene <strong>muchas</strong> capas ocultas (profunda), la llamamos <strong>Deep Learning</strong>.
                    Esto es lo que impulsa tecnologías modernas como ChatGPT, reconocimiento facial y conducción autónoma.
                </p>
            </Example>

            <KeyConcept title="Backpropagation">
                <p>
                    Es el algoritmo que permite a la red aprender. Mide el error en la salida y va <strong>hacia atrás</strong> ajustando levemente cada peso de cada neurona para reducir ese error la próxima vez.
                </p>
            </KeyConcept>
        </ArticleLayout>
    );
};
