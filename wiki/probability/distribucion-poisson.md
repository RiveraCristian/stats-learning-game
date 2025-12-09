# Distribución de Poisson

## Introducción

La **distribución de Poisson** modela el número de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando estos eventos ocurren con una tasa promedio conocida y de manera independiente del tiempo transcurrido desde el último evento. Es especialmente útil para modelar eventos raros pero importantes.

## Conceptos Fundamentales

### Características de un Proceso de Poisson

Un proceso sigue una distribución de Poisson si cumple:

1. **Eventos discretos**: Se cuentan eventos individuales
2. **Tasa constante**: Los eventos ocurren a una tasa promedio constante (λ)
3. **Independencia**: La ocurrencia de un evento no afecta la probabilidad de otro
4. **No simultaneidad**: Dos eventos no pueden ocurrir exactamente al mismo tiempo

### Notación

Si X representa el número de eventos en un intervalo:
```
X ~ Poisson(λ)
```

Donde **λ** (lambda) es la tasa promedio de eventos por intervalo.

## Fórmulas y Cálculos

### Función de Probabilidad

La probabilidad de observar exactamente k eventos es:

```
P(X = k) = (λ^k × e^(-λ)) / k!
```

Donde:
- **λ** = tasa promedio de eventos (λ > 0)
- **k** = número de eventos observados (k = 0, 1, 2, ...)
- **e** ≈ 2.71828 (constante de Euler)

### Media (Esperanza)
```
E[X] = μ = λ
```

### Varianza
```
Var(X) = σ² = λ
```

**Propiedad única:** La media y la varianza son iguales.

### Desviación Estándar
```
σ = √λ
```

## Ejemplos Prácticos

### Ejemplo 1: Centro de Llamadas

Un centro de llamadas recibe en promedio 4 llamadas por hora. ¿Cuál es la probabilidad de recibir exactamente 6 llamadas en una hora?

**Datos:**
- λ = 4 llamadas/hora
- k = 6 llamadas

**Cálculo:**
```
P(X = 6) = (4^6 × e^(-4)) / 6!
         = (4096 × 0.0183) / 720
         = 0.1042 ≈ 10.42%
```

### Ejemplo 2: Tráfico de Sitio Web

Un sitio web recibe en promedio 2 visitantes por minuto. ¿Probabilidad de que en un minuto no haya visitantes?

**Datos:**
- λ = 2 visitantes/minuto
- k = 0 visitantes

**Cálculo:**
```
P(X = 0) = (2^0 × e^(-2)) / 0!
         = e^(-2)
         = 0.1353 ≈ 13.53%
```

### Ejemplo 3: Defectos de Manufactura

En promedio, hay 0.5 defectos por metro de tela. ¿Probabilidad de encontrar 2 o más defectos en 3 metros?

**Datos:**
- λ = 0.5 × 3 = 1.5 defectos en 3 metros
- k ≥ 2

**Cálculo:**
```
P(X ≥ 2) = 1 - P(X < 2)
         = 1 - [P(X=0) + P(X=1)]
         = 1 - [e^(-1.5) + 1.5×e^(-1.5)]
         = 1 - 0.5578
         = 0.4422 ≈ 44.22%
```

### Ejemplo 4: Accidentes de Tráfico

En una intersección ocurren en promedio 3 accidentes por mes. ¿Cuál es la probabilidad de que en una semana ocurran exactamente 2 accidentes?

**Datos:**
- λ = 3 accidentes/mes = 3/4 = 0.75 accidentes/semana
- k = 2 accidentes

**Cálculo:**
```
P(X = 2) = (0.75^2 × e^(-0.75)) / 2!
         = (0.5625 × 0.4724) / 2
         = 0.1329 ≈ 13.29%
```

## Propiedades Importantes

### 1. Aditividad
Si X ~ Poisson(λ₁) y Y ~ Poisson(λ₂) son independientes:
```
X + Y ~ Poisson(λ₁ + λ₂)
```

### 2. División de Intervalos
Si X ~ Poisson(λ) en un intervalo, entonces en la mitad del intervalo:
```
Y ~ Poisson(λ/2)
```

### 3. Relación con Binomial
La distribución de Poisson es el límite de la binomial cuando:
- n → ∞ (muchos ensayos)
- p → 0 (probabilidad pequeña)
- np = λ (constante)

### 4. Forma de la Distribución
- Para λ < 1: Fuertemente sesgada a la derecha
- Para λ ≈ 10: Aproximadamente simétrica
- Para λ grande: Se aproxima a la distribución normal

## Aplicaciones

### Telecomunicaciones
- Número de llamadas en un periodo de tiempo
- Paquetes de datos que llegan a un servidor
- Mensajes en un sistema de mensajería

### Tráfico y Transporte
- Vehículos que pasan por un punto
- Accidentes en una carretera
- Pasajeros que llegan a una estación

### Medicina y Biología
- Mutaciones genéticas en una secuencia de ADN
- Células en una región específica del microscopio
- Casos de una enfermedad rara en una población

### Negocios y Retail
- Clientes que entran a una tienda por hora
- Número de quejas recibidas por día
- Productos devueltos por mes

### Ciencia y Física
- Partículas radioactivas detectadas
- Estrellas en una región del cielo
- Errores tipográficos en un documento

### Informática
- Errores de red por unidad de tiempo
- Ataques cibernéticos por semana
- Solicitudes HTTP a un servidor

## Aproximación Normal

Cuando λ es grande (típicamente λ > 10), la distribución de Poisson se puede aproximar con una normal:

```
X ~ Poisson(λ) ≈ Normal(μ = λ, σ² = λ)
```

Con corrección de continuidad:
```
P(X = k) ≈ P(k - 0.5 < Y < k + 0.5) donde Y ~ Normal(λ, λ)
```

## Diferencias con Binomial

| Característica | Binomial | Poisson |
|---------------|----------|---------|
| Número de ensayos | Fijo (n) | Infinito (teórico) |
| Parámetros | n y p | λ |
| Aplicación | Éxitos en n ensayos | Eventos en tiempo/espacio |
| Varianza | np(1-p) | λ |
| Ejemplo | Lanzar 10 monedas | Llamadas por hora |

## Cálculo con Software

### Python (SciPy)
```python
from scipy.stats import poisson

# P(X = k)
prob = poisson.pmf(k=3, mu=2.5)

# P(X ≤ k)
cdf = poisson.cdf(k=3, mu=2.5)

# Generar datos aleatorios
datos = poisson.rvs(mu=2.5, size=1000)
```

### R
```R
# P(X = k)
dpois(3, lambda=2.5)

# P(X ≤ k)
ppois(3, lambda=2.5)

# Datos aleatorios
rpois(1000, lambda=2.5)
```

### Excel
```
=POISSON.DIST(k, lambda, FALSE)  # P(X = k)
=POISSON.DIST(k, lambda, TRUE)   # P(X ≤ k)
```

## Proceso de Poisson

Un **proceso de Poisson** modela la ocurrencia de eventos a lo largo del tiempo:
- Los tiempos entre eventos siguen una distribución exponencial
- El número de eventos en cualquier intervalo sigue una distribución de Poisson
- Es un modelo fundamental en teoría de colas

## Juegos Relacionados

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Visualiza la distribución de Poisson

🎮 [Adivina la Medida](/game/guess-measure) - Practica con datos que siguen diferentes distribuciones

## Recursos Adicionales

- Distribución Exponencial: Tiempo entre eventos de Poisson
- Teoría de Colas: Aplicación práctica del proceso de Poisson
- Test de ajuste Chi-cuadrado: Verificar si los datos siguen una Poisson
- Distribución Binomial Negativa: Generalización de la Poisson con más variabilidad
- Calculadoras online para distribución de Poisson

---

*Siguiente: [Teorema del Límite Central](/wiki/teorema-limite-central)*
