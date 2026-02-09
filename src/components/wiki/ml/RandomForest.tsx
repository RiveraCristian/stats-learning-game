import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { Trees, Users } from 'lucide-react';

export const RandomForest: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Random Forest
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    La sabiduría de las multitudes... de árboles
                </p>
            </div>

            <Section title="La Fuerza del Conjunto (Ensemble)" icon={<Trees />}>
                <p className="text-lg leading-relaxed mb-4">
                    Un solo Árbol de Decisión suele equivocarse o sobreajustarse (overfitting).
                    Pero, ¿y si creamos <strong>100 árboles</strong> diferentes y les hacemos votar?
                    Eso es un <strong>Random Forest</strong>.
                </p>
                <div className="flex justify-center my-6">
                    <div className="flex gap-2 items-end">
                        <div className="text-center">
                            <span className="text-2xl">🌲</span>
                            <p className="text-xs">Pred: A</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl">🌲</span>
                            <p className="text-xs">Pred: B</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl">🌲</span>
                            <p className="text-xs">Pred: A</p>
                        </div>
                        <div className="text-center">
                            <span className="text-2xl">🌲</span>
                            <p className="text-xs">Pred: A</p>
                        </div>
                        <div className="ml-4 p-2 bg-green-100 dark:bg-green-900/40 rounded border border-green-200">
                            <strong>Mayoría: A</strong> ✅
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="¿De dónde viene lo 'Random'?" icon={<Users />}>
                <p className="mb-4">Para que la votación funcione, los árboles deben ser diferentes entre sí (diversos). Usamos dos trucos:</p>
                <ol className="list-decimal list-inside space-y-3">
                    <li>
                        <strong>Bagging (Bootstrap Aggregating):</strong> Cada árbol entrena con un subconjunto <em>aleatorio</em> de los datos (con repetición).
                    </li>
                    <li>
                        <strong>Feature Randomness:</strong> En cada división del árbol, solo se le permite considerar un subconjunto <em>aleatorio</em> de características (no todas).
                    </li>
                </ol>
            </Section>

            <Example title="La Analogía del Jurado" color="green">
                <p className="mb-2">
                    Imagina que quieres saber si una película es buena.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200">
                        <h4 className="font-bold text-red-700">Árbol Único (Un amigo experto)</h4>
                        <p className="text-sm">Puede tener un gusto muy específico o haber tenido un mal día. Su opinión es sesgada.</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200">
                        <h4 className="font-bold text-green-700">Random Forest (100 personas)</h4>
                        <p className="text-sm">Preguntas a 100 personas variadas. Aunque algunos se equivoquen, el promedio de sus opiniones será mucho más fiable que la de uno solo.</p>
                    </div>
                </div>
            </Example>
        </ArticleLayout>
    );
};
