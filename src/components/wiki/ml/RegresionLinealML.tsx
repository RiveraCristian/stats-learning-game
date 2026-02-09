import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export const RegresionLinealML: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Regresión Lineal en ML
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El "Hola Mundo" del Machine Learning
                </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-8 border border-blue-200 text-center">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                    Nota: En Estadística vimos la teoría. En ML nos enfocamos en cómo el algoritmo <strong>aprende</strong> los parámetros (entrenamiento).
                </p>
            </div>

            <Section title="La Función de Costo (Cost Function)" icon={<TrendingUp />}>
                <p className="mb-4">
                    Para que la máquina aprenda, primero necesita saber qué tan mal lo está haciendo.
                    Usamos el <strong>Error Cuadrático Medio (MSE)</strong>.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-center text-sm">
                    J(θ) = (1/2m) Σ(predicción - real)²
                </div>
                <p className="mt-4 text-sm text-center italic">
                    El objetivo del ML es encontrar los parámetros θ que hagan que J(θ) sea lo más pequeño posible.
                </p>
            </Section>

            <Example title="Entrenamiento Paso a Paso" color="green">
                <ol className="list-decimal list-inside space-y-3">
                    <li><strong>Inicio:</strong> La máquina traza una línea aleatoria. El error es enorme.</li>
                    <li><strong>Cálculo:</strong> "Si muevo un poco la línea hacia arriba, ¿el error baja?".</li>
                    <li><strong>Actualización:</strong> Mueve la línea un poco en la dirección correcta (Gradient Descent).</li>
                    <li><strong>Repetición:</strong> Hace esto miles de veces hasta que la línea se ajusta perfectamente a los puntos.</li>
                </ol>
            </Example>

            <KeyConcept title="¿Por qué es importante?">
                Aunque es simple, es la base de redes neuronales complejas. Cada neurona hace, esencialmente, una regresión lineal (suma ponderada) antes de aplicar una función de activación.
            </KeyConcept>

            <Section title="Regresión Polinomial" icon={<ArrowUpRight />}>
                <p>
                    ¿Y si los datos no forman una línea recta? Podemos usar regresión lineal con potencias de X (x², x³) para crear curvas.
                    La técnica sigue siendo la misma (lineal en los parámetros), pero el resultado visual es una curva.
                </p>
            </Section>
        </ArticleLayout>
    );
};
