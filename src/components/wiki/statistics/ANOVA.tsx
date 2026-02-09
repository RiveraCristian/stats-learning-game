import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { GitBranch, UserCheck, Layers } from 'lucide-react';

export const ANOVA: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    ANOVA
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Analysis of Variance: Comparando más de dos grupos a la vez
                </p>
            </div>

            <Section title="¿Por qué no usar t-tests?" icon={<GitBranch />}>
                <p className="mb-4">
                    Si quieres comparar los promedios de <strong>3 o más grupos</strong>, podrías pensar en hacer muchas pruebas t (A vs B, B vs C, A vs C...).
                </p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r">
                    <h4 className="font-bold text-red-700 dark:text-red-300">¡Error!</h4>
                    <p>Hacer múltiples comparaciones aumenta drásticamente la probabilidad de encontrar una diferencia "significativa" por pura suerte (Error Tipo I).</p>
                </div>
            </Section>

            <KeyConcept title="La Lógica de ANOVA">
                <p>
                    ANOVA compara la varianza <strong>entre</strong> los grupos con la varianza <strong>dentro</strong> de los grupos.
                </p>
                <div className="mt-2 text-center font-mono bg-white dark:bg-gray-900 p-2 rounded">
                    F = Varianza_Entrepreneur_Grupos / Varianza_Intra_Grupos
                </div>
                <p className="mt-2 text-sm">
                    Si F es grande, significa que la diferencia entre los grupos es mucho mayor que el "ruido" dentro de ellos. {'->'} ¡Hay diferencia real!
                </p>
            </KeyConcept>

            <Example title="Fertilizantes en Cultivos" color="green">
                <p className="mb-2">Queremos probar 3 fertilizantes diferentes (A, B, C) en plantas de maíz.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Grupo A:</strong> Crecimiento promedio 15cm</li>
                    <li><strong>Grupo B:</strong> Crecimiento promedio 16cm</li>
                    <li><strong>Grupo C:</strong> Crecimiento promedio 25cm</li>
                </ul>
                <p className="mt-4">
                    ANOVA nos dirá si esa diferencia de 25cm es estadísticamente significativa o si podría ser casualidad.
                    (Probablemente dirá que sí, porque la diferencia "entre grupos" parece grande).
                </p>
            </Example>

            <Section title="Tipos de ANOVA" icon={<Layers />}>
                <ul className="space-y-2">
                    <li><strong>One-Way ANOVA:</strong> Una sola variable independiente (ej: Tipo de Fertilizante).</li>
                    <li><strong>Two-Way ANOVA:</strong> Dos variables independientes (ej: Tipo de Fertilizante + Cantidad de Agua).</li>
                </ul>
            </Section>
        </ArticleLayout>
    );
};
