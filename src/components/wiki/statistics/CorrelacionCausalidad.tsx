import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Info, TrendingUp, AlertCircle } from 'lucide-react';

export const CorrelacionCausalidad: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    Correlación vs Causalidad
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    La trampa más común en el análisis de datos
                </p>
            </div>

            <KeyConcept title="El Mantra del Estadístico">
                <span className="text-2xl font-bold text-center block my-2">
                    "Correlación no implica Causalidad"
                </span>
                Solo porque dos cosas se muevan juntas, no significa que una cause la otra.
            </KeyConcept>

            <Section title="¿Qué es la Correlación?" icon={<TrendingUp />}>
                <p className="mb-4">
                    Es una medida estadística que describe el tamaño y la dirección de una relación entre dos o más variables.
                </p>
                <Formula label="Coeficiente de Pearson (r)">
                    -1 ≤ r ≤ 1
                </Formula>
                <ul className="space-y-2 mt-4 ml-4">
                    <li><strong>r = 1:</strong> Correlación positiva perfecta (si uno sube, el otro sube)</li>
                    <li><strong>r = 0:</strong> Sin correlación lineal</li>
                    <li><strong>r = -1:</strong> Correlación negativa perfecta (si uno sube, el otro baja)</li>
                </ul>
            </Section>

            <Section title="Ejemplos de Correlaciones Espurias" icon={<AlertCircle className="text-red-500" />}>
                <p className="mb-6">
                    A veces encontramos correlaciones fuertes que son pura coincidencia o causadas por un tercer factor oculto.
                </p>

                <div className="space-y-6">
                    <Example title="Helados y Ahogamientos" color="orange">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1">
                                <p><strong>Observación:</strong> Hay una fuerte correlación positiva entre las ventas de helados y el número de ahogamientos en piscinas.</p>
                                <p className="mt-2 text-red-600"><strong>¿Conclusión errónea?:</strong> ¿Comer helado causa que te ahogues?</p>
                            </div>
                            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
                                <p className="font-bold text-blue-600 dark:text-blue-400">La Verdad (Variable Confusora)</p>
                                <p>¡El <strong>CALOR</strong> (Verano)!</p>
                                <p className="text-sm mt-1">Cuando hace calor, la gente come más helado Y también nada más en piscinas.</p>
                            </div>
                        </div>
                    </Example>

                    <Example title="Nicolas Cage y Ahogamientos" color="purple">
                        <p className="mb-2"><strong>Dato Real:</strong> Entre 1999 y 2009, el número de personas que se ahogaron cayendo en una piscina correlaciona con el número de películas en las que apareció Nicolas Cage.</p>
                        <p><strong>Causa:</strong> Pura y absoluta casualidad. Si buscas en suficientes datos, encontrarás patrones que no existen.</p>
                    </Example>
                </div>
            </Section>

            <Section title="¿Cómo probar Causalidad?" icon={<Info />}>
                <p className="mb-4">
                    Para decir "A causa B", necesitamos más que una gráfica bonita. El estándar de oro es el <strong>Experimento Controlado Aleatorizado A/B testing</strong>.
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Tomas dos grupos idénticos.</li>
                    <li>Cambias SOLO una variable en un grupo (el tratamiento).</li>
                    <li>Mantienes todo igual en el otro (el control).</li>
                    <li>Si hay diferencia en el resultado, ¡bingo! Probablemente es causal.</li>
                </ol>
            </Section>
        </ArticleLayout>
    );
};
