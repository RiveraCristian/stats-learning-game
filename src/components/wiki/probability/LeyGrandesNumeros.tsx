import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { TrendingUp, Infinity } from 'lucide-react';

export const LeyGrandesNumeros: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Ley de los Grandes Números
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Por qué el casino siempre gana a largo plazo
                </p>
            </div>

            <Section title="La Idea Intuitiva" icon={<TrendingUp />}>
                <p className="text-lg leading-relaxed mb-4">
                    La Ley de los Grandes Números (LLN) establece que a medida que realizamos un experimento más y más veces,
                    el promedio de los resultados obtenidos se acercará más y más al valor esperado (teórico).
                </p>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center font-medium">
                    "El azar es impredecible a corto plazo, pero muy predecible a largo plazo."
                </div>
            </Section>

            <Example title="Lanzando una moneda" color="purple">
                <div className="space-y-4">
                    <div>
                        <strong>10 lanzamientos:</strong>
                        <p className="text-sm">Podrías obtener 8 caras y 2 cruces (80% caras). ¡Es posible!</p>
                    </div>
                    <div>
                        <strong>1,000 lanzamientos:</strong>
                        <p className="text-sm">Probablemente estarás cerca de 500 caras (ej: 480-520). El porcentaje será ~50%.</p>
                    </div>
                    <div>
                        <strong>1,000,000 lanzamientos:</strong>
                        <p className="text-sm">Es casi imposible desviarse significativamente del 50%.</p>
                    </div>
                </div>
            </Example>

            <KeyConcept title="Corolario: La Falacia del Apostador">
                <p>
                    La ley funciona hacia el infinito, pero no "corrige" el corto plazo.
                    <br />
                    Si salen 10 caras seguidas, la moneda no tiene "memoria" para sacar cruces y equilibrar el promedio.
                    Simplemente, en los siguientes 1000 tiros, esas 10 caras iniciales se diluirán en el promedio total.
                </p>
            </KeyConcept>

            <Section title="Aplicaciones Reales" icon={<Infinity />}>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Seguros:</strong> No saben si tú tendrás un accidente, pero saben casi exactamente cuántos de sus 100,000 clientes lo tendrán.</li>
                    <li><strong>Casinos:</strong> La "ventaja de la casa" garantiza ganancias matemáticas a largo plazo.</li>
                    <li><strong>Muestreo:</strong> Por qué podemos confiar en las encuestas si la muestra es suficientemente grande.</li>
                </ul>
            </Section>
        </ArticleLayout>
    );
};
