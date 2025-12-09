import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Trophy, BookOpen, TrendingUp, Zap } from 'lucide-react';
import { categories } from '../data/categories';

export const Home: React.FC = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Gamificación',
      description: 'Sistema de XP, niveles, logros y estrellas para motivar tu aprendizaje',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Wiki Completa',
      description: '40+ artículos educativos con explicaciones y ejemplos prácticos',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Visualizaciones',
      description: 'Gráficos interactivos en tiempo real para entender mejor los conceptos',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Progreso Guardado',
      description: 'Tu avance se guarda automáticamente en tu navegador',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Stats Learning Game
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Aprende <span className="font-bold text-purple-600">Probabilidades</span>,{' '}
            <span className="font-bold text-blue-600">Estadística</span>,{' '}
            <span className="font-bold text-green-600">Machine Learning</span> e{' '}
            <span className="font-bold text-orange-600">Inteligencia Artificial</span>{' '}
            jugando
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Play className="w-6 h-6" />
            Comenzar a Aprender
          </Link>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Explora 4 Categorías
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              style={{ borderTop: `4px solid ${category.color}` }}
            >
              <Link to={`/category/${category.id}`}>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {category.description}
                </p>
                <div
                  className="mt-4 inline-block px-4 py-2 rounded-lg text-white font-medium"
                  style={{ backgroundColor: category.color }}
                >
                  Explorar
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Características Principales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar tu aventura?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Únete ahora y empieza a dominar la ciencia de datos
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Play className="w-6 h-6" />
            Ir al Dashboard
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
