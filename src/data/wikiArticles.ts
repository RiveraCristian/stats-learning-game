import { WikiArticle, Category } from '../types';

export const wikiArticles: WikiArticle[] = [
  // PROBABILITY ARTICLES
  {
    id: 'que-es-probabilidad',
    title: '¿Qué es la Probabilidad?',
    category: 'probability' as Category,
    path: '/wiki/probability/que-es-probabilidad.md',
    relatedGames: ['coin-flip'],
  },
  {
    id: 'eventos-espacios-muestrales',
    title: 'Eventos y Espacios Muestrales',
    category: 'probability' as Category,
    path: '/wiki/probability/eventos-espacios-muestrales.md',
  },
  {
    id: 'probabilidad-condicional',
    title: 'Probabilidad Condicional',
    category: 'probability' as Category,
    path: '/wiki/probability/probabilidad-condicional.md',
    relatedGames: ['bayes-theorem'],
  },
  {
    id: 'independencia-eventos',
    title: 'Independencia de Eventos',
    category: 'probability' as Category,
    path: '/wiki/probability/independencia-eventos.md',
  },
  {
    id: 'teorema-bayes',
    title: 'Teorema de Bayes',
    category: 'probability' as Category,
    path: '/wiki/probability/teorema-bayes.md',
    relatedGames: ['bayes-theorem'],
  },
  {
    id: 'distribucion-normal',
    title: 'Distribución Normal',
    category: 'probability' as Category,
    path: '/wiki/probability/distribucion-normal.md',
    relatedGames: ['distribution-builder'],
  },
  {
    id: 'distribucion-binomial',
    title: 'Distribución Binomial',
    category: 'probability' as Category,
    path: '/wiki/probability/distribucion-binomial.md',
    relatedGames: ['distribution-builder'],
  },
  {
    id: 'distribucion-poisson',
    title: 'Distribución de Poisson',
    category: 'probability' as Category,
    path: '/wiki/probability/distribucion-poisson.md',
  },
  {
    id: 'ley-grandes-numeros',
    title: 'Ley de Grandes Números',
    category: 'probability' as Category,
    path: '/wiki/probability/ley-grandes-numeros.md',
    relatedGames: ['coin-flip'],
  },
  {
    id: 'teorema-limite-central',
    title: 'Teorema del Límite Central',
    category: 'probability' as Category,
    path: '/wiki/probability/teorema-limite-central.md',
  },

  // STATISTICS ARTICLES
  {
    id: 'medidas-tendencia-central',
    title: 'Medidas de Tendencia Central',
    category: 'statistics' as Category,
    path: '/wiki/statistics/medidas-tendencia-central.md',
    relatedGames: ['guess-measure'],
  },
  {
    id: 'medidas-dispersion',
    title: 'Medidas de Dispersión',
    category: 'statistics' as Category,
    path: '/wiki/statistics/medidas-dispersion.md',
  },
  {
    id: 'correlacion-causalidad',
    title: 'Correlación vs Causalidad',
    category: 'statistics' as Category,
    path: '/wiki/statistics/correlacion-causalidad.md',
    relatedGames: ['correlation-detector'],
  },
  {
    id: 'distribucion-datos',
    title: 'Distribución de Datos',
    category: 'statistics' as Category,
    path: '/wiki/statistics/distribucion-datos.md',
  },
  {
    id: 'intervalos-confianza',
    title: 'Intervalos de Confianza',
    category: 'statistics' as Category,
    path: '/wiki/statistics/intervalos-confianza.md',
  },
  {
    id: 'pruebas-hipotesis',
    title: 'Pruebas de Hipótesis',
    category: 'statistics' as Category,
    path: '/wiki/statistics/pruebas-hipotesis.md',
  },
  {
    id: 'regresion-lineal',
    title: 'Regresión Lineal',
    category: 'statistics' as Category,
    path: '/wiki/statistics/regresion-lineal.md',
    relatedGames: ['linear-regression'],
  },
  {
    id: 'anova',
    title: 'ANOVA',
    category: 'statistics' as Category,
    path: '/wiki/statistics/anova.md',
  },
  {
    id: 'visualizaciones-estadisticas',
    title: 'Visualizaciones Estadísticas',
    category: 'statistics' as Category,
    path: '/wiki/statistics/visualizaciones-estadisticas.md',
  },
  {
    id: 'analisis-varianza',
    title: 'Análisis de Varianza',
    category: 'statistics' as Category,
    path: '/wiki/statistics/analisis-varianza.md',
  },

  // MACHINE LEARNING ARTICLES
  {
    id: 'que-es-machine-learning',
    title: '¿Qué es Machine Learning?',
    category: 'ml' as Category,
    path: '/wiki/ml/que-es-machine-learning.md',
    relatedGames: ['visual-classifier'],
  },
  {
    id: 'tipos-aprendizaje',
    title: 'Tipos de Aprendizaje',
    category: 'ml' as Category,
    path: '/wiki/ml/tipos-aprendizaje.md',
  },
  {
    id: 'overfitting-underfitting',
    title: 'Overfitting vs Underfitting',
    category: 'ml' as Category,
    path: '/wiki/ml/overfitting-underfitting.md',
    relatedGames: ['overfitting-game'],
  },
  {
    id: 'regresion-lineal-ml',
    title: 'Regresión Lineal en ML',
    category: 'ml' as Category,
    path: '/wiki/ml/regresion-lineal-ml.md',
  },
  {
    id: 'arboles-decision',
    title: 'Árboles de Decisión',
    category: 'ml' as Category,
    path: '/wiki/ml/arboles-decision.md',
  },
  {
    id: 'random-forest',
    title: 'Random Forest',
    category: 'ml' as Category,
    path: '/wiki/ml/random-forest.md',
  },
  {
    id: 'k-means-clustering',
    title: 'K-Means Clustering',
    category: 'ml' as Category,
    path: '/wiki/ml/k-means-clustering.md',
    relatedGames: ['kmeans-clustering'],
  },
  {
    id: 'redes-neuronales',
    title: 'Redes Neuronales',
    category: 'ml' as Category,
    path: '/wiki/ml/redes-neuronales.md',
  },
  {
    id: 'evaluacion-modelos',
    title: 'Evaluación de Modelos',
    category: 'ml' as Category,
    path: '/wiki/ml/evaluacion-modelos.md',
  },
  {
    id: 'cross-validation',
    title: 'Cross-Validation',
    category: 'ml' as Category,
    path: '/wiki/ml/cross-validation.md',
  },

  // AI ARTICLES
  {
    id: 'historia-ia',
    title: 'Historia de la IA',
    category: 'ai' as Category,
    path: '/wiki/ai/historia-ia.md',
  },
  {
    id: 'ia-debil-vs-fuerte',
    title: 'IA Débil vs IA Fuerte',
    category: 'ai' as Category,
    path: '/wiki/ai/ia-debil-vs-fuerte.md',
  },
  {
    id: 'que-son-llms',
    title: '¿Qué son los LLMs?',
    category: 'ai' as Category,
    path: '/wiki/ai/que-son-llms.md',
    relatedGames: ['prompt-engineering'],
  },
  {
    id: 'procesamiento-lenguaje-natural',
    title: 'Procesamiento de Lenguaje Natural',
    category: 'ai' as Category,
    path: '/wiki/ai/procesamiento-lenguaje-natural.md',
    relatedGames: ['nlp-challenge'],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'ai' as Category,
    path: '/wiki/ai/prompt-engineering.md',
    relatedGames: ['prompt-engineering'],
  },
  {
    id: 'fine-tuning-modelos',
    title: 'Fine-tuning de Modelos',
    category: 'ai' as Category,
    path: '/wiki/ai/fine-tuning-modelos.md',
  },
  {
    id: 'rag-systems',
    title: 'RAG Systems',
    category: 'ai' as Category,
    path: '/wiki/ai/rag-systems.md',
  },
  {
    id: 'agentes-autonomos',
    title: 'Agentes Autónomos',
    category: 'ai' as Category,
    path: '/wiki/ai/agentes-autonomos.md',
  },
  {
    id: 'etica-ia',
    title: 'Ética en IA',
    category: 'ai' as Category,
    path: '/wiki/ai/etica-ia.md',
  },
  {
    id: 'futuro-ia',
    title: 'Futuro de la IA',
    category: 'ai' as Category,
    path: '/wiki/ai/futuro-ia.md',
  },
];

export const getArticlesByCategory = (category: Category): WikiArticle[] => {
  return wikiArticles.filter(article => article.category === category);
};

export const getArticleById = (id: string): WikiArticle | undefined => {
  return wikiArticles.find(article => article.id === id);
};
