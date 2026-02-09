import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, Menu, X, Search, Gamepad2, Brain, BarChart, Calculator } from 'lucide-react';
import { wikiArticles } from '../data/wikiArticles';
import { WikiArticle, Category } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// PROBABILITY COMPONENTS
import { QueEsProbabilidad } from '../components/wiki/probability/QueEsProbabilidad';
import { EventosEspaciosMuestrales } from '../components/wiki/probability/EventosEspaciosMuestrales';
import { ProbabilidadCondicional } from '../components/wiki/probability/ProbabilidadCondicional';
import { TeoremaBayes } from '../components/wiki/probability/TeoremaBayes';
import { IndependenciaEventos } from '../components/wiki/probability/IndependenciaEventos';
import { DistribucionBinomial } from '../components/wiki/probability/DistribucionBinomial';
import { DistribucionPoisson } from '../components/wiki/probability/DistribucionPoisson';
import { DistribucionNormal } from '../components/wiki/probability/DistribucionNormal';
import { LeyGrandesNumeros } from '../components/wiki/probability/LeyGrandesNumeros';
import { TeoremaLimiteCentral } from '../components/wiki/probability/TeoremaLimiteCentral';

// STATISTICS COMPONENTS
import { MedidasTendenciaCentral } from '../components/wiki/statistics/MedidasTendenciaCentral';
import { MedidasDispersion } from '../components/wiki/statistics/MedidasDispersion';
import { DistribucionDatos } from '../components/wiki/statistics/DistribucionDatos';
import { CorrelacionCausalidad } from '../components/wiki/statistics/CorrelacionCausalidad';
import { PruebasHipotesis } from '../components/wiki/statistics/PruebasHipotesis';
import { ANOVA } from '../components/wiki/statistics/ANOVA';
import { VisualizacionesEstadisticas } from '../components/wiki/statistics/VisualizacionesEstadisticas';
import { AnalisisVarianza } from '../components/wiki/statistics/AnalisisVarianza';

// MACHINE LEARNING COMPONENTS
import { QueEsMachineLearning } from '../components/wiki/ml/QueEsMachineLearning';
import { TiposAprendizaje } from '../components/wiki/ml/TiposAprendizaje';
import { RegresionLinealML } from '../components/wiki/ml/RegresionLinealML';
import { ArbolesDecision } from '../components/wiki/ml/ArbolesDecision';
import { RandomForest } from '../components/wiki/ml/RandomForest';
import { KMeansClustering } from '../components/wiki/ml/KMeansClustering';
import { RedesNeuronales } from '../components/wiki/ml/RedesNeuronales';
import { EvaluacionModelos } from '../components/wiki/ml/EvaluacionModelos';
import { CrossValidation } from '../components/wiki/ml/CrossValidation';
import { OverfittingUnderfitting } from '../components/wiki/ml/OverfittingUnderfitting';
import { GradientDescent } from '../components/wiki/ml/GradientDescent';

// AI COMPONENTS
import { HistoriaIA } from '../components/wiki/ai/HistoriaIA';
import { IADebilVsFuerte } from '../components/wiki/ai/IADebilVsFuerte';
import { QueSonLLMs } from '../components/wiki/ai/QueSonLLMs';
import { ProcesamientoLenguajeNatural } from '../components/wiki/ai/ProcesamientoLenguajeNatural';
import { PromptEngineering } from '../components/wiki/ai/PromptEngineering';
import { EticaIA } from '../components/wiki/ai/EticaIA';
import { FineTuningModelos } from '../components/wiki/ai/FineTuningModelos';
import { RAGSystems } from '../components/wiki/ai/RAGSystems';
import { AgentesAutonomos } from '../components/wiki/ai/AgentesAutonomos';
import { FuturoIA } from '../components/wiki/ai/FuturoIA';

export const WikiPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<WikiArticle | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  // Load article from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const article = wikiArticles.find(a => a.id === hash);
      if (article) {
        setSelectedArticle(article);
        // On mobile, close sidebar when article is selected
        if (window.innerWidth < 768) {
          setIsSidebarOpen(false);
        }
      }
    } else if (wikiArticles.length > 0 && !selectedArticle) {
      // Default to first article if no hash
      setSelectedArticle(wikiArticles[0]);
    }
  }, []);

  // Update URL hash when article changes
  useEffect(() => {
    if (selectedArticle) {
      window.location.hash = selectedArticle.id;
    }
  }, [selectedArticle]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredArticles = wikiArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: Category) => {
    switch (category) {
      case 'probability': return <Calculator size={18} />;
      case 'statistics': return <BarChart size={18} />;
      case 'ml': return <Brain size={18} />;
      case 'ai': return <BotIcon />;
    }
  };

  // Helper for bot icon since 'Bot' is imported but maybe reserved
  const BotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
  );

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case 'probability': return 'text-purple-500';
      case 'statistics': return 'text-blue-500';
      case 'ml': return 'text-green-500';
      case 'ai': return 'text-orange-500';
    }
  };

  const renderArticleContent = () => {
    if (!selectedArticle) return <div className="p-8 text-center text-gray-500">Selecciona un artículo para comenzar</div>;

    const components: Record<string, React.FC> = {
      // Probability
      'que-es-probabilidad': QueEsProbabilidad,
      'eventos-espacios-muestrales': EventosEspaciosMuestrales,
      'probabilidad-condicional': ProbabilidadCondicional,
      'teorema-bayes': TeoremaBayes,
      'independencia-eventos': IndependenciaEventos,
      'distribucion-binomial': DistribucionBinomial,
      'distribucion-poisson': DistribucionPoisson,
      'distribucion-normal': DistribucionNormal,
      'ley-grandes-numeros': LeyGrandesNumeros,
      'teorema-limite-central': TeoremaLimiteCentral,

      // Statistics
      'medidas-tendencia-central': MedidasTendenciaCentral,
      'medidas-dispersion': MedidasDispersion,
      'distribucion-datos': DistribucionDatos,
      'correlacion-causalidad': CorrelacionCausalidad,
      'pruebas-hipotesis': PruebasHipotesis,
      'anova': ANOVA,
      'visualizaciones-estadisticas': VisualizacionesEstadisticas,
      'analisis-varianza': AnalisisVarianza,

      // Machine Learning
      'que-es-machine-learning': QueEsMachineLearning,
      'tipos-aprendizaje': TiposAprendizaje,
      'regresion-lineal-ml': RegresionLinealML,
      'arboles-decision': ArbolesDecision,
      'random-forest': RandomForest,
      'k-means-clustering': KMeansClustering,
      'redes-neuronales': RedesNeuronales,
      'evaluacion-modelos': EvaluacionModelos,
      'cross-validation': CrossValidation,
      'overfitting-underfitting': OverfittingUnderfitting,
      'gradient-descent': GradientDescent,

      // AI
      'historia-ia': HistoriaIA,
      'ia-debil-vs-fuerte': IADebilVsFuerte,
      'que-son-llms': QueSonLLMs,
      'procesamiento-lenguaje-natural': ProcesamientoLenguajeNatural,
      'prompt-engineering': PromptEngineering,
      'etica-ia': EticaIA,
      'fine-tuning-modelos': FineTuningModelos,
      'rag-systems': RAGSystems,
      'agentes-autonomos': AgentesAutonomos,
      'futuro-ia': FuturoIA,
    };

    const Component = components[selectedArticle.id];

    if (Component) {
      return <Component />;
    }

    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <span className="text-4xl mb-4">🚧</span>
        <h2 className="text-2xl font-bold mb-2">Artículo en Construcción</h2>
        <p className="text-gray-600">Estamos trabajando en el contenido interactivo para <strong>{selectedArticle.title}</strong>.</p>
      </div>
    );
  };

  return (
    <div className="flex bg-slate-50 dark:bg-slate-900 overflow-hidden"
      style={{ height: 'calc(100vh - 64px)' }}> {/* Adjusting for navbar height */}

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isSidebarOpen ? '320px' : '0px',
          opacity: isSidebarOpen ? 1 : 0
        }}
        className={`bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 flex flex-col z-30 fixed md:relative h-full overflow-hidden`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 w-80">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white">
              <Book className="text-blue-600" /> Wiki
            </h2>
            <button onClick={toggleSidebar} className="md:hidden">
              <X size={20} />
            </button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Buscar tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>

          <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
            {(['all', 'probability', 'statistics', 'ml', 'ai'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors
                  ${selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
              >
                {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto w-80">
          {filteredArticles.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">
              No se encontraron artículos
            </div>
          ) : (
            <div className="py-2">
              {filteredArticles.map(article => (
                <button
                  key={article.id}
                  onClick={() => {
                    setSelectedArticle(article);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors border-l-4
                                ${selectedArticle?.id === article.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-600'
                      : 'border-transparent'
                    }`}
                >
                  <div className={`mt-0.5 ${getCategoryColor(article.category)}`}>
                    {getCategoryIcon(article.category)}
                  </div>
                  <div>
                    <h3 className={`font-medium text-sm ${selectedArticle?.id === article.id ? 'text-blue-700 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                      {article.title}
                    </h3>
                    {/* Show related game icon if exists */}
                    {article.relatedGames && article.relatedGames.length > 0 && (
                      <div className="flex items-center gap-1 mt-1 text-xs text-purple-600 dark:text-purple-400 font-medium">
                        <Gamepad2 size={12} />
                        <span>Juego Interactivo</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative w-full">
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-10 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 md:hidden"
          >
            <Menu size={20} />
          </button>
        )}

        <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 min-h-full">
          {/* Breadcrumb replacement */}
          {selectedArticle && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <button onClick={() => !isSidebarOpen && toggleSidebar()} className="hover:text-blue-600">Wiki</button>
              <ChevronRight size={14} />
              <span className="capitalize">{selectedArticle.category}</span>
              <ChevronRight size={14} />
              <span className="text-gray-900 dark:text-gray-200 font-medium truncate">{selectedArticle.title}</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArticle?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderArticleContent()}
            </motion.div>
          </AnimatePresence>

          {/* Footer Navigation */}
          {selectedArticle && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              {(() => {
                const currentIndex = wikiArticles.findIndex(a => a.id === selectedArticle.id);
                const prevArticle = wikiArticles[currentIndex - 1];
                const nextArticle = wikiArticles[currentIndex + 1];

                return (
                  <>
                    {prevArticle ? (
                      <button
                        onClick={() => setSelectedArticle(prevArticle)}
                        className="text-left group"
                      >
                        <div className="text-xs text-gray-500 mb-1 group-hover:text-blue-600 transition-colors">Anterior</div>
                        <div className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                          {prevArticle.title}
                        </div>
                      </button>
                    ) : <div></div>}

                    {nextArticle ? (
                      <button
                        onClick={() => setSelectedArticle(nextArticle)}
                        className="text-right group"
                      >
                        <div className="text-xs text-gray-500 mb-1 group-hover:text-blue-600 transition-colors">Siguiente</div>
                        <div className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                          {nextArticle.title}
                        </div>
                      </button>
                    ) : <div></div>}
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
