import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Formula } from '../common/Formula';
import { Example } from '../common/Example';
import { CheckSquare, AlertTriangle } from 'lucide-react';

export const EvaluacionModelos: React.FC = () => {
    return (
        <ArticleLayout category="ml">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
                    Evaluación de Modelos
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    ¿Cómo sabemos si nuestro modelo es bueno?
                </p>
            </div>

            <Section title="La Matriz de Confusión" icon={<CheckSquare />}>
                <p className="mb-4">Para problemas de clasificación (Sí/No), no basta con la precisión general.</p>
                <div className="grid grid-cols-2 gap-2 text-center text-sm max-w-md mx-auto mb-6">
                    <div className="bg-green-100 p-4 rounded border border-green-200">
                        <strong className="block text-green-800 text-lg">TP</strong>
                        True Positive (Acierto)
                    </div>
                    <div className="bg-red-100 p-4 rounded border border-red-200">
                        <strong className="block text-red-800 text-lg">FP</strong>
                        False Positive (Falsa Alarma)
                    </div>
                    <div className="bg-red-100 p-4 rounded border border-red-200">
                        <strong className="block text-red-800 text-lg">FN</strong>
                        False Negative (No lo vio)
                    </div>
                    <div className="bg-green-100 p-4 rounded border border-green-200">
                        <strong className="block text-green-800 text-lg">TN</strong>
                        True Negative (Acierto)
                    </div>
                </div>
            </Section>

            <Section title="Métricas Clave">
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-lg text-blue-600">Accuracy (Exactitud)</h3>
                        <p className="text-sm text-gray-600 mb-1">¿Qué porcentaje total acertó?</p>
                        <Formula>(TP + TN) / Total</Formula>
                        <p className="text-xs text-orange-500 mt-1">⚠️ Engañoso si las clases están desbalanceadas.</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-purple-600">Precision</h3>
                        <p className="text-sm text-gray-600 mb-1">De los que dijo que eran positivos, ¿cuántos lo eran realmente?</p>
                        <Formula>TP / (TP + FP)</Formula>
                        <p className="text-xs text-gray-500 mt-1">Importante cuando el costo de una Falsa Alarma es alto (ej: marcar correo legítimo como spam).</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-orange-600">Recall (Sensibilidad)</h3>
                        <p className="text-sm text-gray-600 mb-1">De todos los positivos reales, ¿cuántos detectó?</p>
                        <Formula>TP / (TP + FN)</Formula>
                        <p className="text-xs text-gray-500 mt-1">Vital cuando perderse un positivo es peligroso (ej: detectar cáncer).</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-teal-600">F1-Score</h3>
                        <p className="text-sm text-gray-600 mb-1">El balance armónico entre Precision y Recall.</p>
                        <Formula>2 * (Precision * Recall) / (Precision + Recall)</Formula>
                    </div>
                </div>
            </Section>

            <Example title="Caso: Detector de Terremotos" color="red">
                <p className="mb-2">
                    Supongamos un modelo que predice "No habrá terremoto" el 100% de las veces.
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Accuracy:</strong> 99.99% (¡Parece excelente!)</li>
                    <li><strong>Recall:</strong> 0% (¡Es inútil!)</li>
                </ul>
                <div className="mt-2 flex items-center gap-2 text-red-600 bg-red-50 p-2 rounded">
                    <AlertTriangle size={16} />
                    <span className="text-sm font-semibold">Lección: Jamás uses solo Accuracy en eventos raros.</span>
                </div>
            </Example>
        </ArticleLayout>
    );
};
