# Eventos y Espacios Muestrales

## Introducción

Los **espacios muestrales** y **eventos** son conceptos fundamentales en probabilidad que nos permiten modelar y analizar situaciones con incertidumbre de manera sistemática. Un espacio muestral contiene todos los resultados posibles de un experimento aleatorio, mientras que un evento es cualquier subconjunto de estos resultados.

## Conceptos Fundamentales

### Espacio Muestral (Ω)

El espacio muestral es el conjunto de todos los posibles resultados de un experimento aleatorio. Se denota típicamente con la letra griega omega (Ω) o con la letra S.

**Características:**
- Debe ser exhaustivo (incluir todos los resultados posibles)
- Los resultados deben ser mutuamente excluyentes
- Puede ser finito o infinito

### Evento

Un evento es cualquier subconjunto del espacio muestral. Los eventos pueden ser:
- **Simples**: Contienen un solo resultado
- **Compuestos**: Contienen múltiples resultados
- **Imposibles**: Conjunto vacío (∅)
- **Seguros**: El espacio muestral completo

## Ejemplos Prácticos

### Lanzamiento de un Dado

**Espacio Muestral:** Ω = {1, 2, 3, 4, 5, 6}

**Eventos:**
- A = "Salir número par" = {2, 4, 6}
- B = "Salir número mayor que 4" = {5, 6}
- C = "Salir 7" = ∅ (evento imposible)
- D = "Salir un número del 1 al 6" = Ω (evento seguro)

### Lanzamiento de Dos Monedas

**Espacio Muestral:** Ω = {CC, CS, SC, SS}

Donde C = Cara, S = Sello

**Eventos:**
- E = "Al menos una cara" = {CC, CS, SC}
- F = "Exactamente una cara" = {CS, SC}
- G = "Dos sellos" = {SS}

## Operaciones con Eventos

### Unión (A ∪ B)
Ocurre A o B o ambos. Ejemplo: "Par o mayor que 4" = {2, 4, 5, 6}

### Intersección (A ∩ B)
Ocurren A y B simultáneamente. Ejemplo: "Par y mayor que 4" = {6}

### Complemento (A')
No ocurre A. Ejemplo: "No salir par" = {1, 3, 5}

### Diferencia (A - B)
Ocurre A pero no B. Ejemplo: "Par pero no mayor que 4" = {2, 4}

## Aplicaciones

- **Juegos de Azar**: Modelar todos los resultados posibles en dados, cartas, ruleta
- **Control de Calidad**: Definir productos defectuosos y no defectuosos
- **Medicina**: Resultados de pruebas diagnósticas (positivo/negativo)
- **Finanzas**: Modelar escenarios de inversión (ganancia, pérdida, estable)
- **Machine Learning**: Espacios de características y clases de clasificación

## Fórmulas y Cálculos

### Cardinalidad
El número de elementos en un espacio muestral finito:
```
|Ω| = n(Ω)
```

### Probabilidad de un Evento
Para espacios equiprobables:
```
P(A) = |A| / |Ω| = n(A) / n(Ω)
```

### Regla de la Suma
```
P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
```

### Complemento
```
P(A') = 1 - P(A)
```

## Propiedades Importantes

1. **0 ≤ P(A) ≤ 1** para todo evento A
2. **P(Ω) = 1** (probabilidad del evento seguro)
3. **P(∅) = 0** (probabilidad del evento imposible)
4. Si A y B son mutuamente excluyentes: **P(A ∪ B) = P(A) + P(B)**

## Juegos Relacionados

🎮 [Lanza la Moneda](/game/coin-flip) - Experimenta con espacios muestrales simples

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Visualiza diferentes espacios de resultados

## Recursos Adicionales

- Khan Academy: Espacios Muestrales y Eventos
- Libro: "Introduction to Probability" de Grinstead & Snell
- Diagrama de Venn para visualizar operaciones entre eventos
- Árboles de probabilidad para experimentos secuenciales

---

*Siguiente: [Independencia de Eventos](/wiki/independencia-eventos)*
