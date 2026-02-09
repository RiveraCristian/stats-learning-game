import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { Bot, Compass, Target } from 'lucide-react';

export const AgentesAutonomos: React.FC = () => {
    return (
        <ArticleLayout category="ai">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Agentes Autónomos
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    De "Chatbots" a "Do-bots"
                </p>
            </div>

            <Section title="¿Qué es un Agente?" icon={<Bot />}>
                <p className="mb-4">
                    Un modelo de lenguaje (LLM) es pasivo: Solo habla cuando le hablas.
                    Un <strong>Agente</strong> es activo: Tiene un objetivo y usa herramientas para cumplirlo por sí mismo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                        <span className="text-4xl mb-2">💬</span>
                        <h3 className="font-bold">Chatbot (ChatGPT)</h3>
                        <p className="text-sm text-gray-600">Usuario: "Agenda una reunión".</p>
                        <p className="text-sm text-blue-600 mt-2">IA: "Claro, aquí tienes un borrador de correo para que lo envíes".</p>
                    </div>
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg flex flex-col items-center text-center border border-orange-200">
                        <span className="text-4xl mb-2">🤖</span>
                        <h3 className="font-bold text-orange-800">Agente (AutoGPT)</h3>
                        <p className="text-sm text-gray-600">Usuario: "Agenda una reunión".</p>
                        <p className="text-sm text-orange-600 mt-2">IA: "Hecho. Revisé tu calendario, envié las invitaciones y reservé la sala".</p>
                    </div>
                </div>
            </Section>

            <Section title="El Ciclo de Vida del Agente" icon={<Compass />}>
                <ol className="list-decimal list-inside space-y-4">
                    <li className="pl-2">
                        <strong>Percepción:</strong> Lee el entorno (emails, pantalla, archivos).
                    </li>
                    <li className="pl-2">
                        <strong>Planificación:</strong> Rompe la tarea grande en pasos pequeños. "Primero necesito saber los correos de los invitados..."
                    </li>
                    <li className="pl-2">
                        <strong>Acción:</strong> Usa herramientas (API de Calendar, Navegador Web, Python).
                    </li>
                    <li className="pl-2">
                        <strong>Reflexión:</strong> "¿Funcionó? Si falló, ¿por qué? Lo intento de nuevo de otra forma".
                    </li>
                </ol>
            </Section>

            <Example title="Caso de Uso Futuro" color="orange">
                <p>
                    "Agente, planifica mis vacaciones a Japón con un presupuesto de $2000."
                </p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    <li>Busca vuelos baratos en 5 sitios web.</li>
                    <li>Reserva hoteles que acepten cancelación.</li>
                    <li>Compra entradas para Disney Tokyo.</li>
                    <li>Te envía el itinerario final PDF a tu WhatsApp.</li>
                </ul>
            </Example>
        </ArticleLayout>
    );
};
