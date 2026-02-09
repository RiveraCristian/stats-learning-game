import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { Rocket, AlertTriangle, Sparkles } from 'lucide-react';

export const FuturoIA: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    El Futuro de la IA
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Utopía, Distopía o algo intermedio
                </p>
            </div>

            <Section title="Tendencias Inminentes" icon={<Rocket />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200">
                        <h4 className="font-bold text-blue-800 dark:text-blue-200">Multimodalidad</h4>
                        <p className="text-sm">Modelos que ven, escuchan, hablan y dibujan simultáneamente, como un humano.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200">
                        <h4 className="font-bold text-purple-800 dark:text-purple-200">IA en el Borde (Edge AI)</h4>
                        <p className="text-sm">Tu teléfono ejecutará modelos potentes sin necesidad de internet (privacidad + velocidad).</p>
                    </div>
                </div>
            </Section>

            <Section title="Riesgos Existenciales" icon={<AlertTriangle />}>
                <p className="mb-4">
                    No es solo "Terminator". Hay riesgos más sutiles:
                </p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">⚠️</span>
                        <span><strong>Desinformación Masiva:</strong> Generación automática de noticias falsas perfectas a escala industrial.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">⚠️</span>
                        <span><strong>Sesgo Automatizado:</strong> Sistemas de contratación o crédito que discriminan silenciosamente.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">⚠️</span>
                        <span><strong>Pérdida de Empleos:</strong> Automatización de trabajos intelectuales (traductores, analistas, programadores junior).</span>
                    </li>
                </ul>
            </Section>

            <Example title="La Singularidad Tecnológica" color="red">
                <p>
                    Es el punto hipotético en el tiempo donde el crecimiento tecnológico se vuelve incontrolable e irreversible.
                    <br />
                    Ocurre cuando una IA es capaz de diseñar una IA mejor que ella misma. Esto inicia un ciclo de mejora recursiva que resulta en una superinteligencia divina en cuestión de días o horas.
                </p>
            </Example>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl text-center">
                <Sparkles className="mx-auto text-green-600 mb-2" size={32} />
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Una nota final de optimismo</h3>
                <p className="text-gray-700 dark:text-gray-300">
                    La IA también tiene el potencial de curar enfermedades, resolver el cambio climático y personalizar la educación para cada niño del planeta. El futuro no está escrito; depende de cómo la construyamos hoy.
                </p>
            </div>
        </ArticleLayout>
    );
};
