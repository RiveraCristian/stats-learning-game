import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { Mic, Type, Languages } from 'lucide-react';

export const ProcesamientoLenguajeNatural: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Procesamiento de Lenguaje Natural (NLP)
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Rompiendo la barrera del idioma entre humanos y máquinas
                </p>
            </div>

            <Section title="¿Qué es NLP?" icon={<Languages />}>
                <p className="mb-4">
                    Es la rama de la IA que se ocupa de dar a las computadoras la capacidad de entender textos y palabras habladas de la misma manera que los seres humanos.
                </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Type className="text-blue-500" /> NLU (Understanding)</h3>
                    <p className="text-sm">
                        La parte difícil: Comprender el significado.
                        <br />
                        "El banco estaba cerrado". ¿Se refiere a una institución financiera o a un asiento en el parque? El contexto lo es todo.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Mic className="text-green-500" /> NLG (Generation)</h3>
                    <p className="text-sm">
                        La parte creativa: Producir texto coherente.
                        <br />
                        Escribir un resumen, responder una pregunta o traducir un poema manteniendo la rima.
                    </p>
                </div>
            </div>

            <Section title="Desafíos del Lenguaje">
                <ul className="space-y-4">
                    <li className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                        <strong>Ambigüedad:</strong> "Vi a la mujer con el telescopio". ¿Tengo yo el telescopio o lo tiene ella?
                    </li>
                    <li className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                        <strong>Sarcasmo:</strong> "¡Genial, justo lo que necesitaba, más lluvia!" (La máquina podría pensar que realmente te gusta la lluvia).
                    </li>
                    <li className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                        <strong>Modismos:</strong> "Me costó un ojo de la cara". (La máquina podría buscar precios de ojos humanos).
                    </li>
                </ul>
            </Section>

            <Example title="Tokenización y Embeddings" color="blue">
                <p className="mb-2">
                    Las máquinas no leen letras, leen números.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li><strong>Tokenización:</strong> Romper el texto en trozos. "Hola mundo" {'->'} [Hola, mundo].</li>
                    <li><strong>Vectorización (Embeddings):</strong> Convertir cada palabra en una lista de números (coordenadas) en un espacio multidimensional.</li>
                </ol>
                <p className="mt-2 text-xs italic">
                    En ese espacio matemático, la distancia entre "Rey" y "Reina" es casi la misma que entre "Hombre" y "Mujer". ¡La máquina entiende las relaciones!
                </p>
            </Example>
        </ArticleLayout>
    );
};
