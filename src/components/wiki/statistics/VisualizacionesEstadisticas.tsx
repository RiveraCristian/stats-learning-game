import React from 'react';
import { ArticleLayout } from '../common/ArticleLayout';
import { Section } from '../common/Section';
import { Example } from '../common/Example';
import { PieChart, BarChart, LineChart, Map } from 'lucide-react';

export const VisualizacionesEstadisticas: React.FC = () => {
    return (
        <ArticleLayout category="statistics">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Visualizaciones Estadísticas
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Una imagen vale más que mil tablas
                </p>
            </div>

            <Section title="Elegir el Gráfico Correcto" icon={<Map />}>
                <p className="mb-6">
                    No todos los gráficos sirven para todo. Elegir mal puede confundir o mentir con los datos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <BarChart className="text-blue-500" />
                            <h3 className="font-bold">Histograma</h3>
                        </div>
                        <p className="text-sm">Para ver la <strong>distribución</strong> de una variable numérica.</p>
                        <div className="mt-2 text-xs text-gray-500">Ej: Distribución de edades en una población.</div>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <PieChart className="text-green-500" />
                            <h3 className="font-bold">Scatter Plot (Dispersión)</h3>
                        </div>
                        <p className="text-sm">Para ver la <strong>relación</strong> entre dos variables numéricas.</p>
                        <div className="mt-2 text-xs text-gray-500">Ej: Altura vs Peso.</div>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <LineChart className="text-purple-500" />
                            <h3 className="font-bold">Gráfico de Línea</h3>
                        </div>
                        <p className="text-sm">Para ver <strong>tendencias</strong> a lo largo del tiempo.</p>
                        <div className="mt-2 text-xs text-gray-500">Ej: Precio de acciones en el último año.</div>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 border-2 border-orange-500 flex items-center justify-center text-xs font-bold">BP</div>
                            <h3 className="font-bold">Box Plot (Caja y Bigotes)</h3>
                        </div>
                        <p className="text-sm">Para ver <strong>resumen estadístico</strong> (mediana, cuartiles, outliers).</p>
                        <div className="mt-2 text-xs text-gray-500">Ej: Comparar salarios entre departamentos.</div>
                    </div>
                </div>
            </Section>

            <Example title="El Cuarteto de Anscombe" color="orange">
                <p className="mb-2">
                    Son 4 conjuntos de datos que tienen las <strong>mismas</strong> estadísticas descriptivas (media, varianza, correlación, r²),
                    pero que cuando se grafican se ven <strong>completamente diferentes</strong>.
                </p>
                <p className="font-medium italic text-center my-4">
                    ¡Nunca confíes solo en los números, siempre grafica tus datos!
                </p>
            </Example>
        </ArticleLayout>
    );
};
