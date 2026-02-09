# Probabilidad Condicional

## Introducción

La **probabilidad condicional** es la probabilidad de que ocurra un evento dado que otro evento ya ha ocurrido. Es fundamental para entender dependencias entre eventos y es la base del Teorema de Bayes.

## Definición

La probabilidad condicional de A dado B se denota como:

```
P(A|B)
```

Se lee: "Probabilidad de A dado B" o "Probabilidad de A condicionado a B"

## Fórmula

```
P(A|B) = P(A ∩ B) / P(B)
```

Donde:
- **P(A|B)**: Probabilidad de A dado que B ocurrió
- **P(A ∩ B)**: Probabilidad de que A y B ocurran juntos
- **P(B)**: Probabilidad de que B ocurra (debe ser > 0)

## Intuición

Cuando sabemos que B ha ocurrido, el espacio muestral se reduce. Solo consideramos los casos donde B es verdadero, y dentro de esos casos, buscamos cuántos también tienen A.

## Ejemplo Simple: Dados

Lanzamos un dado justo. Sea:
- **A**: Sale un número par
- **B**: Sale un número mayor que 3

### Sin condición:
```
P(A) = 3/6 = 0.5  (números pares: 2, 4, 6)
```

### Con condición:
Si sabemos que salió mayor que 3 (B ocurrió), el espacio se reduce a {4, 5, 6}

```
P(A|B) = 2/3 ≈ 0.67  (números pares en {4, 5, 6}: 4, 6)
```

La probabilidad cambió de 0.5 a 0.67 porque la información adicional modificó nuestro espacio muestral.

## Ejemplo: Cartas

Baraja de 52 cartas. Sea:
- **A**: La carta es un As
- **B**: La carta es de corazones

### Calculando P(A|B):
```
P(A ∩ B) = 1/52  (solo hay un As de corazones)
P(B) = 13/52 = 1/4  (hay 13 corazones)

P(A|B) = (1/52) / (13/52) = 1/13
```

**Interpretación**: Si sabemos que la carta es de corazones, hay 1 probabilidad en 13 de que sea un As.

## Relación con Independencia

Dos eventos A y B son **independientes** si:

```
P(A|B) = P(A)
```

Es decir, saber que B ocurrió no cambia la probabilidad de A.

### Ejemplo de Independencia
Lanzar dos monedas:
- **A**: Primera moneda sale cara
- **B**: Segunda moneda sale cara

```
P(A|B) = P(A) = 0.5
```

El resultado de la segunda moneda no afecta la primera.

### Ejemplo de Dependencia
Sacar dos cartas sin reemplazo:
- **A**: Primera carta es As
- **B**: Segunda carta es As

```
P(A) = 4/52
P(B|A) = 3/51  (quedan 3 Ases en 51 cartas)
```

Los eventos están relacionados porque el primer resultado afecta el segundo.

## Tablas de Contingencia

Las tablas de contingencia son útiles para calcular probabilidades condicionales.

### Ejemplo: Estudiantes y Aprobación

|           | Aprobó | Reprobó | Total |
|-----------|--------|---------|-------|
| Estudió   | 80     | 20      | 100   |
| No estudió| 30     | 70      | 100   |
| **Total** | 110    | 90      | 200   |

**Preguntas**:

1. P(Aprobó | Estudió) = 80/100 = 0.80
2. P(Aprobó | No estudió) = 30/100 = 0.30
3. P(Estudió | Aprobó) = 80/110 ≈ 0.73

## Regla de la Multiplicación

De la fórmula de probabilidad condicional, podemos derivar:

```
P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)
```

Esta regla es útil para calcular probabilidades conjuntas.

### Ejemplo
Probabilidad de sacar dos Ases consecutivos sin reemplazo:

```
P(As₁ ∩ As₂) = P(As₂|As₁) × P(As₁)
             = (3/51) × (4/52)
             ≈ 0.0045 = 0.45%
```

## Probabilidad Total

Si tenemos eventos mutuamente excluyentes B₁, B₂, ..., Bₙ que cubren todo el espacio:

```
P(A) = P(A|B₁)P(B₁) + P(A|B₂)P(B₂) + ... + P(A|Bₙ)P(Bₙ)
```

### Ejemplo: Fábrica con 3 Máquinas

- Máquina 1: produce 50% de items, 2% defectuosos
- Máquina 2: produce 30% de items, 3% defectuosos  
- Máquina 3: produce 20% de items, 5% defectuosos

**P(Defectuoso) = ?**

```
P(D) = P(D|M₁)P(M₁) + P(D|M₂)P(M₂) + P(D|M₃)P(M₃)
     = (0.02)(0.50) + (0.03)(0.30) + (0.05)(0.20)
     = 0.010 + 0.009 + 0.010
     = 0.029 = 2.9%
```

## Árbol de Probabilidades

Los árboles son útiles para visualizar probabilidades condicionales en eventos secuenciales.

```
                    Aprobó (0.8)
        Estudió (0.5)
                    Reprobó (0.2)

Inicio
                    Aprobó (0.3)
        No estudió (0.5)
                    Reprobó (0.7)
```

## Aplicaciones

### En Machine Learning
- **Clasificadores Naive Bayes**: P(Clase|Características)
- **Redes Bayesianas**: Modelan dependencias condicionales
- **Filtros de Kalman**: Actualización de estados

### En Medicina
- **Diagnóstico**: P(Enfermedad|Síntomas)
- **Efectividad de tratamientos**: P(Curación|Tratamiento)

### En Finanzas
- **Riesgo de crédito**: P(Default|Historial)
- **Predicción de mercados**: P(Subida|Indicadores)

## Errores Comunes

### Confundir P(A|B) con P(B|A)
Estas son probabilidades diferentes:
- P(Lluvia|Nubes) ≠ P(Nubes|Lluvia)

### Falacia del Fiscal
Confundir P(Evidencia|Inocente) con P(Inocente|Evidencia)

### Ignorar el Prior
No considerar P(A) al evaluar P(A|B)

## Juegos Relacionados

🎮 [Teorema de Bayes](/game/bayes-theorem) - Practica con probabilidades condicionales

---

*Siguiente: [Teorema de Bayes](/wiki/teorema-bayes)*
