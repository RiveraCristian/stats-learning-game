import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { History, Cpu, Brain, Bot } from 'lucide-react';

export const HistoriaIA: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Historia de la IA
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    De los sueños de la ciencia ficción a la realidad cotidiana
                </p>
            </div>

            <Section title="Los Inicios (1950s - 1970s)" icon={<History />}>
                <div className="relative border-l-2 border-orange-200 dark:border-orange-900 ml-4 space-y-8 my-6">
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500"></span>
                        <h3 className="font-bold text-lg">1950: El Test de Turing</h3>
                        <p className="text-sm text-gray-600">Alan Turing propone: "¿Pueden pensar las máquinas?". Si no puedes distinguir a una máquina de un humano en una conversación, es inteligente.</p>
                    </div>
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500"></span>
                        <h3 className="font-bold text-lg">1956: Conferencia de Dartmouth</h3>
                        <p className="text-sm text-gray-600">Nace el término "Inteligencia Artificial". Se predijo que en 20 años las máquinas harían todo lo que hace un hombre. (Spoiler: No pasó).</p>
                    </div>
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-500"></span>
                        <h3 className="font-bold text-lg">1966: ELIZA</h3>
                        <p className="text-sm text-gray-600">El primer chatbot "terapeuta". Engañó a mucha gente con trucos simples de patrones de texto.</p>
                    </div>
                </div>
            </Section>

            <Section title="El Invierno de la IA (1970s - 1990s)" icon={<Cpu />}>
                <p className="mb-4">
                    Demasiadas promesas y pocos resultados llevaron a recortes de fondos. La IA se estancó.
                    Las computadoras no eran lo suficientemente potentes y no había suficientes datos.
                </p>
            </Section>

            <Section title="El Renacimiento (2000s - Presente)" icon={<Brain />}>
                <div className="relative border-l-2 border-green-200 dark:border-green-900 ml-4 space-y-8 my-6">
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></span>
                        <h3 className="font-bold text-lg">1997: Deep Blue</h3>
                        <p className="text-sm text-gray-600">La IA de IBM vence al campeón mundial de ajedrez Garry Kasparov. (Fuerza bruta, no aprendizaje).</p>
                    </div>
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></span>
                        <h3 className="font-bold text-lg">2012: AlexNet</h3>
                        <p className="text-sm text-gray-600">El momento "Big Bang" del Deep Learning. Una red neuronal aplasta a la competencia en reconocimiento de imágenes.</p>
                    </div>
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></span>
                        <h3 className="font-bold text-lg">2017: AlphaGo</h3>
                        <p className="text-sm text-gray-600">DeepMind vence al campeón de Go, un juego infinitamente más complejo que el ajedrez, usando movimientos creativos.</p>
                    </div>
                    <div className="pl-6 relative">
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></span>
                        <h3 className="font-bold text-lg">2022: ChatGPT</h3>
                        <p className="text-sm text-gray-600">La IA Generativa llega a las masas. Los LLMs demuestran capacidades sorprendentes de lenguaje y razonamiento.</p>
                    </div>
                </div>
            </Section>

            <Example title="¿Qué sigue?" color="orange">
                <ul className="list-disc list-inside">
                    <li>AGI (Inteligencia Artificial General): Una IA capaz de aprender cualquier tarea intelectual que un humano pueda hacer.</li>
                    <li>Fusión con Robótica: Cerebros de IA en cuerpos robóticos útiles.</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
