# Teorema del Límite Central

## Introducción

El **Teorema del Límite Central** (TLC) es uno de los resultados más importantes y poderosos de la probabilidad y estadística. Establece que la suma (o promedio) de un gran número de variables aleatorias independientes tiende a seguir una distribución normal, sin importar cuál sea la distribución original de las variables. Este teorema es la base de gran parte de la inferencia estadística moderna.

## Conceptos Fundamentales

### Enunciado del Teorema

Si X₁, X₂, ..., Xₙ son variables aleatorias **independientes e idénticamente distribuidas** (i.i.d.) con:
- Media μ (finita)
- Varianza σ² (finita)

Entonces, cuando n es grande, la suma o promedio de estas variables se aproxima a una distribución normal:

```
X̄ = (X₁ + X₂ + ... + Xₙ) / n

X̄ ~ Normal(μ, σ²/n)  aproximadamente
```

O equivalentemente, la variable estandarizada:
```
Z = (X̄ - μ) / (σ/√n) ~ Normal(0, 1)
```

### Requisitos del TLC

1. **Independencia**: Las variables deben ser independientes
2. **Tamaño de muestra**: n debe ser "suficientemente grande" (típicamente n ≥ 30)
3. **Momentos finitos**: Media y varianza deben existir y ser finitas

**Nota:** No se requiere que las variables originales sean normales.

## ¿Por Qué es Importante?

### 1. Universalidad
Funciona con CUALQUIER distribución original (uniforme, exponencial, binomial, etc.)

### 2. Justifica la Distribución Normal
Explica por qué tantos fenómenos naturales siguen una distribución normal (son sumas de muchos efectos pequeños e independientes)

### 3. Base de la Inferencia Estadística
- Intervalos de confianza
- Pruebas de hipótesis
- Estimación de parámetros

### 4. Simplifica Cálculos
Permite usar la distribución normal para aproximar otras distribuciones complejas

## Ejemplos Prácticos

### Ejemplo 1: Lanzamiento de Dados

Lanzar un dado una vez: distribución uniforme (1, 2, 3, 4, 5, 6)
- μ = 3.5
- σ² = 35/12 ≈ 2.917

**Promedio de 2 dados:** Ya comienza a verse más simétrica

**Promedio de 30 dados:** 
```
X̄ ~ Normal(3.5, 2.917/30) = Normal(3.5, 0.0972)
σ_X̄ = √0.0972 ≈ 0.312
```

La distribución del promedio es aproximadamente normal, ¡aunque cada dado individual no lo es!

### Ejemplo 2: Control de Calidad

Una máquina produce tornillos con peso promedio μ = 50g y σ = 2g (distribución no especificada).

Si tomamos muestras de 36 tornillos:
```
X̄ ~ Normal(50, 2²/36) = Normal(50, 0.111)
σ_X̄ = 2/√36 = 0.333g
```

**Probabilidad de que el promedio esté entre 49.5g y 50.5g:**
```
Z₁ = (49.5 - 50) / 0.333 = -1.50
Z₂ = (50.5 - 50) / 0.333 = 1.50

P(49.5 < X̄ < 50.5) = P(-1.50 < Z < 1.50) ≈ 0.866 = 86.6%
```

### Ejemplo 3: Encuestas y Muestreo

En una elección, el 45% de los votantes prefieren al candidato A. Si encuestamos a 1000 personas aleatoriamente:

```
n = 1000, p = 0.45
μ = np = 450
σ = √(np(1-p)) = √(1000 × 0.45 × 0.55) = 15.73

Proporción muestral: p̂ ~ Normal(0.45, 0.45×0.55/1000)
σ_p̂ = √(0.45×0.55/1000) = 0.0157 ≈ 1.57%
```

El 95% de las encuestas darán resultados entre:
```
0.45 ± 1.96 × 0.0157 = [0.419, 0.481] o [41.9%, 48.1%]
```

### Ejemplo 4: Suma de Variables Uniformes

X₁, X₂, ..., X₁₂ ~ Uniforme(0, 1) independientes

```
Para cada Xᵢ:
μ = 0.5
σ² = 1/12

Para la suma S = X₁ + ... + X₁₂:
E[S] = 12 × 0.5 = 6
Var(S) = 12 × (1/12) = 1
σ_S = 1

Por el TLC: S ~ Normal(6, 1) aproximadamente
```

Este es un método histórico para generar números pseudo-normales.

## Convergencia según n

### n pequeño (n < 10)
- La distribución puede estar aún bastante alejada de la normal
- Depende mucho de la distribución original

### n moderado (10 ≤ n < 30)
- Razonable aproximación si la distribución original no es muy asimétrica
- Suficiente para muchas aplicaciones prácticas

### n grande (n ≥ 30)
- Regla general: buena aproximación para la mayoría de distribuciones
- Excelente aproximación para n > 100

### n muy grande (n > 1000)
- Aproximación excelente prácticamente siempre
- Errores de aproximación despreciables

## Aplicaciones

### Ciencia de Datos
- **Bootstrap**: Remuestreo para estimar distribuciones de estadísticos
- **Machine Learning**: Inicialización de pesos en redes neuronales
- **Feature Engineering**: Normalización de características

### Estadística Inferencial
- **Intervalos de Confianza**: Construcción de intervalos para medias
- **Pruebas de Hipótesis**: Test t, test z para medias
- **Tamaño de Muestra**: Calcular n necesario para precisión deseada

### Control de Calidad
- **Gráficos de Control**: Límites basados en distribución normal
- **Six Sigma**: Reducción de variabilidad en procesos
- **Muestreo de Aceptación**: Decisiones sobre lotes

### Finanzas
- **Teoría de Carteras**: Distribución de retornos de portafolio
- **Modelo Black-Scholes**: Valoración de opciones
- **Value at Risk (VaR)**: Estimación de riesgo

### Telecomunicaciones
- **Teoría de Tráfico**: Modelado de carga en redes
- **Procesamiento de Señales**: Ruido aproximado como normal

## Error Estándar

El **error estándar** de la media es la desviación estándar del promedio muestral:

```
SE = σ / √n
```

**Interpretación:** A medida que n aumenta, el error estándar disminuye (más precisión)

**Ejemplo:**
- σ = 10, n = 25: SE = 10/5 = 2
- σ = 10, n = 100: SE = 10/10 = 1
- σ = 10, n = 400: SE = 10/20 = 0.5

Para reducir el SE a la mitad, necesitamos 4 veces más datos.

## Condiciones de Aplicabilidad

### Cuándo NO usar el TLC:

1. **Muestras muy pequeñas** (n < 10) con distribución original muy asimétrica
2. **Dependencia entre observaciones** (series de tiempo, datos correlacionados)
3. **Distribuciones con varianza infinita** (Cauchy, algunas Pareto)
4. **Outliers extremos** que dominan la suma
5. **Muestreo sin reemplazo** de población pequeña (usar corrección finita)

### Correcciones y Alternativas:

- **Bootstrap**: Método no paramétrico para estimar distribuciones
- **Test t de Student**: Cuando σ es desconocida y n < 30
- **Transformaciones**: Log, raíz cuadrada para reducir asimetría
- **Test no paramétricos**: Cuando el TLC no aplica

## Demostración Visual

```
Distribución Original (puede ser cualquiera):
▁▃▅▇█▇▅▃▁

Promedios de n=5 muestras:
  ▂▄█▆▂

Promedios de n=30 muestras:
    ▃▆█▆▃

Promedios de n=100 muestras:
     ▂█▂     ← Campana de Gauss perfecta
```

## Generalización: TLC Multivariado

Para vectores aleatorios X⃗ = (X₁, X₂, ..., Xₖ):

```
√n (X̄⃗ - μ⃗) → Normal Multivariada(0, Σ)
```

Donde Σ es la matriz de covarianza.

**Aplicación:** Inferencia sobre múltiples parámetros simultáneamente

## Juegos Relacionados

🎮 [Lanza la Moneda](/game/coin-flip) - Observa el TLC en acción con lanzamientos repetidos

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Experimenta con diferentes distribuciones y promedios

🎮 [Adivina la Medida](/game/guess-measure) - Practica con medias muestrales

## Recursos Adicionales

- Simuladores interactivos del TLC online
- Ley de los Grandes Números: Teorema relacionado
- Desigualdad de Chebyshev: Cota sin asumir normalidad
- Distribución t de Student: Para muestras pequeñas
- Teorema de Berry-Esseen: Cuantifica la velocidad de convergencia
- Video: "Central Limit Theorem" - Khan Academy

---

*Volver a: [¿Qué es la Probabilidad?](/wiki/que-es-probabilidad)*
