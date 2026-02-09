import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Database, Bot, Search, ArrowRight } from 'lucide-react';

export const RAGSystems: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    RAG Systems
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Retrieval-Augmented Generation: Dándole memoria y hechos a los LLMs
                </p>
            </div>

            <Section title="El Problema: Alucinaciones" icon={<Bot />}>
                <p className="text-lg leading-relaxed mb-4">
                    Los modelos de lenguaje grandes (LLMs) como ChatGPT son increíbles, pero tienen dos grandes defectos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li><strong>Conocimiento congelado:</strong> No saben nada que haya pasado después de su fecha de entrenamiento.</li>
                    <li><strong>Confabulación:</strong> Inventan datos con total confianza cuando no saben la respuesta.</li>
                </ul>
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-center font-medium text-orange-800 dark:text-orange-200">
                    ¿Cómo solucionamos esto sin re-entrenar el modelo (que cuesta millones)?
                </div>
            </Section>

            <Section title="La Solución: RAG" icon={<Database />}>
                <p className="mb-6">
                    <strong>RAG</strong> combina lo mejor de dos mundos:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center my-8">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex-1 w-full border border-blue-200">
                        <Search className="w-12 h-12 mx-auto text-blue-500 mb-2" />
                        <h3 className="font-bold text-lg">Retrieval (Búsqueda)</h3>
                        <p className="text-sm text-gray-600">Busca información relevante en una base de datos confiable.</p>
                    </div>

                    <div className="hidden md:block">
                        <ArrowRight className="w-8 h-8 text-gray-400" />
                    </div>

                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl flex-1 w-full border border-green-200">
                        <Bot className="w-12 h-12 mx-auto text-green-500 mb-2" />
                        <h3 className="font-bold text-lg">Augmented Generation</h3>
                        <p className="text-sm text-gray-600">El LLM usa esa información para generar una respuesta precisa.</p>
                    </div>
                </div>
            </Section>

            <Section title="El Flujo de Trabajo RAG (Paso a Paso)">
                <ol className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 space-y-8 my-6">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <span className="text-blue-600 font-bold">1</span>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Usuario hace una pregunta</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Ej: "¿Cuál es el saldo de mi cuenta?"</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <span className="text-blue-600 font-bold">2</span>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Búsqueda Vectorial</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">El sistema convierte la pregunta en números (embeddings) y busca documentos similares en una base de conocimiento privada.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <span className="text-blue-600 font-bold">3</span>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Construcción del Prompt</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Se le dice al LLM: "Usando SOLO estos datos recuperados: [Datos], responde a la pregunta del usuario".</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <span className="text-green-600 font-bold">4</span>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Respuesta Final</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">El LLM genera una respuesta coherente y basada en hechos reales.</p>
                    </li>
                </ol>
            </Section>

            <KeyConcept title="¿Por qué es revolucionario?">
                RAG permite a las empresas usar LLMs potentes (como GPT-4) con sus propios datos privados,
                sin el riesgo de filtraciones y garantizando que las respuestas sean precisas y actualizadas.
            </KeyConcept>
        </ArticleLayout>
    );
};
