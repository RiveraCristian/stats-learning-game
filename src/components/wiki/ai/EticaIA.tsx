import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Scale, Eye, Shield, Lock } from 'lucide-react';

export const EticaIA: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                    Ética en Inteligencia Artificial
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Un gran poder conlleva una gran responsabilidad
                </p>
            </div>

            <Section title="¿Por qué importa la ética?" icon={<Scale className="text-orange-500" />}>
                <p className="text-lg leading-relaxed mb-4">
                    La IA no es neutral. Los algoritmos toman decisiones que afectan vidas humanas: quién obtiene un préstamo,
                    quién es contratado, o qué noticias vemos. Si estos sistemas no se diseñan con cuidado, pueden amplificar
                    prejuicios y causar daño real.
                </p>
                <KeyConcept title="El Mito de la Objetividad">
                    Muchas personas creen que "los números no mienten". Pero los datos de entrenamiento reflejan
                    la historia humana, incluyendo sus sesgos, racismo y desigualdades. Un modelo entrenado con datos sesgados
                    será un modelo sesgado.
                </KeyConcept>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Section title="Transparencia" icon={<Eye />}>
                    <p>
                        El problema de la "Caja Negra" (Black Box): muchos modelos de Deep Learning son tan complejos
                        que ni sus creadores saben exactamente por qué tomaron una decisión específica.
                        <br /><br />
                        <strong>Explainable AI (XAI)</strong> busca hacer que los resultados sean interpretables por humanos.
                    </p>
                </Section>
                <Section title="Privacidad" icon={<Lock />}>
                    <p>
                        Los modelos de IA requieren cantidades masivas de datos. ¿De dónde vienen? ¿Dimos nuestro consentimiento?
                        <br /><br />
                        Técnicas como <strong>Differential Privacy</strong> y <strong>Federated Learning</strong> intentan entrenar
                        modelos sin exponer datos personales individuales.
                    </p>
                </Section>
            </div>

            <Section title="Bias (Sesgo) Algorítmico" icon={<Shield />}>
                <p className="mb-4">
                    El bias ocurre cuando un sistema se comporta injustamente hacia ciertos grupos de personas.
                </p>

                <Example title="Caso Real: Amazon Recruiting Tool (2018)" color="red">
                    <p className="mb-2">
                        Amazon desarrolló una IA para filtrar currículums automáticamente buscando a los mejores candidatos.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                        <strong>El Problema:</strong> El modelo aprendió que ser hombre era preferible.
                        <br />
                        <strong>La Causa:</strong> Se entrenó con CVs de los últimos 10 años, una época dominada por hombres en tech.
                        <br />
                        <strong>El Resultado:</strong> La IA penalizaba CVs que contenían la palabra "mujeres" (ej: "capitana del club de mujeres").
                        <br />
                        <strong>Desenlace:</strong> Amazon tuvo que desmantelar el proyecto.
                    </div>
                </Example>

                <Example title="Caso Real: COMPAS (Justicia Penal)" color="purple">
                    <p className="mb-2">
                        Un algoritmo usado en cortes de EE.UU. para predecir la probabilidad de reincidencia criminal.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                        <strong>El Hallazgo:</strong> Una investigación de ProPublica encontró que el algoritmo tenía un sesgo racial significativo.
                        <br />
                        Predecía falsamente que los acusados negros reincidirían al doble de la tasa que los acusados blancos,
                        mientras que subestimaba el riesgo de los acusados blancos.
                    </div>
                </Example>
            </Section>

            <Section title="Principios para una IA Ética">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                        <strong className="block text-lg text-orange-600 dark:text-orange-400 mb-1">Equidad (Fairness)</strong>
                        Tratar a todas las personas y grupos de manera justa y sin discriminación.
                    </li>
                    <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                        <strong className="block text-lg text-orange-600 dark:text-orange-400 mb-1">Responsabilidad (Accountability)</strong>
                        Debe haber humanos responsables por las decisiones de las máquinas.
                    </li>
                    <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                        <strong className="block text-lg text-orange-600 dark:text-orange-400 mb-1">Seguridad</strong>
                        Los sistemas deben ser seguros, robustos y resistentes a ataques.
                    </li>
                    <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                        <strong className="block text-lg text-orange-600 dark:text-orange-400 mb-1">Beneficio Humano</strong>
                        La IA debe desarrollarse para aumentar el bienestar humano y social.
                    </li>
                </ul>
            </Section>
        </ArticleLayout>
    );
};
