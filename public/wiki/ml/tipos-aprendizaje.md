# Tipos de Aprendizaje en Machine Learning

## Introducción

El **Machine Learning** se clasifica en diferentes tipos según cómo el algoritmo aprende de los datos y cuál es el objetivo del aprendizaje. Comprender estos tipos es fundamental para elegir el enfoque correcto para cada problema. Los tres tipos principales son: aprendizaje supervisado, no supervisado y por refuerzo, cada uno con sus propias características, algoritmos y aplicaciones.

## Conceptos Fundamentales

### ¿Qué es el Aprendizaje Automático?

Machine Learning es la capacidad de sistemas informáticos para **aprender patrones de los datos** sin ser explícitamente programados para cada tarea específica.

**Proceso general:**
1. Recolectar datos
2. Preparar y limpiar datos
3. Entrenar modelo con algoritmo de ML
4. Evaluar desempeño
5. Hacer predicciones en datos nuevos

## 1. Aprendizaje Supervisado (Supervised Learning)

### Definición

El algoritmo aprende de un conjunto de datos **etiquetados**, donde cada ejemplo tiene una entrada (features) y una salida conocida (label/target).

**Objetivo:** Aprender la función f(x) → y que mapea entradas a salidas correctas.

### Características

- Datos de entrenamiento incluyen respuestas correctas
- El modelo aprende a predecir la salida para nuevas entradas
- Requiere datos etiquetados (costoso obtener)
- Performance se mide comparando predicciones con etiquetas reales

### Tipos de Problemas

#### Clasificación

Predecir categorías discretas.

**Ejemplos:**
- Detectar spam vs no spam en emails
- Diagnóstico médico: enfermo vs sano
- Reconocimiento de dígitos escritos (0-9)
- Sentimiento: positivo, negativo, neutral
- Identificación de especies de plantas

**Algoritmos comunes:**
- Regresión Logística
- Árboles de Decisión
- Random Forest
- Support Vector Machines (SVM)
- Redes Neuronales
- Naive Bayes
- k-Nearest Neighbors (k-NN)

#### Regresión

Predecir valores continuos.

**Ejemplos:**
- Predecir precio de viviendas
- Pronosticar ventas futuras
- Estimar temperatura
- Calcular tiempo de entrega
- Valoración de acciones

**Algoritmos comunes:**
- Regresión Lineal
- Regresión Polinomial
- Ridge/Lasso Regression
- Decision Trees para Regresión
- Random Forest para Regresión
- Redes Neuronales
- Gradient Boosting (XGBoost, LightGBM)

### Ventajas

✅ Predicciones precisas cuando hay suficientes datos etiquetados
✅ Métricas de evaluación claras
✅ Interpretabilidad (en algunos modelos)
✅ Feedback directo sobre desempeño

### Desventajas

❌ Requiere grandes cantidades de datos etiquetados
❌ Etiquetado es costoso y consume tiempo
❌ Puede sufrir de overfitting
❌ Limitado a patrones vistos en entrenamiento

### Ejemplo Práctico

**Problema:** Predecir si un cliente cancelará su suscripción (churn)

**Datos:**
- Features: Edad, uso mensual, quejas, tiempo como cliente
- Label: Canceló (1) o No canceló (0)

**Proceso:**
```
1. Entrenar con datos históricos de 10,000 clientes
2. Modelo aprende patrones de cancelación
3. Predecir probabilidad de churn para clientes nuevos
4. Tomar acciones preventivas con clientes de alto riesgo
```

## 2. Aprendizaje No Supervisado (Unsupervised Learning)

### Definición

El algoritmo aprende de datos **sin etiquetas**, buscando patrones, estructuras o agrupaciones naturales en los datos.

**Objetivo:** Descubrir la estructura oculta en los datos sin guía externa.

### Características

- No hay etiquetas ni respuestas correctas
- El modelo busca patrones por sí mismo
- Exploración y descubrimiento
- Más difícil de evaluar

### Tipos de Problemas

#### Clustering (Agrupamiento)

Agrupar datos similares.

**Ejemplos:**
- Segmentación de clientes en marketing
- Agrupar documentos por tema
- Compresión de imágenes
- Detección de comunidades en redes sociales
- Análisis genético de poblaciones

**Algoritmos comunes:**
- K-Means
- Hierarchical Clustering
- DBSCAN
- Gaussian Mixture Models
- Mean Shift

#### Reducción de Dimensionalidad

Reducir número de variables preservando información importante.

**Ejemplos:**
- Compresión de datos
- Visualización de datos de alta dimensión
- Feature engineering
- Preprocesamiento para otros algoritmos
- Eliminación de ruido

**Algoritmos comunes:**
- Principal Component Analysis (PCA)
- t-SNE
- UMAP
- Autoencoders
- Linear Discriminant Analysis (LDA)

#### Detección de Anomalías

Identificar observaciones inusuales.

**Ejemplos:**
- Detección de fraude
- Fallas en equipos industriales
- Intrusiones en seguridad informática
- Errores en datos de sensores
- Transacciones sospechosas

**Algoritmos comunes:**
- Isolation Forest
- One-Class SVM
- Local Outlier Factor (LOF)
- Autoencoders

#### Asociación

Descubrir reglas entre variables.

**Ejemplos:**
- Market basket analysis ("quien compra X también compra Y")
- Recomendaciones de productos
- Análisis de secuencias de ADN
- Análisis de log de sistemas

**Algoritmos comunes:**
- Apriori
- FP-Growth
- Eclat

### Ventajas

✅ No requiere datos etiquetados
✅ Descubre patrones inesperados
✅ Útil para exploración inicial
✅ Preprocesamiento para aprendizaje supervisado

### Desventajas

❌ Difícil de evaluar resultados
❌ Interpretación puede ser subjetiva
❌ No hay feedback directo
❌ Resultados pueden variar

### Ejemplo Práctico

**Problema:** Segmentar clientes de e-commerce

**Datos:**
- Frecuencia de compra
- Valor promedio de orden
- Categorías compradas
- Tiempo en sitio

**Proceso:**
```
1. Aplicar K-Means con k=4 clusters
2. Descubrir 4 segmentos:
   - Clientes premium: Alto valor, alta frecuencia
   - Compradores ocasionales: Bajo valor, baja frecuencia
   - Cazadores de ofertas: Alto frecuencia, bajo valor
   - Nuevos clientes: Datos limitados
3. Crear estrategias de marketing personalizadas por segmento
```

## 3. Aprendizaje por Refuerzo (Reinforcement Learning)

### Definición

Un **agente** aprende a tomar decisiones interactuando con un **entorno**, recibiendo **recompensas** o penalizaciones por sus acciones.

**Objetivo:** Aprender una política que maximice la recompensa acumulada a largo plazo.

### Componentes Clave

- **Agente:** El que toma decisiones
- **Entorno:** El mundo con el que interactúa
- **Estado:** Situación actual del entorno
- **Acción:** Decisión tomada por el agente
- **Recompensa:** Feedback del entorno
- **Política:** Estrategia del agente (estado → acción)

### Características

- Aprendizaje a través de prueba y error
- Feedback retrasado (no inmediato)
- Tradeoff exploración vs explotación
- Secuencial: decisiones actuales afectan futuras

### Ejemplos de Aplicaciones

**Juegos:**
- AlphaGo (Go)
- DQN para Atari games
- OpenAI Five (Dota 2)
- AlphaZero (ajedrez)

**Robótica:**
- Control de robots caminantes
- Manipulación de objetos
- Navegación autónoma
- Drones

**Finanzas:**
- Trading algorítmico
- Gestión de portafolios
- Optimización de precios

**Otros:**
- Vehículos autónomos
- Control de tráfico
- Gestión de recursos (energía, inventario)
- Personalización de contenido
- Optimización de data centers

### Algoritmos Principales

**Value-Based:**
- Q-Learning
- Deep Q-Network (DQN)
- Double DQN

**Policy-Based:**
- Policy Gradient
- REINFORCE
- Actor-Critic

**Model-Based:**
- Dyna-Q
- Model-Predictive Control

**State-of-the-art:**
- Proximal Policy Optimization (PPO)
- Soft Actor-Critic (SAC)
- TD3

### Ventajas

✅ No requiere datos etiquetados
✅ Aprende estrategias complejas
✅ Puede superar desempeño humano
✅ Adaptación a entornos dinámicos

### Desventajas

❌ Requiere mucho tiempo de entrenamiento
❌ Puede ser inestable
❌ Difícil de debuggear
❌ Necesita simulación o entorno seguro

### Ejemplo Práctico

**Problema:** Robot aprendiendo a caminar

**Configuración:**
- **Estado:** Posición y velocidad de articulaciones
- **Acciones:** Torques aplicados a motores
- **Recompensa:** +1 por cada paso adelante, -10 por caer
- **Objetivo:** Maximizar distancia recorrida

**Proceso:**
```
1. Inicialmente: Acciones aleatorias, robot cae
2. Gradualmente: Aprende balance básico
3. Después de 1M pasos: Camina establemente
4. Después de 10M pasos: Camina rápido y eficientemente
```

## Comparación de Tipos de Aprendizaje

| Aspecto | Supervisado | No Supervisado | Refuerzo |
|---------|-------------|----------------|----------|
| Datos | Etiquetados | Sin etiquetas | Interacción |
| Objetivo | Predicción | Estructura | Decisión óptima |
| Feedback | Directo | No hay | Recompensas |
| Evaluación | Métricas claras | Subjetiva | Recompensa total |
| Ejemplos | Clasificación | Clustering | Control |
| Costo datos | Alto | Bajo | Medio |

## Tipos Híbridos y Variantes

### Semi-Supervisado

Combina datos etiquetados (pocos) y no etiquetados (muchos).

**Uso:** Cuando etiquetar es costoso
**Ejemplo:** Reconocimiento de voz con pocos ejemplos etiquetados

### Auto-Supervisado

Genera etiquetas automáticamente de los propios datos.

**Uso:** Pre-entrenamiento de modelos grandes
**Ejemplo:** BERT (predecir palabras enmascaradas)

### Transfer Learning

Usar modelo entrenado en una tarea para otra relacionada.

**Uso:** Cuando hay pocos datos para tarea específica
**Ejemplo:** Usar ImageNet pre-entrenado para detección de rayos X

### Few-Shot Learning

Aprender de muy pocos ejemplos.

**Uso:** Cuando hay escasez extrema de datos
**Ejemplo:** Reconocer objetos con 1-5 ejemplos

### Multi-Task Learning

Entrenar un modelo en múltiples tareas simultáneamente.

**Uso:** Tareas relacionadas que comparten conocimiento
**Ejemplo:** Detectar múltiples objetos y sus atributos

### Active Learning

El modelo solicita etiquetas para ejemplos específicos.

**Uso:** Optimizar el proceso de etiquetado
**Ejemplo:** Etiquetar solo ejemplos donde el modelo es menos confiable

## Elección del Tipo de Aprendizaje

### ¿Cuándo usar Supervisado?

✅ Tienes datos etiquetados suficientes
✅ El objetivo es predicción clara
✅ Necesitas alta precisión
✅ Puedes medir performance objetivamente

### ¿Cuándo usar No Supervisado?

✅ No tienes etiquetas
✅ Quieres explorar los datos
✅ Buscas patrones ocultos
✅ Necesitas reducir dimensionalidad

### ¿Cuándo usar Refuerzo?

✅ Problema de decisión secuencial
✅ Tienes simulador o entorno
✅ Feedback retrasado
✅ Necesitas optimización estratégica

## Aplicaciones del Mundo Real

### Salud
- **Supervisado:** Diagnóstico de enfermedades
- **No Supervisado:** Descubrir subtipos de cáncer
- **Refuerzo:** Optimizar tratamientos personalizados

### Finanzas
- **Supervisado:** Detección de fraude
- **No Supervisado:** Segmentación de clientes
- **Refuerzo:** Trading algorítmico

### Tecnología
- **Supervisado:** Filtro de spam
- **No Supervisado:** Recomendaciones (Netflix, Spotify)
- **Refuerzo:** Optimización de data centers (Google)

### Transporte
- **Supervisado:** Predicción de demanda
- **No Supervisado:** Rutas de tráfico
- **Refuerzo:** Vehículos autónomos

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Practica aprendizaje supervisado con clasificación

🎮 [K-Means Clustering](/game/kmeans-clustering) - Experimenta con aprendizaje no supervisado

## Recursos Adicionales

- Coursera: Machine Learning por Andrew Ng
- Fast.ai: Practical Deep Learning
- Kaggle: Competencias y datasets
- Papers with Code: State-of-the-art por tarea
- Distill.pub: Explicaciones visuales de conceptos ML

---

*Siguiente: [Regresión Lineal en ML](/wiki/regresion-lineal-ml)*
