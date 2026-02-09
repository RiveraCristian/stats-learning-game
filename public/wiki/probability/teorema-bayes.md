# Teorema de Bayes

## Introducción

El **Teorema de Bayes** es una fórmula fundamental en probabilidad que nos permite actualizar nuestras creencias sobre un evento basándonos en nueva evidencia. Es la base de la inferencia bayesiana y tiene aplicaciones cruciales en machine learning, medicina, y toma de decisiones.

## La Fórmula

```
P(A|B) = [P(B|A) × P(A)] / P(B)
```

Donde:
- **P(A|B)**: Probabilidad posterior - lo que queremos calcular
- **P(B|A)**: Verosimilitud (likelihood) - probabilidad de la evidencia dado el evento
- **P(A)**: Probabilidad prior - nuestra creencia inicial
- **P(B)**: Probabilidad de la evidencia

## Componentes del Teorema

### Prior (Probabilidad A Priori)
La probabilidad inicial antes de observar la evidencia. Representa nuestro conocimiento previo.

### Likelihood (Verosimilitud)
La probabilidad de observar la evidencia si el evento es verdadero.

### Posterior (Probabilidad A Posteriori)
La probabilidad actualizada después de considerar la evidencia. Es lo que buscamos calcular.

## Ejemplo Médico Clásico

**Problema**: Una prueba médica para una enfermedad rara.

- La enfermedad afecta al 1% de la población: P(Enfermo) = 0.01
- La prueba tiene 95% de precisión: P(Positivo|Enfermo) = 0.95
- Tasa de falsos positivos del 5%: P(Positivo|Sano) = 0.05

**Pregunta**: Si el resultado es positivo, ¿cuál es la probabilidad real de estar enfermo?

**Solución usando Bayes**:

```
P(Enfermo|Positivo) = [P(Positivo|Enfermo) × P(Enfermo)] / P(Positivo)

P(Positivo) = P(Positivo|Enfermo) × P(Enfermo) + P(Positivo|Sano) × P(Sano)
P(Positivo) = 0.95 × 0.01 + 0.05 × 0.99 = 0.059

P(Enfermo|Positivo) = (0.95 × 0.01) / 0.059 ≈ 0.161 = 16.1%
```

**Resultado**: ¡Solo 16.1% de probabilidad! Esto sorprende a muchos, pero es correcto debido a la baja prevalencia de la enfermedad.

## Aplicaciones en Machine Learning

### Clasificadores Naive Bayes
Utilizan el teorema de Bayes para clasificar datos:
- Filtros de spam
- Análisis de sentimientos
- Clasificación de documentos

### Inferencia Bayesiana
Actualización de modelos con nuevos datos:
- Estimación de parámetros
- Selección de modelos
- Predicción probabilística

### Redes Bayesianas
Modelan dependencias entre variables usando probabilidad condicional.

## Ejemplo de Clasificación

**Clasificar emails como spam o no spam**:

```
P(Spam|"oferta") = [P("oferta"|Spam) × P(Spam)] / P("oferta")
```

Si:
- P(Spam) = 0.3 (30% de emails son spam)
- P("oferta"|Spam) = 0.8 (80% de spam contiene "oferta")
- P("oferta"|No Spam) = 0.1 (10% de emails legítimos contienen "oferta")

Entonces:
```
P("oferta") = 0.8 × 0.3 + 0.1 × 0.7 = 0.31
P(Spam|"oferta") = (0.8 × 0.3) / 0.31 ≈ 0.77 = 77%
```

## Intuición Visual

El teorema de Bayes nos dice:
1. Empezamos con una creencia inicial (prior)
2. Observamos evidencia
3. Actualizamos nuestra creencia (posterior)
4. El posterior de hoy es el prior de mañana

Este proceso de actualización continua es fundamental en el aprendizaje automático.

## Errores Comunes

### Ignorar el Prior
No considerar la probabilidad base del evento puede llevar a conclusiones erróneas.

### Confundir P(A|B) con P(B|A)
Estas probabilidades son diferentes:
- P(Positivo|Enfermo) ≠ P(Enfermo|Positivo)

### Falacia del Fiscal
Asumir que una coincidencia rara implica culpabilidad sin considerar el prior.

## Juegos Relacionados

🎮 [Teorema de Bayes](/game/bayes-theorem) - Practica con problemas interactivos de Bayes

## Recursos Adicionales

- **Libro**: "Bayesian Data Analysis" por Gelman et al.
- **Curso**: Probabilistic Graphical Models
- **Aplicación**: Diagnóstico médico asistido por IA

---

*Siguiente: [Distribución Normal](/wiki/distribucion-normal)*
