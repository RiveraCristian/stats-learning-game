# 🎮 Stats Learning Game

Una plataforma educativa interactiva para aprender Estadística, Probabilidad, Machine Learning e Inteligencia Artificial a través de juegos gamificados y contenido educativo de alta calidad.

## ✨ Características

- 🎯 **12 Juegos Interactivos** organizados en 4 categorías
- 📚 **40 Artículos Educativos** en formato wiki
- 🎨 **Visualizaciones Interactivas** con Recharts y Framer Motion
- ⭐ **Sistema de Progresión** con XP, niveles y logros
- 🌙 **Modo Oscuro/Claro** con preferencias guardadas
- 📱 **Diseño Responsivo** para móvil, tablet y desktop

## 🎮 Juegos Disponibles

### Probabilidad (3 juegos)
- **Lanza la Moneda** - Experimenta con la Ley de Grandes Números
- **Constructor de Distribuciones** - Visualiza distribuciones estadísticas
- **Teorema de Bayes** - Resuelve problemas de probabilidad condicional

### Estadística (3 juegos)
- **Adivina la Medida** - Calcula media, mediana y moda
- **Detector de Correlación** - Identifica tipos de correlación
- **Regresión Lineal Builder** - Ajusta líneas de regresión y mejora R²

### Machine Learning (3 juegos)
- **Clasificador Visual** - Clasifica puntos y visualiza fronteras de decisión
- **K-Means Clustering** - Agrupa datos con el algoritmo K-Means
- **Overfitting Game** - Encuentra el balance entre underfitting y overfitting

### Inteligencia Artificial (3 juegos)
- **IA vs ML vs Deep Learning** - Clasifica conceptos correctamente
- **Prompt Engineering Challenge** - Crea prompts efectivos para IA
- **NLP Challenge** - Procesa texto y aprende sobre tokenización

## 📚 Wiki Educativa

### 40 Artículos Organizados por Categoría

**Probabilidad (7 artículos):**
- ¿Qué es la Probabilidad?
- Ley de Grandes Números
- Eventos y Espacios Muestrales
- Independencia de Eventos
- Distribución Binomial
- Distribución de Poisson
- Teorema del Límite Central

**Estadística (7 artículos):**
- Medidas de Tendencia Central
- Medidas de Dispersión
- Distribución de Datos
- Pruebas de Hipótesis
- ANOVA
- Visualizaciones Estadísticas
- Análisis de Varianza

**Machine Learning (8 artículos):**
- ¿Qué es Machine Learning?
- Tipos de Aprendizaje
- Regresión Lineal en ML
- Árboles de Decisión
- Random Forest
- Redes Neuronales
- Evaluación de Modelos
- Cross-Validation

**Inteligencia Artificial (6 artículos):**
- Prompt Engineering
- IA Débil vs IA Fuerte
- Procesamiento de Lenguaje Natural
- Fine-Tuning de Modelos
- Agentes Autónomos
- El Futuro de la IA

Cada artículo incluye:
- Introducción clara y conceptos fundamentales
- Ejemplos prácticos y aplicaciones
- Fórmulas explicadas
- Enlaces a juegos relacionados
- Recursos adicionales

## 🚀 Tecnologías

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Visualizaciones de datos
- **Framer Motion** - Animaciones
- **React Router** - Navegación
- **Lucide React** - Iconos
- **React Markdown** - Renderizado de wiki

## 🛠️ Desarrollo

### Prerequisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/RiveraCristian/stats-learning-game.git
cd stats-learning-game

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar ESLint
npm run preview  # Preview del build
npm run deploy   # Deploy a GitHub Pages
```

## 📁 Estructura del Proyecto

```
stats-learning-game/
├── public/
│   └── wiki/              # Artículos en Markdown
│       ├── probability/   # 7 artículos
│       ├── statistics/    # 7 artículos
│       ├── ml/            # 7 artículos
│       └── ai/            # 6 artículos
├── src/
│   ├── components/
│   │   ├── games/         # 12 componentes de juegos
│   │   ├── common/        # Componentes reutilizables
│   │   └── layout/        # Header, Footer
│   ├── pages/             # Páginas principales
│   ├── utils/             # Funciones de utilidad
│   │   ├── statistics.ts  # Funciones estadísticas
│   │   ├── probability.ts # Funciones de probabilidad
│   │   ├── distributions.ts # Generación de distribuciones
│   │   └── scoring.ts     # Sistema de puntuación
│   ├── data/              # Datos de juegos, categorías, wiki
│   ├── context/           # Context API (UserContext)
│   ├── hooks/             # Custom hooks
│   └── types/             # TypeScript types
└── ...
```

## 🎓 Características del Sistema de Aprendizaje

### Sistema de Progresión
- **XP y Niveles**: Gana experiencia jugando juegos
- **Estrellas**: 1-3 estrellas según tu desempeño (score)
- **Logros**: Desbloquea badges por hitos
- **Racha**: Mantén días consecutivos jugando

### Sistema de Puntuación
- **Score 0-100**: Basado en precisión y desempeño
- **Estrellas**:
  - 3 estrellas: Score ≥ 80
  - 2 estrellas: Score ≥ 60
  - 1 estrella: Score ≥ 40
- **XP Variable**: Más XP por niveles avanzados y más estrellas

### Niveles de Dificultad
- **Básico**: Conceptos fundamentales
- **Intermedio**: Aplicaciones prácticas
- **Avanzado**: Problemas complejos

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para detalles

## 👤 Autor

**Cristian Rivera**
- GitHub: [@RiveraCristian](https://github.com/RiveraCristian)

## 🙏 Agradecimientos

- Comunidad de React y TypeScript
- Recharts por las excelentes visualizaciones
- Todos los que contribuyen al proyecto

---

**¡Aprende estadística, probabilidad, ML e IA jugando! 🎮📊🤖**
