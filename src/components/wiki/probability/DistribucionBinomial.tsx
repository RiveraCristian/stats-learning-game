import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { ToggleRight } from 'lucide-react';

export const DistribucionBinomial: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Distribución Binomial
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Éxito o Fracaso: contando resultados en repetidos intentos
                </p>
            </div>

            <Section title="¿Cuándo usarla?" icon={<ToggleRight />}>
                <p className="mb-4">
                    La distribución binomial modela el número de "éxitos" en una secuencia de <strong>n</strong> experimentos independientes de Sí/No (Bernoulli).
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Lanzar una moneda 10 veces (Cara/Cruz)</li>
                    <li>Probar 100 productos (Defectuoso/No defectuoso)</li>
                    <li>Encuestar a 50 personas (Vota/No vota)</li>
                </ul>
            </Section>

            <Formula label="La Fórmula Binomial">
                P(X=k) = C(n,k) × p^k × (1-p)^(n-k)
            </Formula>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center text-sm">
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded"><strong>n</strong>: total intentos</div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded"><strong>k</strong>: éxitos deseados</div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded"><strong>p</strong>: prob. éxito</div>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded"><strong>C(n,k)</strong>: combinaciones</div>
            </div>

            <Example title="Tiros Libres en Baloncesto" color="purple">
                <p className="mb-2">
                    Un jugador encesta el <strong>80% (p=0.8)</strong> de sus tiros libres. Si tira <strong>5 veces (n=5)</strong>, ¿cuál es la probabilidad de que enceste exactamente <strong>4 (k=4)</strong>?
                </p>

                <div className="font-mono bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                    P(X=4) = C(5,4) × (0.8)^4 × (0.2)^1
                    <br />
                    = 5 × 0.4096 × 0.2
                    <br />
                    = <strong>0.4096 (41%)</strong>
                </div>
            </Example>
        </ArticleLayout>
    );
};
