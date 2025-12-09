# Análisis de Varianza

## Introducción

El **análisis de varianza** es un conjunto de técnicas estadísticas para descomponer, entender y comparar la variabilidad en datos. Va más allá del simple cálculo de varianza para examinar cómo diferentes factores contribuyen a la variación total observada. Es fundamental en diseño experimental, control de calidad, y ciencia de datos para identificar fuentes de variabilidad y optimizar procesos.

## Conceptos Fundamentales

### Varianza

La varianza mide la dispersión de datos alrededor de su media:

```
σ² = Σ(xi - μ)² / N  (población)
s² = Σ(xi - x̄)² / (n-1)  (muestra)
```

**Interpretación:**
- Varianza alta = Datos muy dispersos
- Varianza baja = Datos agrupados cerca de la media

### Descomposición de Varianza

La variabilidad total puede descomponerse en componentes:

```
Varianza Total = Varianza Explicada + Varianza No Explicada
```

Esta descomposición es la base de ANOVA, regresión y muchas otras técnicas.

## Fuentes de Variabilidad

### 1. Variabilidad Sistemática

Causada por factores conocidos y controlables:
- Diferencias entre grupos/tratamientos
- Efectos de variables independientes
- Tendencias temporales conocidas

**Ejemplo:** Diferencia en productividad entre turnos de trabajo

### 2. Variabilidad Aleatoria (Error)

Causada por factores desconocidos o no controlables:
- Variación natural
- Error de medición
- Factores no considerados

**Ejemplo:** Pequeñas diferencias entre productos "idénticos"

### Objetivo del Análisis

Cuantificar cuánta variabilidad es sistemática (explicable) vs aleatoria.

```
Ratio F = Varianza Sistemática / Varianza Aleatoria
```

Si F es grande, los factores sistemáticos son importantes.

## ANOVA como Análisis de Varianza

### Descomposición en ANOVA de Un Factor

```
SST = SSB + SSW

Donde:
SST = Suma Total de Cuadrados (Total Variation)
SSB = Suma de Cuadrados Entre Grupos (Between Groups)
SSW = Suma de Cuadrados Dentro de Grupos (Within Groups)
```

### Interpretación

**SSB (Varianza Entre Grupos):**
- Mide diferencias entre medias de grupos
- Representa efecto del factor

**SSW (Varianza Dentro de Grupos):**
- Mide variabilidad dentro de cada grupo
- Representa error aleatorio

**Ratio:**
```
F = (SSB/dfB) / (SSW/dfW) = MSB / MSW
```

Si F es significativo, el factor explica variabilidad importante.

## Varianza Explicada vs No Explicada

### En Regresión Lineal

```
SST = SSR + SSE

Donde:
SSR = Suma de Cuadrados de Regresión (explicada por modelo)
SSE = Suma de Cuadrados de Error (no explicada)
```

### Coeficiente de Determinación (R²)

```
R² = SSR / SST = 1 - (SSE / SST)
```

**Interpretación:**
- R² = 0.80 → 80% de varianza explicada por el modelo
- R² = 0.20 → Solo 20% explicada, 80% es error

## Componentes de Varianza

### Modelo de Componentes de Varianza

En análisis jerárquicos o anidados:

```
Varianza Total = σ²_entre + σ²_dentro + σ²_error
```

**Ejemplo: Estudiantes en Escuelas en Distritos**
- Varianza entre distritos
- Varianza entre escuelas dentro de distrito
- Varianza entre estudiantes dentro de escuela

### Coeficiente de Correlación Intraclase (ICC)

```
ICC = σ²_entre / (σ²_entre + σ²_dentro)
```

**Interpretación:**
- ICC cercano a 1: Grupos muy homogéneos, mucha varianza entre grupos
- ICC cercano a 0: Grupos heterogéneos, poca varianza entre grupos

## Análisis de Varianza en Control de Calidad

### Estudio de R&R (Repetibilidad y Reproducibilidad)

Descompone varianza en mediciones:

```
Varianza Total = Varianza Pieza + Varianza Medición

Varianza Medición = Varianza Repetibilidad + Varianza Reproducibilidad
```

**Repetibilidad:** Variación cuando mismo operador mide misma pieza
**Reproducibilidad:** Variación entre diferentes operadores

### Análisis de Capacidad de Proceso

Compara variabilidad del proceso con especificaciones:

```
Cp = (USL - LSL) / (6σ)

Donde:
USL = Upper Specification Limit
LSL = Lower Specification Limit
σ = Desviación estándar del proceso
```

**Interpretación:**
- Cp < 1: Proceso incapaz (mucha varianza)
- Cp ≥ 1.33: Proceso capaz
- Cp ≥ 2: Proceso excelente (Six Sigma)

## Descomposición de Varianza en Series Temporales

### Componentes

```
Y(t) = Tendencia + Estacionalidad + Cíclico + Error
```

**Varianza Total:**
```
Var(Y) = Var(Tendencia) + Var(Estacional) + Var(Cíclico) + Var(Error)
```

### Proporción de Varianza por Componente

Identifica qué componente es más importante:
- Alta varianza estacional → Patrones anuales fuertes
- Alta varianza error → Mucho ruido aleatorio

## Análisis de Varianza Multivariado

### MANOVA (Multivariate ANOVA)

Extensión de ANOVA para múltiples variables dependientes.

**Descomposición:**
```
Matriz T = Matriz H + Matriz E

T = Total
H = Hipótesis (entre grupos)
E = Error (dentro grupos)
```

**Estadísticos:**
- Wilks' Lambda
- Pillai's Trace
- Hotelling-Lawley Trace
- Roy's Largest Root

## Partición de Varianza en Machine Learning

### Bias-Variance Tradeoff

Error de predicción = Bias² + Variance + Irreducible Error

**Bias (Sesgo):**
- Error por simplificación del modelo
- Modelos simples tienen alto bias

**Variance:**
- Sensibilidad a fluctuaciones en datos de entrenamiento
- Modelos complejos tienen alta variance

**Objetivo:** Minimizar ambos (balance)

### Varianza Explicada por PCA

En Análisis de Componentes Principales:

```
Proporción de varianza explicada por PC_i = λi / Σλj
```

**Uso:** Determinar cuántas componentes retener

**Ejemplo:**
- PC1: 40% varianza
- PC2: 25% varianza
- PC3: 15% varianza
- PCs restantes: 20%

Retener PC1-PC3 captura 80% de información.

## Homogeneidad vs Heterogeneidad de Varianza

### Homocedasticidad

Varianzas iguales entre grupos/condiciones.

**Importancia:**
- Supuesto de ANOVA, test t
- Supuesto de regresión lineal

**Verificación:**
- Test de Levene
- Test de Bartlett
- Gráfico de residuos vs predichos

### Heterocedasticidad

Varianzas desiguales.

**Consecuencias:**
- Inferencias incorrectas
- Intervalos de confianza sesgados

**Soluciones:**
- Transformación de datos (log, raíz)
- Métodos robustos (Welch ANOVA)
- Modelos con varianza heterogénea

## Análisis de Sensibilidad de Varianza

### Análisis de Sobol

Descompone varianza de output en contribuciones de inputs:

```
Var(Y) = Σ Vi + Σ Vij + Σ Vijk + ...

Vi = Varianza debida a xi solo
Vij = Varianza debida a interacción de xi y xj
```

**Índices de Sensibilidad:**
- **First-order:** Si = Vi / Var(Y)
- **Total:** STi incluye todas las interacciones con xi

**Aplicación:** Identificar variables más influyentes en simulaciones.

## Ejemplos Prácticos

### Ejemplo 1: Manufactura

**Objetivo:** Reducir variabilidad en diámetro de piezas

**Análisis:**
```
Varianza Total = 0.5 mm²

Descomposición:
- Varianza Máquina: 0.15 mm² (30%)
- Varianza Material: 0.20 mm² (40%)
- Varianza Operador: 0.05 mm² (10%)
- Varianza Error: 0.10 mm² (20%)
```

**Conclusión:** Enfocarse en controlar calidad del material.

### Ejemplo 2: Educación

**Objetivo:** Entender variabilidad en puntajes de examen

**Análisis ICC:**
```
Varianza Entre Escuelas: 15
Varianza Dentro Escuelas: 35
Total: 50

ICC = 15/50 = 0.30 (30%)
```

**Interpretación:** 30% de variación en puntajes se debe a diferencias entre escuelas, 70% a diferencias entre estudiantes dentro de escuelas.

### Ejemplo 3: Marketing

**Objetivo:** Explicar variación en ventas

**Regresión Múltiple:**
```
R² = 0.65

Contribución parcial:
- Publicidad: 35% de varianza explicada
- Precio: 20%
- Temporada: 10%
- No explicada: 35%
```

**Acción:** Aumentar presupuesto de publicidad (mayor impacto).

## Aplicaciones

### Ciencia de Datos
- **Feature Selection:** Eliminar features con baja varianza
- **Clustering:** Maximizar varianza entre clusters, minimizar dentro
- **Dimensionality Reduction:** PCA retiene máxima varianza

### Machine Learning
- **Model Selection:** Bias-variance tradeoff
- **Ensemble Methods:** Reducir varianza mediante averaging
- **Regularization:** Reducir varianza a costa de aumentar bias

### Estadística Experimental
- **Design of Experiments (DOE):** Identificar factores significativos
- **Taguchi Methods:** Diseño robusto minimizando varianza
- **Response Surface Methodology:** Optimizar considerando varianza

### Finanzas
- **Portfolio Theory:** Minimizar varianza de retornos
- **Risk Management:** Descomponer fuentes de riesgo
- **VaR:** Cuantificar variabilidad de pérdidas

### Genética
- **GWAS:** Varianza fenotípica explicada por genotipos
- **Heritability:** Proporción de varianza genética vs ambiental
- **Breeding:** Selección para reducir varianza no deseada

## Herramientas de Software

### Python
```python
import numpy as np
from scipy import stats

# Varianza
varianza = np.var(datos, ddof=1)

# ANOVA
f_stat, p_value = stats.f_oneway(grupo1, grupo2, grupo3)

# Regresión - R²
from sklearn.linear_model import LinearRegression
modelo = LinearRegression().fit(X, y)
r2 = modelo.score(X, y)
```

### R
```R
# Varianza
var(datos)

# ANOVA
modelo <- aov(respuesta ~ factor, data=df)
summary(modelo)

# Componentes de varianza
library(lme4)
modelo_mixto <- lmer(respuesta ~ (1|grupo), data=df)
VarCorr(modelo_mixto)
```

## Interpretación y Comunicación

### Presentar Resultados

1. **Contexto:** ¿Qué variabilidad estamos analizando?
2. **Magnitud:** ¿Cuánta varianza hay? (en unidades originales)
3. **Fuentes:** ¿De dónde viene? (descomposición)
4. **Importancia:** ¿Qué porcentaje explica cada fuente?
5. **Acción:** ¿Qué hacer con esta información?

### Visualizaciones

- **Box plots:** Comparar varianzas entre grupos
- **Gráficos de componentes:** Pie o barras de % varianza
- **Residual plots:** Verificar homogeneidad
- **Variance explained plot:** En PCA o regresión múltiple

## Juegos Relacionados

🎮 [Adivina la Medida](/game/guess-measure) - Practica con medidas de dispersión

🎮 [Regresión Lineal Builder](/game/linear-regression) - Explora varianza explicada (R²)

🎮 [Overfitting Game](/game/overfitting-game) - Observa bias-variance tradeoff

## Recursos Adicionales

- Variance Decomposition: Técnicas avanzadas
- Mixed Models: Efectos fijos y aleatorios
- Generalized Additive Models (GAM): Varianza no lineal
- Bootstrap: Estimación de varianza de estadísticos
- Robust Statistics: Cuando varianza es heterogénea

---

*Anterior: [Visualizaciones Estadísticas](/wiki/visualizaciones-estadisticas)*
