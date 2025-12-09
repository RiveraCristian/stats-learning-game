import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'probability',
    name: 'Probabilidades y Distribuciones',
    description: 'Aprende los fundamentos de la probabilidad, desde lanzamientos de monedas hasta distribuciones complejas y el Teorema de Bayes.',
    color: '#9333EA',
    lightColor: '#C084FC',
    icon: '🎲',
  },
  {
    id: 'statistics',
    name: 'Estadística',
    description: 'Domina las medidas estadísticas, correlación, regresión, intervalos de confianza y pruebas de hipótesis de forma visual.',
    color: '#3B82F6',
    lightColor: '#60A5FA',
    icon: '📊',
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    description: 'Entiende los algoritmos de ML mediante simulaciones interactivas de clasificación, clustering y redes neuronales.',
    color: '#10B981',
    lightColor: '#34D399',
    icon: '🤖',
  },
  {
    id: 'ai',
    name: 'Inteligencia Artificial',
    description: 'Explora el mundo de la IA moderna: LLMs, prompt engineering, agentes autónomos y sistemas RAG.',
    color: '#F59E0B',
    lightColor: '#FBBF24',
    icon: '🧠',
  },
];

export const getCategoryInfo = (id: string): CategoryInfo | undefined => {
  return categories.find(cat => cat.id === id);
};
