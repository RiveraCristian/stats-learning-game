# Independencia de Eventos

## Introducción

La **independencia de eventos** es un concepto crucial en probabilidad que describe cuando la ocurrencia de un evento no afecta la probabilidad de que ocurra otro evento. Este concepto es fundamental para modelar situaciones donde los resultados no están relacionados entre sí.

## Conceptos Fundamentales

### Definición de Independencia

Dos eventos A y B son **independientes** si y solo si:

```
P(A ∩ B) = P(A) × P(B)
```

Equivalentemente, si P(B) > 0:
```
P(A | B) = P(A)
```

Esto significa que saber que B ocurrió no cambia la probabilidad de A.

### Independencia vs Exclusión Mutua

**¡Importante!** Independencia y exclusión mutua son conceptos diferentes:

- **Eventos Independientes**: Uno no afecta al otro
- **Eventos Mutuamente Excluyentes**: No pueden ocurrir simultáneamente

Los eventos mutuamente excluyentes NO son independientes (excepto si alguno tiene probabilidad 0).

## Ejemplos Prácticos

### Ejemplo 1: Lanzamientos de Moneda

Lanzar una moneda dos veces:
- A = "Primera cara"
- B = "Segunda cara"
- P(A) = 0.5, P(B) = 0.5
- P(A ∩ B) = 0.25 = 0.5 × 0.5 ✓

Los eventos son **independientes** porque el resultado del primer lanzamiento no afecta al segundo.

### Ejemplo 2: Extracción de Cartas

**Sin reemplazo:**
- A = "Primera carta es As"
- B = "Segunda carta es As"
- P(A) = 4/52
- P(B|A) = 3/51 ≠ P(B) = 4/52

Los eventos NO son independientes.

**Con reemplazo:**
- P(B|A) = 4/52 = P(B)

Los eventos SÍ son independientes.

### Ejemplo 3: Dado y Moneda

- A = "Dado muestra 6"
- B = "Moneda muestra cara"
- P(A) = 1/6, P(B) = 1/2
- P(A ∩ B) = 1/12 = (1/6) × (1/2) ✓

Los eventos son independientes porque son experimentos completamente separados.

## Independencia Múltiple

Para tres o más eventos A, B, C... ser **mutuamente independientes**, deben cumplir:

```
P(A ∩ B ∩ C) = P(A) × P(B) × P(C)
```

Y todas las combinaciones de pares también deben ser independientes.

### Independencia por Pares vs Independencia Mutua

Los eventos pueden ser independientes por pares pero no mutuamente independientes:

**Ejemplo:** Lanzar dos monedas equilibradas
- A = "Primera es cara"
- B = "Segunda es cara"  
- C = "Ambas muestran el mismo resultado"

A y B son independientes, A y C son independientes, B y C son independientes, pero los tres juntos NO son mutuamente independientes.

## Aplicaciones

### Machine Learning
- **Naive Bayes**: Asume independencia condicional entre características
- **Validación de Modelos**: Usar conjuntos de datos independientes para entrenamiento y prueba

### Estadística
- **Muestreo**: Observaciones independientes para análisis válido
- **Series de Tiempo**: Detectar autocorrelación vs independencia

### Ciencia de Datos
- **A/B Testing**: Asegurar que las muestras de control y tratamiento sean independientes
- **Feature Engineering**: Identificar características correlacionadas vs independientes

### Finanzas
- **Diversificación**: Invertir en activos independientes reduce el riesgo
- **Modelado de Riesgo**: Eventos de riesgo independientes vs correlacionados

## Fórmulas y Cálculos

### Regla del Producto (Eventos Independientes)
```
P(A ∩ B ∩ C ∩ ... ∩ N) = P(A) × P(B) × P(C) × ... × P(N)
```

### Probabilidad Condicional
Para eventos independientes:
```
P(A | B) = P(A)
P(B | A) = P(B)
```

### Complementos Independientes
Si A y B son independientes, entonces:
- A y B' son independientes
- A' y B son independientes
- A' y B' son independientes

## Prueba de Independencia

Para verificar si dos eventos son independientes:

1. Calcular P(A), P(B), y P(A ∩ B)
2. Verificar si P(A ∩ B) = P(A) × P(B)
3. O verificar si P(A|B) = P(A) cuando P(B) > 0

**Ejemplo:** En una población:
- 30% son mujeres (M)
- 40% usan gafas (G)
- 12% son mujeres que usan gafas

¿Son independientes?
- P(M ∩ G) = 0.12
- P(M) × P(G) = 0.30 × 0.40 = 0.12 ✓

Sí, son independientes.

## Errores Comunes

1. **Confundir independencia con exclusión mutua**
   - Si P(A ∩ B) = 0 y P(A) > 0, P(B) > 0, entonces NO son independientes

2. **Asumir independencia sin verificar**
   - Muchas situaciones del mundo real tienen dependencias ocultas

3. **Ignorar el contexto**
   - La independencia puede cambiar según las condiciones (con/sin reemplazo)

## Juegos Relacionados

🎮 [Lanza la Moneda](/game/coin-flip) - Observa la independencia entre lanzamientos

🎮 [Teorema de Bayes](/game/bayes-theorem) - Contrasta con probabilidad condicional

## Recursos Adicionales

- Correlación de Pearson: Mide dependencia lineal
- Test de Chi-cuadrado: Prueba estadística para independencia
- Teorema de Bayes: Actualizar probabilidades con nueva información
- Cadenas de Markov: Cuando los eventos NO son independientes

---

*Siguiente: [Distribución Binomial](/wiki/distribucion-binomial)*
