# Medidas de Dispersión

## Introducción

Las **medidas de dispersión** cuantifican qué tan esparcidos o dispersos están los datos alrededor de un valor central. Mientras que las medidas de tendencia central (media, mediana, moda) nos dicen "dónde está el centro", las medidas de dispersión nos dicen "qué tan lejos están los datos del centro". Son fundamentales para entender la variabilidad y el riesgo en cualquier conjunto de datos.

## Conceptos Fundamentales

### ¿Por Qué Son Importantes?

Dos conjuntos de datos pueden tener la misma media pero ser completamente diferentes:

**Conjunto A:** 10, 10, 10, 10, 10 → Media = 10, dispersión = 0
**Conjunto B:** 0, 5, 10, 15, 20 → Media = 10, dispersión alta

Las medidas de dispersión capturan estas diferencias cruciales.

## Principales Medidas de Dispersión

### 1. Rango

La diferencia entre el valor máximo y mínimo:

```
Rango = Máx - Mín
```

**Ejemplo:** Datos: {5, 8, 12, 15, 20}
```
Rango = 20 - 5 = 15
```

**Ventajas:**
- Muy simple de calcular
- Intuitivo y fácil de entender

**Desventajas:**
- Sensible a valores extremos
- Solo usa dos valores, ignora el resto
- No es robusto ante outliers

### 2. Rango Intercuartílico (IQR)

Diferencia entre el tercer y primer cuartil:

```
IQR = Q3 - Q1
```

**Interpretación:** Rango del 50% central de los datos

**Ejemplo:** Datos: {2, 5, 7, 8, 10, 12, 15, 18, 20}
```
Q1 = 6 (25% percentil)
Q3 = 16.5 (75% percentil)
IQR = 16.5 - 6 = 10.5
```

**Ventajas:**
- Robusto ante valores extremos
- Útil para detectar outliers (regla: outlier si está fuera de Q1 - 1.5×IQR o Q3 + 1.5×IQR)

**Desventajas:**
- Ignora el 50% de los datos externos

### 3. Varianza (σ² o s²)

Promedio de los cuadrados de las desviaciones respecto a la media:

**Población:**
```
σ² = Σ(xi - μ)² / N
```

**Muestra:**
```
s² = Σ(xi - x̄)² / (n-1)
```

**Nota:** Para muestras usamos (n-1) en el denominador (corrección de Bessel) para obtener un estimador insesgado.

**Ejemplo:** Datos: {4, 8, 6, 5, 3}
```
Media x̄ = 5.2
s² = [(4-5.2)² + (8-5.2)² + (6-5.2)² + (5-5.2)² + (3-5.2)²] / 4
   = [1.44 + 7.84 + 0.64 + 0.04 + 4.84] / 4
   = 14.8 / 4 = 3.7
```

**Ventajas:**
- Base matemática sólida
- Usada en muchas fórmulas estadísticas
- Considera todos los datos

**Desventajas:**
- Unidades al cuadrado (difícil de interpretar)
- Sensible a outliers

### 4. Desviación Estándar (σ o s)

Raíz cuadrada de la varianza:

```
σ = √σ²
s = √s²
```

**Ejemplo:** Del ejemplo anterior:
```
s = √3.7 ≈ 1.92
```

**Interpretación:** En promedio, los datos se desvían 1.92 unidades de la media.

**Ventajas:**
- Mismas unidades que los datos originales
- Interpretación intuitiva
- Medida más utilizada en estadística

**Desventajas:**
- Sensible a outliers
- Puede ser difícil de calcular manualmente

### 5. Coeficiente de Variación (CV)

Relación entre desviación estándar y media (expresado en %):

```
CV = (s / x̄) × 100%
```

**Ejemplo:** 
- Grupo A: x̄ = 100, s = 10 → CV = 10%
- Grupo B: x̄ = 10, s = 2 → CV = 20%

Grupo B tiene mayor variabilidad relativa.

**Ventajas:**
- Adimensional (permite comparar datasets con diferentes unidades)
- Útil para comparar variabilidad relativa

**Desventajas:**
- No definido si la media es 0
- Problemático con valores negativos

### 6. Desviación Absoluta Media (MAD)

Promedio de las desviaciones absolutas respecto a la media:

```
MAD = Σ|xi - x̄| / n
```

**Ejemplo:** Datos: {2, 4, 6, 8, 10}
```
x̄ = 6
MAD = (|2-6| + |4-6| + |6-6| + |8-6| + |10-6|) / 5
    = (4 + 2 + 0 + 2 + 4) / 5 = 2.4
```

**Ventajas:**
- Más robusta que la desviación estándar
- Fácil de interpretar

**Desventajas:**
- Menos propiedades matemáticas útiles
- Menos utilizada que la desviación estándar

## Ejemplos Prácticos

### Ejemplo 1: Rendimiento Académico

**Clase A:** {85, 87, 88, 89, 91} → x̄ = 88, s = 2.24
**Clase B:** {70, 80, 88, 96, 106} → x̄ = 88, s = 13.56

Misma media, pero Clase A es más homogénea.

### Ejemplo 2: Inversiones

**Inversión X:** Retornos mensuales: {2%, 3%, 2.5%, 3.5%, 3%} → s = 0.55%
**Inversión Y:** Retornos mensuales: {-5%, 10%, 5%, 0%, 5%} → s = 5.48%

Inversión Y es mucho más riesgosa (mayor dispersión).

### Ejemplo 3: Control de Calidad

Una máquina debe producir piezas de 50mm ± 0.5mm:

**Máquina 1:** Media = 50mm, σ = 0.2mm ✓ (dentro de especificación)
**Máquina 2:** Media = 50mm, σ = 0.8mm ✗ (demasiada variabilidad)

Aunque ambas tienen la misma media, Máquina 1 es más confiable.

## Regla Empírica (68-95-99.7)

Para distribuciones aproximadamente normales:

- **68%** de los datos está dentro de **μ ± 1σ**
- **95%** de los datos está dentro de **μ ± 2σ**
- **99.7%** de los datos está dentro de **μ ± 3σ**

**Aplicación:** Si x̄ = 100 y s = 15:
- 68% de datos entre 85 y 115
- 95% de datos entre 70 y 130
- 99.7% de datos entre 55 y 145

## Aplicaciones

### Ciencia de Datos
- **Feature Scaling**: Normalizar características con diferentes dispersiones
- **Detección de Anomalías**: Identificar outliers usando z-scores
- **Feature Selection**: Eliminar características con varianza muy baja

### Finanzas
- **Análisis de Riesgo**: Mayor desviación estándar = mayor riesgo
- **Sharpe Ratio**: Rendimiento ajustado por riesgo
- **VaR (Value at Risk)**: Cuantificar pérdidas potenciales

### Medicina
- **Rangos de Referencia**: Valores normales en exámenes médicos
- **Ensayos Clínicos**: Variabilidad en respuesta a tratamientos
- **Epidemiología**: Dispersión de casos de enfermedad

### Manufactura
- **Control de Calidad**: Six Sigma (reducir σ)
- **Gráficos de Control**: Límites basados en desviaciones estándar
- **Capacidad de Proceso**: Cp, Cpk indices

### Marketing
- **Segmentación**: Identificar grupos homogéneos vs heterogéneos
- **A/B Testing**: Comparar variabilidad en conversiones
- **Satisfacción del Cliente**: Consistencia en experiencia

## Comparación de Medidas

| Medida | Robustez | Interpretación | Uso Principal |
|--------|----------|----------------|---------------|
| Rango | Baja | Fácil | Exploración inicial |
| IQR | Alta | Moderada | Datos con outliers |
| Varianza | Baja | Difícil | Teoría estadística |
| Desv. Estándar | Baja | Fácil | Más usado en práctica |
| CV | Baja | Moderada | Comparar datasets |
| MAD | Alta | Fácil | Alternativa robusta |

## Dispersión y Forma de Distribución

### Distribución Normal
σ describe completamente la dispersión

### Distribución Asimétrica
La dispersión es diferente a la izquierda y derecha de la media

### Distribuciones Multimodales
Una sola medida de dispersión puede ser engañosa

**Lección:** Siempre visualizar los datos, no solo calcular estadísticas.

## Cálculo con Software

### Python (NumPy/Pandas)
```python
import numpy as np

datos = [4, 8, 6, 5, 3]

rango = np.ptp(datos)  # Peak to peak
varianza = np.var(datos, ddof=1)  # ddof=1 para muestra
desv_std = np.std(datos, ddof=1)
cv = (np.std(datos, ddof=1) / np.mean(datos)) * 100
```

### R
```R
datos <- c(4, 8, 6, 5, 3)

rango <- max(datos) - min(datos)
varianza <- var(datos)
desv_std <- sd(datos)
cv <- (sd(datos) / mean(datos)) * 100
```

### Excel
```
=VAR.S(rango)     # Varianza muestral
=STDEV.S(rango)   # Desviación estándar muestral
=MAX(rango)-MIN(rango)  # Rango
```

## Juegos Relacionados

🎮 [Adivina la Medida](/game/guess-measure) - Practica identificando medidas de dispersión

🎮 [Detector de Correlación](/game/correlation-detector) - Observa cómo la dispersión afecta la correlación

## Recursos Adicionales

- Box plots: Visualización de dispersión con cuartiles
- Z-scores: Estandarización usando media y desviación estándar
- Desigualdad de Chebyshev: Cota para cualquier distribución
- Kurtosis: Medida de colas pesadas
- Coeficiente de Gini: Medida de desigualdad

---

*Siguiente: [Distribución de Datos](/wiki/distribucion-datos)*
