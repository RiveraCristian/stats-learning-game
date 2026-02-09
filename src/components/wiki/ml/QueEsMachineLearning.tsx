import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { Brain, Cpu, Database } from 'lucide-react';

export const QueEsMachineLearning: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    ¿Qué es Machine Learning?
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Enseñando a las computadoras a aprender por sí mismas
                </p>
            </div>

            <Section title="La Definición Clásica" icon={<Brain />}>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-lg italic text-center mb-6 border border-green-200">
                    "Campo de estudio que da a las computadoras la capacidad de aprender sin ser explícitamente programadas."
                    <span className="block text-sm font-normal mt-2">- Arthur Samuel (1959)</span>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                    En lugar de escribir reglas estrictas ("Si pasa X, haz Y"), en ML alimentamos a la computadora con <strong>datos</strong> y dejamos que ella descubra las reglas (patrones) por su cuenta.
                </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Database className="text-blue-500" /> Programación Tradicional
                    </h3>
                    <div className="space-y-4 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-4 rounded">
                        <p>Datos + Reglas = Respuestas</p>
                        <p className="text-gray-500">// El humano debe saber las reglas</p>
                    </div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-green-200">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                        <Cpu className="text-green-500" /> Machine Learning
                    </h3>
                    <div className="space-y-4 text-sm font-mono bg-green-50 dark:bg-green-900/30 p-4 rounded">
                        <p>Datos + Respuestas = Reglas</p>
                        <p className="text-green-700 dark:text-green-400">// La máquina descubre las reglas</p>
                    </div>
                </div>
            </div>

            <Example title="Filtro de Spam" color="green">
                <ul className="space-y-4">
                    <li>
                        <strong>Enfoque Tradicional:</strong> Escribes miles de reglas.
                        <br />
                        <span className="text-sm font-mono bg-gray-100 p-1 rounded">if "ganaste" in email: spam = true</span>
                        <br />
                        <span className="text-xs text-red-500">Problema: Los spammers cambian "ganaste" por "g@naste" y tu filtro falla.</span>
                    </li>
                    <li>
                        <strong>Enfoque Machine Learning:</strong> Le das al algoritmo 1 millón de emails con la etiqueta "Spam" o "No Spam".
                        <br />
                        La máquina aprende sola qué palabras, combinaciones, horas y remitentes indican spam. Se adapta automáticamente a nuevos trucos.
                    </li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
