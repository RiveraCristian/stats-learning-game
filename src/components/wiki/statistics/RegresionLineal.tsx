import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { TrendingUp, Minimize, Target } from 'lucide-react';

export const RegresionLineal: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Regresión Lineal
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Prediciendo el futuro trazando una línea recta
                </p>
            </div>

            <Section title="La Idea Central" icon={<TrendingUp />}>
                <p className="text-lg mb-4">
                    La regresión lineal simple es un método para modelar la relación entre una variable dependiente (Y) y una variable independiente (X).
                </p>
                <p className="font-medium text-center text-lg italic text-gray-700 dark:text-gray-300">
                    "Si conozco X, ¿puedo adivinar Y?"
                </p>
            </Section>

            <Formula label="La Ecuación de la Recta">
                Y = β₀ + β₁X + ε
            </Formula>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="font-bold text-xl text-blue-600">Y</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Predicción</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="font-bold text-xl text-blue-600">β₀</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Intercepto</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="font-bold text-xl text-blue-600">β₁</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">Pendiente</div>
                </div>
            </div>

            <Section title="Mínimos Cuadrados Ordinarios (OLS)" icon={<Minimize />}>
                <p className="mb-4">
                    ¿Cómo elegimos la "mejor" línea entre un montón de puntos dispersos?
                </p>
                <KeyConcept title="El Método de Mínimos Cuadrados">
                    Buscamos la línea que minimice la suma de los <strong>errores al cuadrado</strong>.
                    Es decir, queremos que la distancia vertical total entre los puntos reales y nuestra línea sea lo más pequeña posible.
                </KeyConcept>
                <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <p className="font-mono text-sm">Minimizar Σ(Y_real - Y_predicho)²</p>
                </div>
            </Section>

            <Section title="R-Cuadrado (R²)" icon={<Target />}>
                <p className="mb-3">
                    El coeficiente de determinación, o R², nos dice qué tan bien se ajusta el modelo a los datos.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2 dark:bg-gray-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-4 w-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>0 (Pésimo ajuste)</span>
                    <span>1 (Ajuste perfecto)</span>
                </div>
                <p>
                    Si R² = 0.80, significa que el modelo explica el <strong>80% de la variabilidad</strong> de los datos.
                </p>
            </Section>

            <Example title="Ejemplo: Precio de Casas" color="blue">
                <p className="mb-3">
                    Queremos predecir el precio de una casa basándonos en su tamaño (metros cuadrados).
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Variable X (Independiente):</strong> Tamaño en m²</li>
                    <li><strong>Variable Y (Dependiente):</strong> Precio en $</li>
                </ul>

                <p className="font-semibold">Modelo obtenido:</p>
                <div className="font-mono bg-blue-50 dark:bg-blue-900/20 p-3 rounded mb-4">
                    Precio = 50,000 + 2,000 × (Metros²)
                </div>

                <p className="text-sm">
                    Esto significa que:
                    <br />
                    1. El precio base (intercepto) es $50,000.
                    <br />
                    2. Por cada metro cuadrado extra (pendiente), el precio sube $2,000.
                </p>
            </Example>
        </ArticleLayout>
    );
};
