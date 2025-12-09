# Distribución Binomial

## Introducción

La **distribución binomial** modela el número de éxitos en una secuencia de experimentos independientes, donde cada experimento tiene solo dos posibles resultados (éxito o fracaso) y la probabilidad de éxito es constante. Es una de las distribuciones de probabilidad más importantes y utilizadas en estadística.

## Conceptos Fundamentales

### Características de un Experimento Binomial

Un experimento sigue una distribución binomial si cumple estas condiciones:

1. **Número fijo de ensayos (n)**: Se realiza un número determinado de experimentos
2. **Dos resultados posibles**: Cada ensayo resulta en "éxito" o "fracaso"
3. **Independencia**: Los ensayos son independientes entre sí
4. **Probabilidad constante (p)**: La probabilidad de éxito es la misma en cada ensayo

### Notación

Si X sigue una distribución binomial, escribimos:
```
X ~ Binomial(n, p)
```

Donde:
- **n** = número de ensayos
- **p** = probabilidad de éxito en cada ensayo
- **X** = número de éxitos en n ensayos

## Fórmulas y Cálculos

### Función de Probabilidad

La probabilidad de obtener exactamente k éxitos en n ensayos es:

```
P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
```

Donde:
- **C(n,k)** = n! / (k! × (n-k)!) = coeficiente binomial
- **p^k** = probabilidad de k éxitos
- **(1-p)^(n-k)** = probabilidad de (n-k) fracasos

### Media (Esperanza)
```
E[X] = μ = n × p
```

### Varianza
```
Var(X) = σ² = n × p × (1-p)
```

### Desviación Estándar
```
σ = √(n × p × (1-p))
```

## Ejemplos Prácticos

### Ejemplo 1: Lanzamiento de Monedas

Lanzar una moneda justa 10 veces. ¿Cuál es la probabilidad de obtener exactamente 6 caras?

**Datos:**
- n = 10 ensayos
- k = 6 éxitos (caras)
- p = 0.5 (probabilidad de cara)

**Cálculo:**
```
P(X = 6) = C(10,6) × 0.5^6 × 0.5^4
         = 210 × 0.015625 × 0.0625
         = 0.2051 ≈ 20.51%
```

### Ejemplo 2: Control de Calidad

Una máquina produce piezas con un 5% de defectos. Si se inspeccionan 20 piezas:

**a) Probabilidad de encontrar exactamente 2 defectuosas:**
```
n = 20, k = 2, p = 0.05
P(X = 2) = C(20,2) × 0.05^2 × 0.95^18
         = 190 × 0.0025 × 0.3972
         = 0.1887 ≈ 18.87%
```

**b) Número esperado de defectuosas:**
```
E[X] = 20 × 0.05 = 1 pieza defectuosa
```

### Ejemplo 3: Test de Opción Múltiple

Un estudiante adivina 20 preguntas de opción múltiple (4 opciones cada una). ¿Probabilidad de aprobar (12+ correctas)?

**Datos:**
- n = 20, p = 0.25
- Necesitamos P(X ≥ 12)

```
P(X ≥ 12) = Σ P(X = k) para k = 12 hasta 20
          ≈ 0.0009 ≈ 0.09%
```

¡Prácticamente imposible aprobar adivinando!

## Propiedades Importantes

### 1. Simetría
Si p = 0.5, la distribución es simétrica alrededor de su media.

### 2. Asimetría
- Si p < 0.5, la distribución está sesgada a la derecha
- Si p > 0.5, la distribución está sesgada a la izquierda

### 3. Forma
- Para n grande y p cercano a 0.5, la distribución se aproxima a la normal
- Regla práctica: n×p ≥ 5 y n×(1-p) ≥ 5

### 4. Suma de Binomiales
Si X₁ ~ Binomial(n₁, p) y X₂ ~ Binomial(n₂, p) son independientes:
```
X₁ + X₂ ~ Binomial(n₁ + n₂, p)
```

## Aplicaciones

### Ciencia de Datos
- **A/B Testing**: Comparar tasas de conversión entre grupos
- **Machine Learning**: Clasificación binaria, evaluación de modelos
- **Muestreo**: Encuestas con respuestas sí/no

### Medicina
- **Ensayos Clínicos**: Tasa de recuperación de pacientes
- **Epidemiología**: Propagación de enfermedades
- **Genética**: Herencia de características binarias

### Negocios
- **Control de Calidad**: Productos defectuosos en lotes
- **Marketing**: Tasa de respuesta a campañas
- **Finanzas**: Número de días con ganancia/pérdida

### Deportes
- **Análisis**: Probabilidad de ganar x juegos de n
- **Estrategia**: Tiros libres, penales, etc.

## Aproximaciones

### Aproximación Normal
Cuando n es grande y p no está cerca de 0 o 1:
```
X ~ Binomial(n, p) ≈ Normal(μ = np, σ² = np(1-p))
```

Con corrección de continuidad:
```
P(X = k) ≈ P(k - 0.5 < Y < k + 0.5) donde Y ~ Normal
```

### Aproximación Poisson
Cuando n es grande y p es pequeño (n ≥ 20, p ≤ 0.05):
```
X ~ Binomial(n, p) ≈ Poisson(λ = np)
```

## Cálculo con Software

### Python (SciPy)
```python
from scipy.stats import binom

# P(X = k)
prob = binom.pmf(k=6, n=10, p=0.5)

# P(X ≤ k)
cdf = binom.cdf(k=6, n=10, p=0.5)

# Media y varianza
mean, var = binom.stats(n=10, p=0.5)
```

### R
```R
# P(X = k)
dbinom(6, size=10, prob=0.5)

# P(X ≤ k)
pbinom(6, size=10, prob=0.5)
```

## Juegos Relacionados

🎮 [Lanza la Moneda](/game/coin-flip) - Experimenta con ensayos de Bernoulli

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Visualiza la distribución binomial

## Recursos Adicionales

- Ensayos de Bernoulli: Experimentos binomiales individuales
- Distribución Geométrica: Número de ensayos hasta el primer éxito
- Distribución Hipergeométrica: Muestreo sin reemplazo
- Distribución Multinomial: Extensión a más de dos categorías
- Calculadoras online para distribución binomial

---

*Siguiente: [Distribución de Poisson](/wiki/distribucion-poisson)*
