import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Search, List } from 'lucide-react';

export const AnalisisVarianza: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Análisis de Varianza
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Entendiendo el "por qué" detrás de los datos
                </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-8 border border-yellow-200 text-center">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Nota: Este artículo complementa al artículo sobre <strong>ANOVA</strong>, profundizando en los supuestos y aplicaciones.
                </p>
            </div>

            <Section title="Descomposición de la Varianza" icon={<List />}>
                <p className="mb-4">
                    En cualquier experimento, los datos varían. El análisis de varianza intenta responder: <strong>¿De dónde viene esa variación?</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Variación Total (SST):</strong> Todo lo que los datos se mueven.</li>
                    <li><strong>Variación Explicada (SSM):</strong> Lo que nuestro modelo (grupos, tratamientos) explica. "Varió porque le dimos fertilizante".</li>
                    <li><strong>Variación No Explicada (SSE):</strong> Lo que es puro ruido o error aleatorio. "Varió porque sí".</li>
                </ul>
            </Section>

            <KeyConcept title="El Ratio F">
                <p>Esa es la clave de todo el análisis.</p>
                <div className="mt-2 text-center font-mono text-lg font-bold text-blue-600 dark:text-blue-400">
                    F = Señal / Ruido
                </div>
                <p className="mt-2">
                    Si hay mucha "señal" (diferencia por el tratamiento) comparada con el "ruido" de fondo, entonces el tratamiento funciona.
                </p>
            </KeyConcept>

            <Section title="Supuestos Importantes" icon={<Search />}>
                <p className="mb-4">Para que el análisis sea válido, deben cumplirse estas condiciones:</p>
                <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Normalidad:</strong> Los residuos (errores) deben seguir una distribución normal.</li>
                    <li><strong>Homocedasticidad:</strong> La varianza debe ser similar en todos los grupos. (No comparar un grupo muy disperso con uno muy compacto).</li>
                    <li><strong>Independencia:</strong> Las observaciones no deben influirse entre sí.</li>
                </ol>
            </Section>
        </ArticleLayout>
    );
};
