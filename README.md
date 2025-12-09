# 🎮 Stats Learning Game

<div align="center">

![Stats Learning Game Banner](https://via.placeholder.com/800x200/9333EA/FFFFFF?text=Stats+Learning+Game)

**Aprende Probabilidades, Estadística, Machine Learning e Inteligencia Artificial jugando**

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB? logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

[🎮 Jugar Ahora](https://riveracristian.github.io/stats-learning-game) | [📚 Wiki](https://riveracristian.github.io/stats-learning-game/wiki) | [📖 Documentación](#documentación)

</div>

---

## 🌟 Descripción

**Stats Learning Game** es una plataforma educativa interactiva y gamificada que te permite aprender conceptos complejos de ciencia de datos, estadística y tecnología mediante juegos visuales e interactivos.

### ¿Qué hace único a este proyecto?

- 🎯 **Aprendizaje por Juegos**: Más de 40 juegos interactivos organizados por dificultad
- 📊 **Visualizaciones en Tiempo Real**: Gráficos dinámicos con Recharts
- 🏆 **Sistema de Gamificación**: XP, niveles, logros y sistema de estrellas
- 📚 **Wiki Completa**: 40+ artículos educativos con ejemplos prácticos
- 🎨 **Diseño Moderno**: UI/UX profesional con animaciones fluidas
- 🌓 **Modo Oscuro**: Tema claro y oscuro
- 📱 **Responsive**: Funciona perfectamente en móvil, tablet y desktop
- 💾 **Progreso Guardado**: LocalStorage para no perder tu avance

---

## 🎯 Categorías de Aprendizaje

### 🎲 Probabilidades y Distribuciones
Aprende los fundamentos de la probabilidad, desde lanzamientos de monedas hasta distribuciones complejas y el Teorema de Bayes. 

**Juegos incluidos:**
- Lanza la Moneda (Ley de Grandes Números)
- Dados Mágicos
- Constructor de Distribuciones
- Adivina la Distribución
- Teorema de Bayes Interactivo
- Procesos de Poisson
- Y más...

### 📊 Estadística
Domina las medidas estadísticas, correlación, regresión, intervalos de confianza y pruebas de hipótesis de forma visual. 

**Juegos incluidos:**
- Adivina la Medida (Media, Mediana, Moda)
- Constructor de Histogramas
- Detector de Correlación
- Intervalos de Confianza
- Regresión Lineal Builder
- ANOVA Simulator
- Y más...

### 🤖 Machine Learning
Entiende los algoritmos de ML mediante simulaciones interactivas de clasificación, clustering y redes neuronales.

**Juegos incluidos:**
- Clasificador Visual
- K-Means Clustering
- Árbol de Decisión Builder
- Neural Network Builder
- Overfitting vs Underfitting
- Train-Test Split Challenge
- Y más...

### 🧠 Inteligencia Artificial
Explora el mundo de la IA moderna:  LLMs, prompt engineering, agentes autónomos y sistemas RAG.

**Juegos incluidos:**
- Prompt Engineering Challenge ⭐
- IA vs ML vs Deep Learning
- Agentes IA Simulator
- RAG System Builder
- NLP Challenge
- Ética en IA
- Y más...

---

## ✨ Características Principales

### 🎮 Sistema de Progresión
- **3 Niveles de Dificultad**: Básico, Intermedio y Avanzado
- **Sistema de Estrellas**: 1-3 estrellas por juego según desempeño
- **Puntos de Experiencia (XP)**: Gana XP y sube de nivel
- **Logros Desbloqueables**: 20+ logros por desbloquear
- **Racha de Días**: Mantén tu racha jugando consecutivamente

### 📊 Visualizaciones Interactivas
- Gráficos dinámicos con **Recharts**
- Simulaciones en tiempo real
- Manipulación de parámetros con sliders
- Feedback visual inmediato

### 📚 Wiki Educativa
- **40+ Artículos** en Markdown
- Explicaciones claras con ejemplos
- Links a juegos relacionados
- Buscador de contenido
- Navegación por categorías

### 🎨 Diseño y Experiencia
- **UI Moderna** con TailwindCSS
- **Animaciones Fluidas** con Framer Motion
- **Tema Claro/Oscuro**
- **100% Responsive** (Mobile First)
- **Accesibilidad** (WCAG AA)

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[React 18](https://reactjs.org/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[React Router](https://reactrouter.com/)** - Routing

### Styling y UI
- **[TailwindCSS](https://tailwindcss.com/)** - CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones
- **[Lucide React](https://lucide.dev/)** - Iconos

### Visualización
- **[Recharts](https://recharts.org/)** - Gráficos React
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Renderizado de Markdown

### Deployment
- **[GitHub Pages](https://pages.github.com/)** - Hosting gratuito
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Deploy automatizado

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/RiveraCristian/stats-learning-game.git
cd stats-learning-game

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:5173
```

### Build para Producción

```bash
# Compilar proyecto
npm run build

# Preview del build
npm run preview
```

### Deploy a GitHub Pages

```bash
# Deploy automático
npm run deploy

# Tu sitio estará disponible en: 
# https://riveracristian.github.io/stats-learning-game
```

---

## 📁 Estructura del Proyecto

```
stats-learning-game/
├── public/
│   └── wiki/                    # Artículos en Markdown
│       ├── probability/
│       ├── statistics/
│       ├── ml/
│       └── ai/
├── src/
│   ├── components/              # Componentes React
│   │   ├── layout/              # Header, Footer
│   │   ├── games/               # Juegos por categoría
│   │   │   ├── probability/
│   │   │   ├── statistics/
│   │   │   ├── ml/
│   │   │   └── ai/
│   │   ├── wiki/                # Componentes de Wiki
│   │   └── common/              # Componentes reutilizables
│   ├── pages/                   # Páginas principales
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   ├── CategoryPage.tsx
│   │   ├── GamePage.tsx
│   │   ├── WikiPage.tsx
│   │   └── ProfilePage.tsx
│   ├── hooks/                   # Custom hooks
│   │   ├── useProgress.ts
│   │   ├── useGameState.ts
│   │   ├── useLocalStorage.ts
│   │   └── useTheme.ts
│   ├── utils/                   # Funciones utilitarias
│   │   ├── statistics.ts
│   │   ├── probability.ts
│   │   ├── distributions.ts
│   │   └── scoring.ts
│   ├── data/                    # Datos y configuración
│   │   ├── games.ts
│   │   ├── wikiArticles.ts
│   │   └── achievements.ts
│   ├── types/                   # Tipos TypeScript
│   │   └── index.ts
│   ├── context/                 # React Context
│   │   └── UserContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config. ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🎮 Cómo Jugar

1. **Accede al Dashboard**: Elige una de las 4 categorías
2. **Selecciona Nivel**: Básico, Intermedio o Avanzado
3. **Juega**: Completa juegos interactivos
4. **Gana Recompensas**:  Obtén estrellas, XP y logros
5. **Aprende**: Lee artículos en la Wiki
6. **Progresa**: Sube de nivel y desbloquea contenido

### Sistema de Puntuación

- ⭐ **1 Estrella**: 40-59 puntos
- ⭐⭐ **2 Estrellas**: 60-79 puntos
- ⭐⭐⭐ **3 Estrellas**: 80-100 puntos

### Niveles de XP

| Nivel | XP Requerido |
|-------|-------------|
| 1     | 0 - 499     |
| 2     | 500 - 999   |
| 3     | 1000 - 1999 |
| 4     | 2000 - 3499 |
| 5+    | +1500 XP    |

---

## 📸 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Dashboard+Screenshot)

### Juego - Constructor de Distribuciones
![Juego](https://via.placeholder.com/800x450/9333EA/FFFFFF?text=Game+Screenshot)

### Perfil de Usuario
![Perfil](https://via.placeholder.com/800x450/10B981/FFFFFF?text=Profile+Screenshot)

### Wiki
![Wiki](https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Wiki+Screenshot)

---

## 🗺️ Roadmap

### Versión 1.0 (Actual) ✅
- [x] 4 Categorías completas
- [x] 40+ Juegos interactivos
- [x] Sistema de gamificación
- [x] Wiki con 40+ artículos
- [x] Tema claro/oscuro
- [x] Diseño responsive

### Versión 1.5 (Próxima) 🚧
- [ ] Modo multijugador (competencia)
- [ ] Rankings globales
- [ ] Más juegos por categoría
- [ ] Sistema de hints/ayudas
- [ ] Certificados de completitud
- [ ] Export de progreso

### Versión 2.0 (Futuro) 💡
- [ ] Backend con autenticación
- [ ] Base de datos para progreso
- [ ] Comunidad (foros, comentarios)
- [ ] Modo educador (crear juegos)
- [ ] API pública
- [ ] App móvil nativa

---

## 🏆 Logros Disponibles

| Logro | Descripción |
|-------|-------------|
| 🎯 Primer Paso | Completa tu primer juego |
| 🎲 Probabilista Novato | Completa nivel básico de Probabilidades |
| 🎲 Maestro de las Probabilidades | 3 estrellas en todos los juegos de Probabilidades |
| 📊 Estadístico Junior | Completa nivel básico de Estadística |
| 📊 Maestro Estadístico | 3 estrellas en todos los juegos de Estadística |
| 🤖 ML Enthusiast | Completa nivel básico de ML |
| 🤖 ML Expert | 3 estrellas en todos los juegos de ML |
| 🧠 IA Explorer | Completa nivel básico de IA |
| 🧠 IA Master | 3 estrellas en todos los juegos de IA |
| ⭐ Perfeccionista | 3 estrellas en TODOS los juegos |
| 🔥 Racha de 3 días | Juega 3 días consecutivos |
| 🔥 Racha de 7 días | Juega 7 días consecutivos |
| 🔥 Racha de 30 días | Juega 30 días consecutivos |
| 📚 Coleccionista | Completa al menos un juego de cada nivel |
| 📖 Maestro del Conocimiento | Lee todos los artículos de la Wiki |
| 💯 Centenario | Alcanza nivel 10 |

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto: 

### Cómo Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

### Ideas para Contribuir
- 🎮 Agregar nuevos juegos
- 📝 Escribir artículos de Wiki
- 🐛 Reportar bugs
- 🎨 Mejorar diseño
- 🌍 Traducciones (inglés, portugués, etc.)
- ♿ Mejoras de accesibilidad

---

## 📝 Artículos de la Wiki

### 🎲 Probabilidades (10 artículos)
- ¿Qué es la Probabilidad?
- Eventos y Espacios Muestrales
- Probabilidad Condicional
- Independencia de Eventos
- Teorema de Bayes
- Distribución Normal
- Distribución Binomial
- Distribución de Poisson
- Ley de Grandes Números
- Teorema del Límite Central

### 📊 Estadística (10 artículos)
- Medidas de Tendencia Central
- Medidas de Dispersión
- Correlación vs Causalidad
- Distribución de Datos
- Intervalos de Confianza
- Pruebas de Hipótesis
- Regresión Lineal
- ANOVA
- Visualizaciones Estadísticas
- Análisis de Varianza

### 🤖 Machine Learning (10 artículos)
- ¿Qué es Machine Learning?
- Tipos de Aprendizaje
- Overfitting vs Underfitting
- Regresión Lineal (ML)
- Árboles de Decisión
- Random Forest
- K-Means Clustering
- Redes Neuronales
- Evaluación de Modelos
- Cross-Validation

### 🧠 Inteligencia Artificial (10 artículos)
- Historia de la IA
- IA Débil vs Fuerte
- ¿Qué son los LLMs?
- Procesamiento de Lenguaje Natural
- Prompt Engineering
- Fine-tuning de Modelos
- RAG Systems
- Agentes Autónomos
- Ética en IA
- Futuro de la IA

---

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén implementados)
npm run test

# Coverage
npm run test:coverage
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 Cristian Andrés Rivera Gutiérrez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction... 
```

---

## 👨‍💻 Autor

**Cristian Andrés Rivera Gutiérrez**

- 🌐 Portafolio: [riveracristian.github.io](https://riveracristian.github.io)
- 📧 Email: rivera.cristian0504@gmail.com
- 🐙 GitHub: [@RiveraCristian](https://github.com/RiveraCristian)
- 💼 LinkedIn: [Cristian Rivera](https://linkedin.com/in/cristian-rivera)
- 📍 Ubicación: Talca, Chile

### Acerca del Autor

Ingeniero en Estadística con experiencia en ciencia de datos, desarrollo full stack e inteligencia artificial. Apasionado por la educación y la tecnología, creando soluciones innovadoras que combinan análisis de datos con desarrollo web moderno.

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/) por la increíble biblioteca
- [Recharts](https://recharts.org/) por las visualizaciones
- [TailwindCSS](https://tailwindcss.com/) por el framework CSS
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [GitHub Pages](https://pages.github.com/) por el hosting gratuito
- A todos los contribuidores y usuarios del proyecto

---

## 📞 Contacto y Soporte

¿Tienes preguntas, sugerencias o encontraste un bug? 

- 📧 Email: rivera.cristian0504@gmail.com
- 🐛 Issues:  [GitHub Issues](https://github.com/RiveraCristian/stats-learning-game/issues)
- 💬 Discusiones: [GitHub Discussions](https://github.com/RiveraCristian/stats-learning-game/discussions)

---

## ⭐ Star History

Si este proyecto te resulta útil, ¡considera darle una estrella! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=RiveraCristian/stats-learning-game&type=Date)](https://star-history.com/#RiveraCristian/stats-learning-game&Date)

---

<div align="center">

**Hecho con ❤️ por [Cristian Rivera](https://riveracristian.github.io)**

[🎮 Jugar Ahora](https://riveracristian.github.io/stats-learning-game) | [📚 Wiki](https://riveracristian.github.io/stats-learning-game/wiki) | [⭐ Star en GitHub](https://github.com/RiveraCristian/stats-learning-game)

</div>
