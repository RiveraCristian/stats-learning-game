import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Box, Layers } from 'lucide-react';

export const EventosEspaciosMuestrales: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Eventos y Espacios Muestrales
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El conjunto de todo lo que puede suceder
                </p>
            </div>

            <Section title="Espacio Muestral (S)" icon={<Box />}>
                <p className="text-lg mb-4">
                    Es el conjunto de <strong>todos los resultados posibles</strong> de un experimento aleatorio.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-bold mb-2">Lanzar una moneda</h4>
                        <p className="font-mono text-purple-600 dark:text-purple-400">S = {'{Cara, Cruz}'}</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-bold mb-2">Lanzar un dado</h4>
                        <p className="font-mono text-purple-600 dark:text-purple-400">S = {'{1, 2, 3, 4, 5, 6}'}</p>
                    </div>
                </div>
            </Section>

            <Section title="Evento (E)" icon={<Layers />}>
                <p className="mb-4">
                    Un evento es cualquier <strong>subconjunto</strong> del espacio muestral. Es lo que nos interesa medir.
                </p>
                <Example title="Eventos en un Dado" color="blue">
                    <ul className="space-y-2">
                        <li><strong>Evento A (sacar par):</strong> E = {'{2, 4, 6}'}</li>
                        <li><strong>Evento B (sacar mayor a 4):</strong> E = {'{5, 6}'}</li>
                    </ul>
                </Example>
            </Section>

            <KeyConcept title="Tipos de Eventos">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Elemental:</strong> Un solo resultado (ej: sacar un 5).</li>
                    <li><strong>Compuesto:</strong> Más de un resultado (ej: sacar un número impar).</li>
                    <li><strong>Imposible:</strong> No puede ocurrir (ej: sacar 7 en un dado estándar).</li>
                    <li><strong>Seguro:</strong> Ocurre siempre (ej: sacar un número menor a 10).</li>
                </ul>
            </KeyConcept>
        </ArticleLayout>
    );
};
