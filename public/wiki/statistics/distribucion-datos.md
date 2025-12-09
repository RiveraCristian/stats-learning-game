# Distribución de Datos

## Introducción

La **distribución de datos** describe cómo se esparcen los valores en un conjunto de datos. Entender la forma, el centro y la dispersión de la distribución es fundamental para elegir el análisis estadístico apropiado, interpretar resultados correctamente y detectar patrones o anomalías. Una distribución puede ser simétrica, asimétrica, unimodal, bimodal, o tener colas pesadas.

## Conceptos Fundamentales

### Componentes de una Distribución

1. **Centro**: ¿Dónde se concentran los valores? (media, mediana, moda)
2. **Dispersión**: ¿Qué tan esparcidos están? (rango, desviación estándar)
3. **Forma**: ¿Cómo se distribuyen? (simétrica, asimétrica)
4. **Valores atípicos**: ¿Hay outliers?

### Tipos de Distribuciones por Forma

#### Distribución Simétrica
Los datos se distribuyen equitativamente alrededor del centro.
- Media ≈ Mediana ≈ Moda
- Ejemplos: Distribución normal, distribución uniforme

#### Distribución Asimétrica (Sesgada)

**Asimetría Positiva (derecha):**
- Cola larga hacia la derecha
- Media > Mediana > Moda
- Ejemplos: Ingresos, tiempos de respuesta

**Asimetría Negativa (izquierda):**
- Cola larga hacia la izquierda
- Moda > Mediana > Media
- Ejemplos: Edad de jubilación, calificaciones en exámenes fáciles

## Distribuciones Comunes

### 1. Distribución Normal (Gaussiana)

La más importante en estadística.

**Características:**
- Forma de campana simétrica
- Definida por media (μ) y desviación estándar (σ)
- 68% de datos dentro de μ ± 1σ
- 95% de datos dentro de μ ± 2σ
- 99.7% de datos dentro de μ ± 3σ

**Ejemplos:**
- Alturas de personas
- Errores de medición
- Puntajes de CI
- Muchos fenómenos naturales

**Fórmula:**
```
f(x) = (1 / (σ√(2π))) × e^(-(x-μ)²/(2σ²))
```

### 2. Distribución Uniforme

Todos los valores tienen la misma probabilidad.

**Características:**
- Forma rectangular
- Definida por mínimo (a) y máximo (b)
- Media = (a + b) / 2
- Varianza = (b - a)² / 12

**Ejemplos:**
- Números aleatorios generados por computadora
- Lanzamiento de dado justo
- Hora de llegada aleatoria en un intervalo

### 3. Distribución Exponencial

Modela tiempo entre eventos en un proceso de Poisson.

**Características:**
- Asimétrica positiva pronunciada
- Definida por tasa λ
- Media = 1/λ
- Sin memoria: P(X > s+t | X > s) = P(X > t)

**Ejemplos:**
- Tiempo entre llegadas de clientes
- Vida útil de componentes electrónicos
- Tiempo entre llamadas telefónicas

### 4. Distribución Binomial

Número de éxitos en n ensayos independientes.

**Características:**
- Discreta
- Parámetros: n (ensayos) y p (probabilidad de éxito)
- Media = np
- Varianza = np(1-p)

**Ejemplos:**
- Número de caras en 10 lanzamientos de moneda
- Productos defectuosos en un lote
- Conversiones en marketing digital

### 5. Distribución de Poisson

Número de eventos en un intervalo fijo.

**Características:**
- Discreta
- Parámetro: λ (tasa promedio)
- Media = Varianza = λ
- Útil para eventos raros

**Ejemplos:**
- Llamadas recibidas por hora
- Accidentes por día
- Visitas a un sitio web por minuto

### 6. Distribución t de Student

Similar a normal pero con colas más pesadas.

**Características:**
- Parameterizada por grados de libertad (df)
- Converge a normal cuando df → ∞
- Usada cuando σ es desconocida y n es pequeño

**Aplicaciones:**
- Intervalos de confianza con muestras pequeñas
- Pruebas t
- Regresión lineal

### 7. Distribución Chi-Cuadrado (χ²)

Suma de cuadrados de variables normales estándar.

**Características:**
- Asimétrica positiva
- Parámetro: grados de libertad
- Media = df
- Varianza = 2×df

**Aplicaciones:**
- Pruebas de bondad de ajuste
- Pruebas de independencia
- Intervalos de confianza para varianza

## Medidas de Forma

### Asimetría (Skewness)

Cuantifica la dirección y grado de asimetría:

```
Skewness = E[(X - μ)³] / σ³
```

**Interpretación:**
- Skew = 0: Simétrica
- Skew > 0: Asimétrica positiva (cola derecha)
- Skew < 0: Asimétrica negativa (cola izquierda)
- |Skew| > 1: Asimetría fuerte

### Curtosis (Kurtosis)

Mide el peso de las colas:

```
Kurtosis = E[(X - μ)⁴] / σ⁴
```

**Interpretación:**
- Kurtosis = 3: Normal (mesocúrtica)
- Kurtosis > 3: Colas pesadas (leptocúrtica)
- Kurtosis < 3: Colas ligeras (platicúrtica)

A menudo se usa el **exceso de curtosis** = Kurtosis - 3

## Visualización de Distribuciones

### 1. Histograma
Gráfico de barras que muestra frecuencias por intervalos.

**Ventajas:** Muestra la forma completa de la distribución
**Desventajas:** Depende del número y ancho de bins

### 2. Box Plot (Diagrama de Caja)
Muestra cuartiles, mediana y outliers.

**Componentes:**
- Caja: Q1 a Q3 (IQR)
- Línea central: Mediana
- Bigotes: Hasta 1.5×IQR desde Q1 y Q3
- Puntos: Outliers

### 3. Gráfico de Densidad (KDE)
Versión suavizada del histograma.

**Ventajas:** Muestra forma continua sin depender de bins
**Desventajas:** Puede suavizar demasiado detalles importantes

### 4. Q-Q Plot (Quantile-Quantile)
Compara cuantiles de dos distribuciones.

**Uso:** Verificar si los datos siguen una distribución específica (e.g., normal)
**Interpretación:** Puntos en línea recta = buen ajuste

### 5. Violin Plot
Combina box plot con KDE.

**Ventajas:** Muestra tanto la forma como los cuartiles

## Pruebas de Normalidad

### Test de Shapiro-Wilk
- Más potente para muestras pequeñas (n < 50)
- H₀: Los datos provienen de una distribución normal

### Test de Kolmogorov-Smirnov
- Para muestras más grandes
- Compara distribución empírica con teórica

### Test de Anderson-Darling
- Similar a K-S pero más sensible en las colas

**Nota:** Con muestras muy grandes, cualquier desviación pequeña será significativa. Es mejor usar visualización + tests.

## Transformaciones de Datos

### ¿Por Qué Transformar?

1. **Normalizar** datos asimétricos
2. **Estabilizar** varianza
3. **Linearizar** relaciones
4. **Cumplir** supuestos de modelos

### Transformaciones Comunes

**Transformación Logarítmica (log):**
- Para asimetría positiva fuerte
- Ejemplo: log(ingresos), log(población)

**Transformación Raíz Cuadrada (√):**
- Para asimetría positiva moderada
- Útil para datos de conteo

**Transformación Recíproca (1/x):**
- Para asimetría positiva muy fuerte
- Ejemplo: 1/tiempo

**Transformación Box-Cox:**
- Familia de transformaciones potencia
- Encuentra la transformación óptima

**Estandarización (z-score):**
```
z = (x - μ) / σ
```
- Convierte a media 0, desviación estándar 1

## Aplicaciones

### Ciencia de Datos
- **Análisis Exploratorio**: Entender los datos antes de modelar
- **Feature Engineering**: Transformar características para mejorar modelos
- **Detección de Anomalías**: Identificar outliers según la distribución

### Machine Learning
- **Selección de Modelo**: Algunos modelos asumen normalidad
- **Preprocessing**: Normalizar features con diferentes distribuciones
- **Evaluación**: Distribución de errores residuales

### Estadística Inferencial
- **Elección de Test**: Paramétrico vs no paramétrico
- **Validación de Supuestos**: ANOVA, regresión asumen normalidad
- **Intervalos de Confianza**: Basados en distribución t o z

### Control de Calidad
- **Gráficos de Control**: Detectar cambios en la distribución
- **Capacidad de Proceso**: Evaluar si el proceso cumple especificaciones
- **Six Sigma**: Reducir variabilidad

### Finanzas
- **Modelado de Riesgo**: Distribuciones de retornos
- **Value at Risk**: Basado en cuantiles de la distribución
- **Opciones**: Black-Scholes asume distribución log-normal

## Mezcla de Distribuciones

Muchos datos reales son **mezclas** de múltiples distribuciones:

**Ejemplo:** Alturas de adultos = Mezcla de distribuciones de hombres y mujeres

**Identificación:**
- Bimodalidad o multimodalidad
- Desviaciones de normalidad
- Análisis de subgrupos

## Cálculo con Software

### Python (SciPy)
```python
from scipy import stats
import numpy as np

datos = np.random.normal(100, 15, 1000)

# Test de normalidad
stat, p = stats.shapiro(datos)

# Asimetría y curtosis
skew = stats.skew(datos)
kurt = stats.kurtosis(datos)

# Ajustar distribución
params = stats.norm.fit(datos)
```

### R
```R
datos <- rnorm(1000, mean=100, sd=15)

# Test de normalidad
shapiro.test(datos)

# Asimetría y curtosis
library(moments)
skewness(datos)
kurtosis(datos)

# Visualización
hist(datos)
qqnorm(datos); qqline(datos)
```

## Juegos Relacionados

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Explora diferentes distribuciones interactivamente

🎮 [Adivina la Medida](/game/guess-measure) - Identifica características de distribuciones

🎮 [Detector de Correlación](/game/correlation-detector) - Observa distribuciones bivariadas

## Recursos Adicionales

- Teorema del Límite Central: Por qué la normal es tan común
- Tabla de distribuciones: Características de cada distribución
- Kernel Density Estimation (KDE): Técnica para estimar densidades
- Mixturas Gaussianas: Modelar distribuciones multimodales
- Entropía: Medida de incertidumbre en distribuciones

---

*Siguiente: [Pruebas de Hipótesis](/wiki/pruebas-hipotesis)*
