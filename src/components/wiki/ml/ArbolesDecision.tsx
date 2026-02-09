import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { GitBranch, CheckCircle, HelpCircle } from 'lucide-react';

export const ArbolesDecision: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Árboles de Decisión
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Tomando decisiones como un diagrama de flujo
                </p>
            </div>

            <Section title="¿Cómo piensa un árbol?" icon={<GitBranch />}>
                <p className="text-lg mb-4">
                    Un árbol de decisión divide los datos haciendo una serie de preguntas de Sí/No, hasta llegar a una conclusión.
                    Es uno de los modelos más intuitivos porque funciona igual que la lógica humana.
                </p>
            </Section>

            <div className="flex justify-center my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 max-w-lg w-full">
                    <h3 className="text-center font-bold mb-4">¿Debería salir a jugar tenis?</h3>
                    <div className="flex flex-col items-center gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900/50 px-4 py-2 rounded-full font-semibold text-blue-800 dark:text-blue-200 border border-blue-200">
                            ¿Está lloviendo?
                        </div>
                        <div className="grid grid-cols-2 w-full text-center text-sm relative">
                            <div className="after:content-[''] after:absolute after:top-[-16px] after:left-1/4 after:w-px after:h-4 after:bg-gray-300">
                                <span className="text-green-600 font-bold block mb-2">No</span>
                                <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded text-green-800 border border-green-200">
                                    ¡A Jugar! ✅
                                </div>
                            </div>
                            <div className="after:content-[''] after:absolute after:top-[-16px] after:left-3/4 after:w-px after:h-4 after:bg-gray-300">
                                <span className="text-red-600 font-bold block mb-2">Sí</span>
                                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full mb-2 font-semibold text-orange-800 text-xs border border-orange-200">
                                    ¿Hay viento fuerte?
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="text-green-600 font-bold">No</span>
                                        <div className="bg-green-100 dark:bg-green-900/50 p-1 rounded mt-1 border border-green-200">Jugar ✅</div>
                                    </div>
                                    <div>
                                        <span className="text-red-600 font-bold">Sí</span>
                                        <div className="bg-red-100 dark:bg-red-900/50 p-1 rounded mt-1 border border-red-200">Casa ❌</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section title="¿Cómo se construye?" icon={<HelpCircle />}>
                <p className="mb-4">
                    La clave es elegir <strong>cuál es la mejor pregunta</strong> para hacer primero. Usamos métricas como:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Entropía:</strong> Mide el desorden. Queremos reducir la entropía.</li>
                    <li><strong>Gini Impurity:</strong> Mide qué tan "mezclado" está un grupo. Queremos grupos puros.</li>
                    <li><strong>Information Gain:</strong> ¿Cuánta información gano al hacer esta pregunta?</li>
                </ul>
            </Section>

            <Example title="Pros y Contras" color="green">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <strong className="text-green-600 block mb-2">Ventajas</strong>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Muy fácil de explicar y visualizar.</li>
                            <li>No requiere escalar los datos.</li>
                            <li>Maneja bien datos numéricos y categóricos.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-red-600 block mb-2">Desventajas</strong>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Tiende MUCHO al <strong>Overfitting</strong> (crea árboles gigantes que memorizan los datos).</li>
                            <li>Sensible a pequeños cambios en los datos.</li>
                        </ul>
                    </div>
                </div>
            </Example>
        </ArticleLayout>
    );
};
