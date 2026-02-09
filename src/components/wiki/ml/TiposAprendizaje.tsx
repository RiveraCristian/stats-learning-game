import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { BookOpen, User, EyeOff, Bot } from 'lucide-react';

export const TiposAprendizaje: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Tipos de Aprendizaje
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Supervisado, No Supervisado y por Refuerzo
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500">
                    <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                            <User className="text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Supervisado</h3>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                            "Toma estos ejemplos con sus respuestas correctas y aprende."
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500">
                    <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                            <EyeOff className="text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">No Supervisado</h3>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                            "Toma estos datos sin etiquetas y encuentra patrones tú solo."
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500">
                    <div className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4 mx-auto">
                            <Bot className="text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">Refuerzo</h3>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                            "Prueba y error. Si lo haces bien, te doy un premio; si no, castigo."
                        </p>
                    </div>
                </div>
            </div>

            <Section title="Supervisado: El Maestro Guía" icon={<BookOpen />}>
                <p className="mb-4">Es el tipo más común. Tienes datos de entrada (X) y salida (Y).</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong className="block text-blue-600 mb-1">Clasificación</strong>
                        <span className="text-sm">Predecir una categoría (ej: Spam, Fraude, Gato).</span>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong className="block text-blue-600 mb-1">Regresión</strong>
                        <span className="text-sm">Predecir un número (ej: Precio de casa, Temperatura).</span>
                    </div>
                </div>
            </Section>

            <Example title="Ejemplos de Cada Uno" color="blue">
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mt-1">SUPERVISADO</span>
                        <span>Predecir si un cliente va a dejar de pagar su crédito (basado en historial de miles de clientes pasados).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded mt-1">NO SUPERVISADO</span>
                        <span>Segmentar clientes de un supermercado en grupos de compra similares (Clustering) para marketing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded mt-1">REFUERZO</span>
                        <span>Un robot aprendiendo a caminar o una IA aprendiendo a jugar ajedrez jugando millones de partidas contra sí misma.</span>
                    </li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
