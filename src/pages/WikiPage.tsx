import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import { wikiArticles, getArticlesByCategory } from '../data/wikiArticles';
import { categories } from '../data/categories';

export const WikiPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = wikiArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Wiki</h1>
              <p className="text-lg opacity-90">
                Aprende conceptos clave de estadística, ML e IA
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Categorías
              </h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Todos los artículos
                </button>
                {categories.map((category) => {
                  const count = getArticlesByCategory(category.id as any).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'text-white'
                          : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
                      }`}
                      style={
                        selectedCategory === category.id
                          ? { backgroundColor: category.color }
                          : {}
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span>{category.icon}</span>
                          <span className="text-sm font-medium">{category.name}</span>
                        </span>
                        <span className="text-xs opacity-75">{count}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCategory
                  ? categories.find((c) => c.id === selectedCategory)?.name
                  : 'Todos los Artículos'}
              </h2>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredArticles.length} artículos
              </span>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredArticles.map((article, index) => {
                  const category = categories.find((c) => c.id === article.category);
                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      style={{ borderLeft: `4px solid ${category?.color}` }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{category?.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {article.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {category?.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: category?.color }}
                        >
                          Leer artículo
                        </span>
                        {article.relatedGames && article.relatedGames.length > 0 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {article.relatedGames.length} juego(s) relacionado(s)
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-xl p-12 text-center shadow-lg">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No se encontraron artículos
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Intenta con otra búsqueda o categoría
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
