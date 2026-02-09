import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Terminal, Send, AlertCircle } from 'lucide-react';

export const PromptEngineering: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Prompt Engineering
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El arte de susurrar a las máquinas
                </p>
            </div>

            <Section title="Input = Output" icon={<Terminal />}>
                <p className="mb-4">
                    Los LLMs son muy sensibles a cómo les pides las cosas. Un pequeño cambio en tu "Prompt" (instrucción) puede cambiar drásticamente la calidad de la respuesta.
                    El Prompt Engineering es la habilidad de diseñar inputs óptimos para obtener los mejores resultados.
                </p>
            </Section>

            <Example title="Antes y Después" color="purple">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
                        <strong className="text-red-700">Pobre:</strong>
                        <p className="text-sm font-mono mt-1">"Escribe un poema sobre el mar."</p>
                        <p className="text-xs text-gray-500 mt-2">Sale algo genérico y aburrido.</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
                        <strong className="text-green-700">Mejorado:</strong>
                        <p className="text-sm font-mono mt-1">"Escribe un poema corto sobre el mar furioso en estilo de Pablo Neruda, enfocado en la soledad de un faro."</p>
                        <p className="text-xs text-gray-500 mt-2">Sale algo específico, estilizado y emotivo.</p>
                    </div>
                </div>
            </Example>

            <Section title="Técnicas Clave" icon={<Send />}>
                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600">Few-Shot Prompting</h4>
                        <p className="text-sm mb-2">Darle ejemplos al modelo antes de pedirle que haga la tarea.</p>
                        <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded text-xs font-mono">
                            Traduce a francés:<br />
                            Perro: Chien<br />
                            Gato: Chat<br />
                            Casa: [El modelo completa]
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600">Chain-of-Thought (CoT)</h4>
                        <p className="text-sm mb-2">Pedirle al modelo que "piense paso a paso". Esto mejora enormemente la capacidad de razonamiento lógico y matemático.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600">Role Playing</h4>
                        <p className="text-sm mb-2">"Actúa como un experto en nutrición..." o "Eres un profesor de historia sarcástico...". Ayuda a establecer el tono y el nivel de conocimiento.</p>
                    </div>
                </div>
            </Section>

            <KeyConcept title="El Contexto es Rey">
                Los modelos tienen una "ventana de contexto" limitada. Si la conversación es muy larga, olvidan el principio.
                Mucho del Prompt Engineering se trata de manejar esa memoria eficientemente.
            </KeyConcept>
        </ArticleLayout>
    );
};
