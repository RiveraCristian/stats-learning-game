import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { ScatterChart, Minimize2 } from 'lucide-react';

export const MedidasDispersion: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Medidas de Dispersión
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    ¿Qué tan separados están los datos?
                </p>
            </div>

            <Section title="La Variabilidad Importa" icon={<ScatterChart />}>
                <p className="text-lg mb-4">
                    Dos grupos de datos pueden tener el mismo promedio pero ser completamente diferentes. Las medidas de dispersión nos dicen cuánto se alejan los datos del centro.
                </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <h3 className="font-bold text-lg mb-2">Rango</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Diferencia entre el máximo y el mínimo.</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 mt-2 rounded text-center">Rango = Max - Min</div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Varianza (σ²)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Promedio de las desviaciones al cuadrado.</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 mt-2 rounded text-center">σ² = Σ(x - μ)² / N</div>
                </div>
            </div>

            <Section title="Desviación Estándar (σ)" icon={<Minimize2 />}>
                <p className="mb-4">
                    Es la raíz cuadrada de la varianza. Es la medida más usada porque está en las mismas unidades que los datos originales.
                </p>
                <Formula>
                    σ = √Varianza
                </Formula>
            </Section>

            <Example title="El Clima: San Diego vs Desierto" color="blue">
                <p className="mb-4">Ambos lugares tienen una temperatura promedio anual de <strong>20°C</strong>.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 border border-blue-200 rounded">
                        <h4 className="font-bold text-blue-600">San Diego (Baja Dispersión)</h4>
                        <p className="text-sm">Casi siempre está entre 15°C y 25°C.</p>
                        <div className="mt-2 text-xs font-mono bg-blue-50 p-1 rounded">σ = 3°C</div>
                    </div>
                    <div className="p-3 border border-orange-200 rounded">
                        <h4 className="font-bold text-orange-600">Desierto (Alta Dispersión)</h4>
                        <p className="text-sm">Días de 40°C y noches de 0°C.</p>
                        <div className="mt-2 text-xs font-mono bg-orange-50 p-1 rounded">σ = 15°C</div>
                    </div>
                </div>
                <p className="mt-4 text-sm italic">
                    El promedio es el mismo, pero la experiencia (y la dispersión) es totalmente diferente.
                </p>
            </Example>
        </ArticleLayout>
    );
};
