import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { BarChart, Users } from 'lucide-react';

export const TeoremaLimiteCentral: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Teorema del Límite Central
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El milagro estadístico que hace que todo funcione
                </p>
            </div>

            <Section title="La Magia del CLT" icon={<BarChart />}>
                <p className="text-lg leading-relaxed mb-4">
                    El Teorema del Límite Central (CLT) dice que si tomas muestras suficientemente grandes de <strong>cualquier</strong> población
                    (no importa qué forma tenga, aunque sea muy rara), la distribución de los <strong>promedios</strong> de esas muestras seguirá una Distribución Normal.
                </p>
                <div className="flex justify-center my-6">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 rounded text-center max-w-lg">
                        <p className="font-bold text-yellow-800 dark:text-yellow-200">¡Esto es increíble!</p>
                        <p className="text-sm mt-1">Significa que podemos usar estadísticas normales (curva de campana) incluso si los datos originales NO son normales.</p>
                    </div>
                </div>
            </Section>

            <Section title="Los Requisitos" icon={<Users />}>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Independencia:</strong> Las muestras deben ser independientes.</li>
                    <li><strong>Aleatoriedad:</strong> Las muestras deben ser aleatorias.</li>
                    <li><strong>Tamaño de Muestra:</strong> Generalmente n {'>'} 30 es suficiente para que la magia ocurra.</li>
                </ul>
            </Section>

            <KeyConcept title="¿Por qué es importante?">
                El CLT es la razón por la que podemos hacer inferencia estadística (hipótesis, intervalos de confianza)
                sobre poblaciones enteras usando solo pequeñas muestras. Sin el CLT, la estadística moderna no existiría.
            </KeyConcept>
        </ArticleLayout>
    );
};
