import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Repeat, ShieldCheck } from 'lucide-react';

export const CrossValidation: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Cross-Validation
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Asegurando que nuestro modelo no solo memorizó las respuestas
                </p>
            </div>

            <Section title="¿Cuál es el riesgo?" icon={<ShieldCheck />}>
                <p className="mb-4">
                    Si entrenas y pruebas tu modelo con los mismos datos, es como darle el examen al estudiante con las respuestas escritas. Sacará 100/100, pero no habrá aprendido nada.
                    A esto se le llama <strong>Data Leakage</strong> o evaluación sesgada.
                </p>
            </Section>

            <Section title="Validación Cruzada (K-Fold)" icon={<Repeat />}>
                <p className="mb-4">
                    En lugar de dividir los datos una sola vez (80% entrenar, 20% probar), lo hacemos varias veces para estar seguros.
                </p>

                <div className="space-y-4 my-6">
                    <div className="flex w-full h-12 rounded overflow-hidden">
                        <div className="w-1/5 bg-blue-500 flex items-center justify-center text-white text-xs font-bold">Fold 1</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 2</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 3</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 4</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 5</div>
                    </div>
                    <div className="flex w-full h-12 rounded overflow-hidden">
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 1</div>
                        <div className="w-1/5 bg-blue-500 flex items-center justify-center text-white text-xs font-bold">Fold 2</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 3</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 4</div>
                        <div className="w-1/5 bg-gray-300 flex items-center justify-center text-xs text-gray-600">Fold 5</div>
                    </div>
                    <p className="text-center text-sm text-gray-500 italic">
                        Repetimos 5 veces, rotando el set de prueba (azul).
                    </p>
                </div>
            </Section>

            <KeyConcept title="El Beneficio">
                <p>
                    Al final, promediamos los resultados de los 5 intentos. Esto nos da una medida mucho más <strong>robusta</strong> y realista de cómo funcionará el modelo en el mundo real.
                </p>
            </KeyConcept>

            <Example title="Train / Validation / Test" color="purple">
                <p className="mb-2">La división sagrada de los datos:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Train Set (60-70%):</strong> Para que el modelo aprenda (libros de texto).</li>
                    <li><strong>Validation Set (15-20%):</strong> Para ajustar los parámetros mientras diseñamos el modelo (exámenes de práctica). Aquí usamos Cross-Validation.</li>
                    <li><strong>Test Set (15-20%):</strong> Lo guardamos en una caja fuerte hasta el final. Es el examen final real. Solo se usa UNA vez.</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
