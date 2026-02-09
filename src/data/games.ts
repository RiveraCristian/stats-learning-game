import { GameData, Category } from '../types';

export const games: GameData[] = [
  // PROBABILITY GAMES
  {
    id: 'coin-flip',
    name: 'Lanza la Moneda',
    description: 'Simula lanzamientos de moneda y observa la Ley de Grandes Números en acción',
    category: 'probability' as Category,
    level: 'basic',
    xpReward: { 1: 50, 2: 75, 3: 100 },
    relatedArticles: ['ley-grandes-numeros', 'que-es-probabilidad'],
  },
  {
    id: 'distribution-builder',
    name: 'Constructor de Distribuciones',
    description: 'Ajusta parámetros y visualiza diferentes distribuciones estadísticas',
    category: 'probability' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['distribucion-normal', 'distribucion-binomial'],
  },
  {
    id: 'bayes-theorem',
    name: 'Teorema de Bayes',
    description: 'Resuelve problemas de probabilidad condicional con árboles interactivos',
    category: 'probability' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['teorema-bayes', 'probabilidad-condicional'],
  },

  // STATISTICS GAMES
  {
    id: 'guess-measure',
    name: 'Adivina la Medida',
    description: 'Calcula media, mediana y moda de conjuntos de datos visualizados',
    category: 'statistics' as Category,
    level: 'basic',
    xpReward: { 1: 50, 2: 75, 3: 100 },
    relatedArticles: ['medidas-tendencia-central'],
  },
  {
    id: 'correlation-detector',
    name: 'Detector de Correlación',
    description: 'Identifica el tipo de correlación en gráficos de dispersión',
    category: 'statistics' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['correlacion-causalidad'],
  },
  {
    id: 'linear-regression',
    name: 'Regresión Lineal Builder',
    description: 'Ajusta una línea de regresión y mejora el R²',
    category: 'statistics' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['regresion-lineal'],
  },

  // MACHINE LEARNING GAMES
  {
    id: 'visual-classifier',
    name: 'Clasificador Visual',
    description: 'Clasifica puntos en categorías y visualiza la frontera de decisión',
    category: 'ml' as Category,
    level: 'basic',
    xpReward: { 1: 50, 2: 75, 3: 100 },
    relatedArticles: ['que-es-machine-learning', 'tipos-aprendizaje'],
  },
  {
    id: 'kmeans-clustering',
    name: 'K-Means Clustering',
    description: 'Agrupa datos con el algoritmo K-Means y observa los centroides',
    category: 'ml' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['k-means-clustering'],
  },
  {
    id: 'overfitting-game',
    name: 'Overfitting Game',
    description: 'Encuentra el balance perfecto entre underfitting y overfitting',
    category: 'ml' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['overfitting-underfitting', 'evaluacion-modelos'],
  },

  // AI GAMES
  {
    id: 'ai-ml-dl',
    name: 'IA vs ML vs Deep Learning',
    description: 'Clasifica conceptos en las categorías correctas de tecnología',
    category: 'ai' as Category,
    level: 'basic',
    xpReward: { 1: 50, 2: 75, 3: 100 },
    relatedArticles: ['que-es-machine-learning', 'historia-ia'],
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering Challenge',
    description: 'Crea prompts efectivos para obtener mejores resultados de IA',
    category: 'ai' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['prompt-engineering', 'que-son-llms'],
  },
  {
    id: 'nlp-challenge',
    name: 'NLP Challenge',
    description: 'Procesa texto y aprende sobre tokenización y análisis de lenguaje',
    category: 'ai' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['procesamiento-lenguaje-natural'],
  },
  {
    id: 'monty-hall',
    name: 'Problema de Monty Hall',
    description: 'Experimenta con el famoso problema de probabilidad de las tres puertas',
    category: 'probability' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['probabilidad-condicional', 'que-es-probabilidad'],
  },
  {
    id: 'probability-tree',
    name: 'Constructor de Árboles de Probabilidad',
    description: 'Construye árboles de probabilidad y calcula probabilidades compuestas',
    category: 'probability' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['probabilidad-condicional', 'teorema-bayes'],
  },

  // NEW STATISTICS GAMES
  {
    id: 'hypothesis-test',
    name: 'Simulador de Pruebas de Hipótesis',
    description: 'Configura y ejecuta pruebas de hipótesis estadísticas',
    category: 'statistics' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['pruebas-hipotesis', 'intervalos-confianza'],
  },
  {
    id: 'chi-square',
    name: 'Test Chi-Cuadrado',
    description: 'Analiza tablas de contingencia y prueba independencia de variables',
    category: 'statistics' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['pruebas-hipotesis', 'correlacion-causalidad'],
  },

  // NEW ML GAMES
  {
    id: 'neural-network',
    name: 'Neural Network Playground',
    description: 'Diseña y entrena redes neuronales en datasets interactivos',
    category: 'ml' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['redes-neuronales', 'overfitting-underfitting'],
  },
  {
    id: 'gradient-descent-viz',
    name: 'Visualizador de Gradient Descent',
    description: 'Observa cómo gradient descent optimiza funciones en tiempo real',
    category: 'ml' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['gradient-descent', 'regresion-lineal-ml'],
  },

  // NEW AI GAMES
  {
    id: 'ai-ethics',
    name: 'Escenarios de Ética en IA',
    description: 'Toma decisiones éticas en dilemas reales de inteligencia artificial',
    category: 'ai' as Category,
    level: 'intermediate',
    xpReward: { 1: 75, 2: 100, 3: 150 },
    relatedArticles: ['etica-ia', 'ia-debil-vs-fuerte'],
  },
  {
    id: 'transformer-attention',
    name: 'Visualizador de Attention en Transformers',
    description: 'Explora cómo funcionan los mecanismos de attention en transformers',
    category: 'ai' as Category,
    level: 'advanced',
    xpReward: { 1: 100, 2: 150, 3: 200 },
    relatedArticles: ['que-son-llms', 'procesamiento-lenguaje-natural'],
  },
];

export const getGamesByCategory = (category: Category) => {
  return games.filter(game => game.category === category);
};

export const getGameById = (id: string) => {
  return games.find(game => game.id === id);
};

export const getGamesByLevel = (category: Category, level: string) => {
  return games.filter(game => game.category === category && game.level === level);
};
