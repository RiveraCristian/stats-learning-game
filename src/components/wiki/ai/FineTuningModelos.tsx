import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { KeyConcept } from '../common/KeyConcept';
import { Sliders, GraduationCap } from 'lucide-react';

export const FineTuningModelos: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Fine-tuning de Modelos
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Especializando al genio generalista
                </p>
            </div>

            <Section title="Entrenamiento vs Fine-Tuning" icon={<GraduationCap />}>
                <p className="mb-4">
                    Imagina que contratas a un graduado universitario brillante (Pre-trained Model). Sabe mucho de todo (historia, mate, literatura), pero no sabe nada de cómo funciona TU empresa.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-bold mb-2">Pre-training (Universidad)</h4>
                        <p className="text-sm text-gray-600">Cuesta millones de dólares. Se leen "todo internet". Aprenden lenguaje, lógica y hechos generales.</p>
                    </div>
                    <div className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg border border-orange-200">
                        <h4 className="font-bold mb-2 text-orange-800">Fine-tuning (Onboarding)</h4>
                        <p className="text-sm text-orange-800">Cuesta mucho menos. Se le entrena con un dataset pequeño y específico de tu dominio (ej: leyes chilenas, manuales médicos de tu hospital).</p>
                    </div>
                </div>
            </Section>

            <Example title="Ejemplo Médico" color="red">
                <p className="mb-2">
                    GPT-4 base puede dar consejos de salud generales.
                </p>
                <p className="mb-2">
                    Pero si haces un <strong>Fine-tuning</strong> con 10,000 radiografías y sus diagnósticos correspondientes, obtienes:
                    <strong> Med-GPT</strong>.
                </p>
                <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 text-sm mt-2">
                    Ahora el modelo habla como doctor, usa terminología precisa y es mucho mejor diagnosticando que el modelo general, aunque probablemente haya olvidado cómo escribir poesía sobre piratas.
                </div>
            </Example>

            <Section title="¿Cuándo usar Fine-Tuning?" icon={<Sliders />}>
                <KeyConcept title="Regla de Oro">
                    Usa Fine-Tuning cuando quieras cambiar el <strong>estilo, formato o comportamiento</strong> del modelo.
                    <br /><br />
                    Usa <strong>RAG</strong> (Retrieval Augmented Generation) cuando quieras que el modelo sepa <strong>hechos nuevos</strong> o datos privados.
                </KeyConcept>
            </Section>
        </ArticleLayout>
    );
};
