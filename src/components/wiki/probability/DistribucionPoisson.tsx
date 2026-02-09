import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Clock } from 'lucide-react';

export const DistribucionPoisson: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Distribución de Poisson
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Modelando eventos raros en un intervalo de tiempo
                </p>
            </div>

            <Section title="¿Para qué sirve?" icon={<Clock />}>
                <p className="mb-4">
                    La distribución de Poisson nos dice la probabilidad de que ocurra un número determinado de eventos en un <strong>intervalo fijo de tiempo o espacio</strong>,
                    conociendo la tasa promedio de ocurrencia.
                </p>
                <KeyConcept title="Ejemplos Clásicos">
                    <ul className="list-disc list-inside">
                        <li>Número de emails que recibes en una hora.</li>
                        <li>Número de coches que pasan por un peaje en un minuto.</li>
                        <li>Número de erratas en una página de un libro.</li>
                    </ul>
                </KeyConcept>
            </Section>

            <Formula label="Fórmula de Poisson">
                P(X=k) = (λ^k × e^-λ) / k!
            </Formula>
            <p className="text-center text-sm text-gray-500 mb-6">
                λ (lambda) = tasa promedio esperada
            </p>

            <Example title="Call Center" color="blue">
                <p className="mb-2">
                    Un call center recibe un promedio de <strong>3 llamadas por minuto (λ=3)</strong>. ¿Cuál es la probabilidad de recibir exactamente <strong>5 llamadas (k=5)</strong> en el próximo minuto?
                </p>
                <div className="font-mono bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700 mt-3">
                    P(X=5) = (3^5 × e^-3) / 5!
                    <br />
                    = (243 × 0.0498) / 120
                    <br />
                    = 12.1 / 120
                    <br />
                    ≈ <strong>0.10 (10%)</strong>
                </div>
            </Example>
        </ArticleLayout>
    );
};
