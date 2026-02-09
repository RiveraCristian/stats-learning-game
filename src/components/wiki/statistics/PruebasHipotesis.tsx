import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { KeyConcept } from '../common/KeyConcept';
import { Example } from '../common/Example';
import { Microscope, CheckCircle } from 'lucide-react';

export const PruebasHipotesis: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Pruebas de Hipótesis
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    El juicio científico: ¿Inocente o Culpable?
                </p>
            </div>

            <Section title="El Proceso Legal" icon={<Microscope />}>
                <p className="mb-4">
                    Una prueba de hipótesis es como un juicio penal. Asumimos la inocencia hasta que se demuestre lo contrario.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200">
                        <h4 className="font-bold text-blue-600">H₀: Hipótesis Nula</h4>
                        <p className="text-sm">"El acusado es inocente". (No hay efecto, no hay diferencia).</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200">
                        <h4 className="font-bold text-cyan-600">H₁: Hipótesis Alternativa</h4>
                        <p className="text-sm">"El acusado es culpable". (Sí hay efecto, sí hay diferencia).</p>
                    </div>
                </div>
            </Section>

            <KeyConcept title="El p-valor (p-value)">
                <p>
                    Es la probabilidad de ver una evidencia tan extrema como la que tenemos, asumiendo que el acusado es inocente (H₀ es verdadera).
                </p>
                <div className="mt-3 p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 text-center">
                    <p className="font-bold">Si p {'<'} 0.05 → Rechazamos H₀</p>
                    <p className="text-sm text-gray-500">"Es tan improbable que sea inocente con esta evidencia, que lo declaramos culpable."</p>
                </div>
            </KeyConcept>

            <Section title="Errores Comunes" icon={<CheckCircle />}>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-red-500">Error Tipo I:</span>
                        <span>Condenar a un inocente. (Falso Positivo). Decir que hay efecto cuando no lo hay.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="font-bold text-orange-500">Error Tipo II:</span>
                        <span>Liberar a un culpable. (Falso Negativo). No detectar un efecto que sí existe.</span>
                    </li>
                </ul>
            </Section>

            <Example title="Medicamento Nuevo" color="blue">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>H₀:</strong> El nuevo medicamento NO funciona mejor que el placebo.</li>
                    <li><strong>H₁:</strong> El nuevo medicamento SÍ funciona mejor.</li>
                    <li><strong>Resultado:</strong> p-value = 0.03</li>
                    <li><strong>Conclusión:</strong> Como 0.03 {'<'} 0.05, rechazamos H₀. Hay evidencia suficiente para decir que el medicamento funciona.</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
