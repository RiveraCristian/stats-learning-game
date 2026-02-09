import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { Scissors } from 'lucide-react';

export const IndependenciaEventos: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Independencia de Eventos
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Cuando el pasado no influye en el futuro
                </p>
            </div>

            <Section title="Definición" icon={<Scissors />}>
                <p className="text-lg mb-4">
                    Dos eventos son independientes si la ocurrencia de uno <strong>no afecta</strong> la probabilidad de ocurrencia del otro.
                </p>
                <Formula label="Regla del Producto para Eventos Independientes">
                    P(A ∩ B) = P(A) × P(B)
                </Formula>
            </Section>

            <Example title="Lanzamiento de Monedas" color="green">
                <p className="mb-2">Si lanzas una moneda dos veces:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>P(Cara en 1º) = 0.5</li>
                    <li>P(Cara en 2º) = 0.5</li>
                </ul>
                <p className="mt-4">
                    La probabilidad de sacar Cara DOS veces seguidas es:
                    <br />
                    <span className="font-mono font-bold">0.5 × 0.5 = 0.25 (25%)</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    El resultado del primer lanzamiento no cambia mágicamente el peso de la moneda para el segundo.
                </p>
            </Example>

            <Section title="Eventos Dependientes">
                <p className="mb-4">
                    Cuando lo que pasa primero SÍ afecta lo que pasa después.
                </p>
                <Example title="Sacar cartas sin reemplazo" color="orange">
                    <p>Tienes una baraja de 52 cartas.</p>
                    <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Sacas un As. P(As) = 4/52.</li>
                        <li><strong>No devuelves la carta.</strong></li>
                        <li>Ahora quedan 51 cartas y solo 3 Ases.</li>
                        <li>La probabilidad de sacar otro As cambia: P(As 2 | As 1) = 3/51.</li>
                    </ol>
                </Example>
            </Section>
        </ArticleLayout>
    );
};
