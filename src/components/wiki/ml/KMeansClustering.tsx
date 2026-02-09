import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Grid, Target } from 'lucide-react';

export const KMeansClustering: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    K-Means Clustering
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Organizando el caos en grupos ordenados
                </p>
            </div>

            <Section title="Agrupamiento no Supervisado" icon={<Grid />}>
                <p className="text-lg mb-4">
                    K-Means es un algoritmo que agrupa datos similares en clusters (grupos). La "K" es el número de grupos que quieres encontrar.
                </p>
                <KeyConcept title="¿Cómo funciona?">
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Eliges <strong>K</strong> (ej: 3 grupos).</li>
                        <li>Colocas 3 puntos (centroides) al azar en el mapa de datos.</li>
                        <li>Asignas cada punto de datos al centroide más cercano.</li>
                        <li>Mueves cada centroide al <strong>centro</strong> (promedio) de su nuevo grupo.</li>
                        <li>Repites pasos 3 y 4 hasta que los centroides ya no se muevan.</li>
                    </ol>
                </KeyConcept>
            </Section>

            <Example title="Tallas de Camisetas" color="blue">
                <p className="mb-2">
                    Eres una fábrica de ropa y tienes las medidas (altura y peso) de 10,000 clientes. No puedes hacer 10,000 tallas personalizadas.
                    ¿Cómo decides las tallas S, M, L?
                </p>
                <p className="mb-4">
                    Usas <strong>K-Means con K=3</strong>.
                </p>
                <ul className="list-disc list-inside space-y-1 bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
                    <li>El algoritmo agrupará a las personas pequeñas, medianas y grandes.</li>
                    <li>El centroide del grupo "pequeño" te dará las medidas exactas para tu talla S.</li>
                    <li>El centroide del grupo "grande" será tu talla L.</li>
                </ul>
            </Example>

            <Section title="El Problema de elegir K" icon={<Target />}>
                <p className="mb-4">
                    ¿Cómo sabemos si hay 3, 4 o 5 grupos naturales?
                </p>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200">
                    <strong>El Método del Codo (Elbow Method):</strong>
                    <p className="text-sm mt-1">
                        Graficamos el error vs el número de clusters. Buscamos el punto donde la curva se dobla como un codo; ese suele ser el número óptimo de grupos.
                    </p>
                </div>
            </Section>
        </ArticleLayout>
    );
};
