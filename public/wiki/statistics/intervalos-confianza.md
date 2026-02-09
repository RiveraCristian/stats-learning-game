# Intervalos de Confianza

## Introducción

Un **intervalo de confianza** es un rango de valores que probablemente contiene el verdadero valor de un parámetro poblacional. Es una herramienta fundamental en inferencia estadística para cuantificar la incertidumbre en nuestras estimaciones.

## Concepto Básico

Cuando tomamos una muestra de una población, calculamos estadísticos (como la media muestral). Pero sabemos que si tomáramos otra muestra, obtendríamos un valor ligeramente diferente.

**El intervalo de confianza nos dice**: "Estamos X% seguros de que el verdadero valor poblacional está en este rango"

## Notación

```
IC = [Límite Inferior, Límite Superior]
IC = [x̄ - ME, x̄ + ME]
```

Donde:
- **x̄**: Media muestral
- **ME**: Margen de error

## Fórmula General

Para la media poblacional (μ):

```
IC = x̄ ± z* × (σ/√n)
```

Donde:
- **x̄**: Media muestral
- **z***: Valor crítico de la distribución normal
- **σ**: Desviación estándar poblacional
- **n**: Tamaño de la muestra

## Niveles de Confianza

### 90% de Confianza
- **z* = 1.645**
- Intervalo más estrecho
- Menos certeza

### 95% de Confianza
- **z* = 1.96** (≈ 2)
- Nivel más común
- Balance entre precisión y certeza

### 99% de Confianza
- **z* = 2.576**
- Intervalo más ancho
- Mayor certeza

## Ejemplo Práctico

**Problema**: Estimamos la altura promedio de estudiantes universitarios.

**Datos**:
- Muestra: n = 100 estudiantes
- Media muestral: x̄ = 170 cm
- Desviación estándar: σ = 10 cm
- Nivel de confianza: 95%

**Cálculo**:
```
ME = 1.96 × (10/√100) = 1.96 × 1 = 1.96 cm

IC₉₅% = [170 - 1.96, 170 + 1.96]
IC₉₅% = [168.04, 171.96] cm
```

**Interpretación**: Estamos 95% confiados de que la altura promedio real de todos los estudiantes está entre 168.04 y 171.96 cm.

## Interpretación Correcta

### ✅ Correcto
"Si repitiéramos este estudio muchas veces, aproximadamente el 95% de los intervalos calculados contendrían el verdadero valor poblacional"

### ❌ Incorrecto
"Hay un 95% de probabilidad de que μ esté en este intervalo"

**Por qué es incorrecto**: El parámetro poblacional μ es fijo (aunque desconocido). El intervalo es lo que varía entre muestras.

## Factores que Afectan el Ancho del Intervalo

### 1. Nivel de Confianza
- ↑ Confianza → ↑ Ancho del intervalo
- Más certeza requiere más rango

### 2. Tamaño de Muestra (n)
- ↑ n → ↓ Ancho del intervalo
- Más datos → más precisión

### 3. Variabilidad (σ)
- ↑ σ → ↑ Ancho del intervalo
- Más variabilidad → menos precisión

## Distribución t de Student

Cuando **no conocemos σ** o **n < 30**, usamos la distribución t:

```
IC = x̄ ± t* × (s/√n)
```

Donde:
- **t***: Valor crítico de la distribución t
- **s**: Desviación estándar muestral
- **gl = n - 1**: Grados de libertad

### Diferencias con z
- La distribución t tiene colas más pesadas
- Se aproxima a la normal cuando n es grande
- Es más conservadora (intervalos más anchos)

## Ejemplo con Distribución t

**Datos**:
- n = 25 estudiantes
- x̄ = 170 cm
- s = 10 cm (desviación muestral)
- Confianza: 95%
- gl = 24

**Cálculo**:
```
t* = 2.064 (de tabla t con gl=24)

ME = 2.064 × (10/√25) = 2.064 × 2 = 4.128 cm

IC₉₅% = [170 - 4.128, 170 + 4.128]
IC₉₅% = [165.87, 174.13] cm
```

Nota: El intervalo es más ancho que con z (1.96) debido a la mayor incertidumbre.

## Intervalos para Proporciones

Para estimar proporciones poblacionales (p):

```
IC = p̂ ± z* × √[p̂(1-p̂)/n]
```

Donde:
- **p̂**: Proporción muestral
- **n**: Tamaño de muestra

### Ejemplo: Encuesta Electoral

**Datos**:
- n = 1000 votantes
- p̂ = 0.52 (52% apoyan al candidato)
- Confianza: 95%

**Cálculo**:
```
ME = 1.96 × √[0.52 × 0.48 / 1000]
ME = 1.96 × 0.0158 = 0.031 = 3.1%

IC₉₅% = [0.52 - 0.031, 0.52 + 0.031]
IC₉₅% = [0.489, 0.551] o [48.9%, 55.1%]
```

**Interpretación**: Estamos 95% confiados de que el verdadero apoyo está entre 48.9% y 55.1%.

## Relación con Pruebas de Hipótesis

Si un intervalo de confianza del 95% para la diferencia entre dos medias **no incluye 0**, entonces:
- Hay evidencia significativa de diferencia (p < 0.05)
- Rechazaríamos H₀: μ₁ = μ₂

## Tamaño de Muestra Necesario

Para lograr un margen de error deseado:

```
n = (z* × σ / ME)²
```

### Ejemplo
Queremos ME = 1 cm, σ = 10 cm, confianza 95%:

```
n = (1.96 × 10 / 1)² = 384.16 ≈ 385 estudiantes
```

## Aplicaciones

### En Investigación Médica
- Eficacia de tratamientos
- Rangos normales de biomarcadores
- Diferencias entre grupos

### En Negocios
- Satisfacción del cliente
- Estimación de ventas futuras
- A/B testing

### En Machine Learning
- Intervalos de predicción
- Incertidumbre en métricas de evaluación
- Bootstrap confidence intervals

## Bootstrap para Intervalos de Confianza

Método moderno que no asume distribución normal:

1. Remuestrear con reemplazo de la muestra original
2. Calcular el estadístico en cada remuestra
3. Usar percentiles de la distribución bootstrap

**Ventajas**:
- No requiere supuestos distribucionales
- Funciona con estadísticos complejos
- Útil cuando la teoría es difícil

## Errores Comunes

### 1. Mala Interpretación
❌ "Hay 95% de probabilidad de que μ esté aquí"
✅ "95% de intervalos similares contendrán μ"

### 2. Confundir con Rango de Datos
- IC es para el **parámetro poblacional**
- No es el rango donde caen el 95% de los datos individuales

### 3. Ignorar Supuestos
- Muestra aleatoria
- Independencia de observaciones
- Normalidad (o n grande)

## Visualización

Los intervalos de confianza se suelen representar con:
- **Barras de error** en gráficos
- **Bandas de confianza** en regresiones
- **Cajas** con límites superior e inferior

## Conclusión

Los intervalos de confianza son esenciales para:
- ✅ Cuantificar incertidumbre
- ✅ Comunicar precisión de estimaciones
- ✅ Tomar decisiones informadas
- ✅ Comparar grupos o tratamientos

**Regla práctica**: Siempre reporta intervalos de confianza junto con estimaciones puntuales.

---

*Siguiente: [Pruebas de Hipótesis](/wiki/pruebas-hipotesis)*
