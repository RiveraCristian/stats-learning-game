import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { MessageSquare, Database, Sparkles } from 'lucide-react';

export const QueSonLLMs: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    ¿Qué son los LLMs?
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Large Language Models: Los loros estocásticos que aprendieron a razonar
                </p>
            </div>

            <Section title="Predictores de la Siguiente Palabra" icon={<MessageSquare />}>
                <p className="text-lg mb-4">
                    En su núcleo más básico, un LLM como GPT-4 es solo una calculadora de probabilidades muy avanzada. Su única función es:
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center font-mono text-lg mb-6 shadow-inner">
                    Input: "El gato estaba sentado en la..."
                    <br />
                    <span className="text-green-600 font-bold mt-2 block">Probabilidades:</span>
                    <div className="text-sm mt-2 text-left inline-block">
                        - alfombra: 45%
                        <br />
                        - silla: 20%
                        <br />
                        - mesa: 15%
                        <br />
                        - luna: 0.001%
                    </div>
                </div>
                <p>
                    Al repetir este juego de "adivina la siguiente palabra" billones de veces con todo el texto de internet, el modelo empieza a entender gramática, hechos, razonamiento y lógica.
                </p>
            </Section>

            <Section title="La Arquitectura Transformer" icon={<Database />}>
                <p className="mb-4">
                    Inventada por Google en 2017 ("Attention is All You Need"). La clave es el mecanismo de <strong>Atención</strong>.
                </p>
                <Example title="Mecanismo de Atención" color="orange">
                    <p className="mb-2">Frase: "El animal no cruzó la calle porque estaba muy cansado."</p>
                    <p className="text-sm">
                        ¿A qué se refiere "estaba"? ¿Al animal o a la calle?
                        <br />
                        Un modelo anterior se confundiría. Un Transformer "presta atención" a la relación entre palabras. Sabe que "cansado" se asocia más con "animal" que con "calle".
                    </p>
                </Example>
            </Section>

            <Section title="Alucinaciones" icon={<Sparkles />}>
                <p className="mb-4">
                    Como el modelo está diseñado para completar patrones y sonar convincente, a veces inventa hechos con total confianza.
                </p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r">
                    <p className="font-medium text-red-800 dark:text-red-200">
                        ⚠️ Advertencia: Un LLM no tiene concepto de "verdad". Solo tiene concepto de "qué palabra suena bien después de la anterior".
                    </p>
                </div>
            </Section>
        </ArticleLayout>
    );
};
