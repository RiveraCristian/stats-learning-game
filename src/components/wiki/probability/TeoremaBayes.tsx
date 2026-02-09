import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { CodeBlock } from '../common/CodeBlock';
import { Brain, TrendingUp } from 'lucide-react';

export const TeoremaBayes: React.FC = () => {
    return (
        <ArticleLayout category="probability">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    Teorema de Bayes
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    La piedra angular del razonamiento probabilístico
                </p>
            </div>

            {/* Introduction */}
            <Section title="Introducción" icon="🎯">
                <p className="text-lg leading-relaxed">
                    El <strong>Teorema de Bayes</strong> es una de las herramientas más poderosas en probabilidad y estadística.
                    Nos permite <strong>actualizar nuestras creencias</strong> a medida que obtenemos nueva evidencia.
                </p>
                <p className="text-lg leading-relaxed">
                    Nombrado en honor al reverendo Thomas Bayes (1701-1761), este teorema es fundamental en:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Machine Learning y clasificación</li>
                    <li>Diagnósticos médicos</li>
                    <li>Filtros de spam</li>
                    <li>Sistemas de recomendación</li>
                </ul>
            </Section>

            {/* Formula */}
            <Formula label="Teorema de Bayes">
                P(A|B) = [P(B|A) × P(A)] / P(B)
            </Formula>

            {/* Components Explanation */}
            <Section title="Componentes de la Fórmula" icon="🔍">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <div className="font-bold text-purple-700 dark:text-purple-300 mb-2">P(A|B) - Posterior</div>
                        <p className="text-sm">Probabilidad de A dado que B ocurrió. Lo que queremos calcular.</p>
                    </div>
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <div className="font-bold text-blue-700 dark:text-blue-300 mb-2">P(B|A) - Likelihood</div>
                        <p className="text-sm">Probabilidad de observar B si A es verdadero.</p>
                    </div>
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <div className="font-bold text-green-700 dark:text-green-300 mb-2">P(A) - Prior</div>
                        <p className="text-sm">Probabilidad inicial de A antes de ver evidencia.</p>
                    </div>
                    <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <div className="font-bold text-orange-700 dark:text-orange-300 mb-2">P(B) - Evidencia</div>
                        <p className="text-sm">Probabilidad total de observar B.</p>
                    </div>
                </div>
            </Section>

            {/* Medical Example */}
            <Example title="Ejemplo Clásico: Diagnóstico Médico" color="blue">
                <p className="font-semibold mb-3">Situación:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>Una enfermedad afecta al <strong>1%</strong> de la población</li>
                    <li>Una prueba detecta la enfermedad correctamente el <strong>99%</strong> del tiempo (sensibilidad)</li>
                    <li>La prueba da falsos positivos el <strong>5%</strong> del tiempo</li>
                </ul>

                <p className="font-semibold mt-4 mb-2">Pregunta:</p>
                <p className="italic">Si tu prueba sale positiva, ¿cuál es la probabilidad de que realmente tengas la enfermedad?</p>

                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="font-semibold mb-2">Solución:</p>
                    <div className="space-y-2 font-mono text-sm">
                        <div>P(Enfermo|Positivo) = P(Positivo|Enfermo) × P(Enfermo) / P(Positivo)</div>
                        <div className="ml-4">= 0.99 × 0.01 / P(Positivo)</div>
                    </div>

                    <p className="mt-3 text-sm">Donde P(Positivo) = P(Positivo|Enfermo) × P(Enfermo) + P(Positivo|Sano) × P(Sano)</p>
                    <div className="font-mono text-sm ml-4">= 0.99 × 0.01 + 0.05 × 0.99 = 0.0594</div>

                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                        <p className="font-bold text-lg">Resultado: ~16.6%</p>
                        <p className="text-sm mt-1">¡Sorprendentemente bajo! Esto es porque la enfermedad es rara.</p>
                    </div>
                </div>
            </Example>

            {/* Key Insight */}
            <KeyConcept title="Insight Clave">
                Incluso con una prueba muy precisa (99%), si la condición es rara (1%),
                la mayoría de los positivos serán <strong>falsos positivos</strong>.
                Esto demuestra por qué no deberíamos hacer pruebas masivas para enfermedades muy raras.
            </KeyConcept>

            {/* ML Applications */}
            <Section title="Aplicaciones en Machine Learning" icon={<Brain />}>
                <h3 className="text-xl font-bold mb-3">1. Naive Bayes Classifier</h3>
                <p className="mb-4">
                    Uno de los algoritmos de clasificación más populares, especialmente para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li><strong>Filtros de spam:</strong> Clasificar emails como spam o no spam</li>
                    <li><strong>Análisis de sentimientos:</strong> Positivo, negativo, neutral</li>
                    <li><strong>Clasificación de texto:</strong> Categorizar documentos</li>
                </ul>

                <CodeBlock
                    title="Ejemplo: Clasificador de Spam"
                    language="python"
                    code={`# Calcular probabilidad de spam dado las palabras
P(Spam | "gratis", "dinero") = 
    P("gratis", "dinero" | Spam) × P(Spam) / P("gratis", "dinero")

# Naive Bayes asume independencia:
P("gratis", "dinero" | Spam) = P("gratis"|Spam) × P("dinero"|Spam)

# Ejemplo con números:
P(Spam | palabras) = (0.8 × 0.7) × 0.3 / 0.2 = 0.84
# 84% de probabilidad de que sea spam`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">2. Redes Bayesianas</h3>
                <p>
                    Modelos gráficos que representan relaciones probabilísticas entre variables.
                    Útiles para razonamiento bajo incertidumbre y toma de decisiones.
                </p>
            </Section>

            {/* Spam Filter Example */}
            <Example title="Ejemplo Práctico: Filtro de Spam" color="purple">
                <p className="mb-3">Supongamos que queremos clasificar un email con la palabra "gratis":</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded">
                        <div className="font-bold text-red-700 dark:text-red-300">Datos de Spam</div>
                        <div className="text-sm mt-2">P("gratis"|Spam) = 0.80</div>
                        <div className="text-sm">P(Spam) = 0.30</div>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                        <div className="font-bold text-green-700 dark:text-green-300">Datos de No Spam</div>
                        <div className="text-sm mt-2">P("gratis"|No Spam) = 0.05</div>
                        <div className="text-sm">P(No Spam) = 0.70</div>
                    </div>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p className="font-semibold mb-2">Cálculo:</p>
                    <div className="space-y-1 text-sm font-mono">
                        <div>P(Spam|"gratis") = (0.80 × 0.30) / [(0.80 × 0.30) + (0.05 × 0.70)]</div>
                        <div className="ml-4">= 0.24 / (0.24 + 0.035)</div>
                        <div className="ml-4">= 0.24 / 0.275</div>
                        <div className="ml-4 font-bold text-lg">≈ 87.3%</div>
                    </div>
                    <p className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                        ✓ Clasificar como SPAM
                    </p>
                </div>
            </Example>

            {/* Advantages and Limitations */}
            <Section title="Ventajas y Limitaciones" icon={<TrendingUp />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">✅ Ventajas</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                <span>Actualización continua con nueva evidencia</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                <span>Funciona bien con datos limitados</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                <span>Interpretable y transparente</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                <span>Rápido de entrenar y predecir</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">⚠️ Limitaciones</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">•</span>
                                <span>Asume independencia (Naive Bayes)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">•</span>
                                <span>Sensible a prior incorrectos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">•</span>
                                <span>Problemas con probabilidad cero</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">•</span>
                                <span>No captura relaciones complejas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Conclusion */}
            <KeyConcept title="Para Recordar">
                El Teorema de Bayes nos enseña que <strong>actualizar creencias con evidencia</strong> es fundamental
                para el razonamiento probabilístico. Es la base de muchos algoritmos modernos de ML y nos ayuda a
                tomar decisiones informadas bajo incertidumbre.
            </KeyConcept>
        </ArticleLayout>
    );
};
