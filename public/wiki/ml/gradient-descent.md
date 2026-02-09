# Gradient Descent

## Introducción

**Gradient Descent** (Descenso de Gradiente) es el algoritmo de optimización más fundamental en machine learning. Es el motor que permite a las redes neuronales y muchos otros modelos "aprender" ajustando sus parámetros para minimizar el error.

## Concepto Básico

Imagina que estás en una montaña con los ojos vendados y quieres llegar al valle (punto más bajo). Tu estrategia:
1. Sientes la pendiente bajo tus pies
2. Das un paso en la dirección de mayor descenso
3. Repites hasta llegar al fondo

Esto es exactamente lo que hace gradient descent con funciones matemáticas.

## La Función de Costo

Queremos minimizar una **función de costo** (loss function) que mide qué tan mal está nuestro modelo.

### Ejemplo: Regresión Lineal
```
J(θ) = (1/2m) Σ(hθ(xi) - yi)²
```

Donde:
- **J(θ)**: Función de costo (Mean Squared Error)
- **θ**: Parámetros del modelo
- **hθ(x)**: Predicción del modelo
- **y**: Valor real
- **m**: Número de ejemplos

## El Gradiente

El **gradiente** es un vector que apunta en la dirección de mayor aumento de la función.

```
∇J(θ) = [∂J/∂θ₀, ∂J/∂θ₁, ..., ∂J/∂θₙ]
```

**Intuición**: Si el gradiente apunta "arriba", vamos en dirección opuesta para "bajar".

## Algoritmo de Gradient Descent

### Fórmula de Actualización

```
θ := θ - α∇J(θ)
```

Donde:
- **θ**: Parámetros actuales
- **α**: Learning rate (tasa de aprendizaje)
- **∇J(θ)**: Gradiente de la función de costo

### Pasos del Algoritmo

1. **Inicializar** θ aleatoriamente
2. **Calcular** el gradiente ∇J(θ)
3. **Actualizar** θ = θ - α∇J(θ)
4. **Repetir** pasos 2-3 hasta convergencia

## Learning Rate (α)

El **learning rate** controla el tamaño del paso en cada iteración.

### Learning Rate Muy Pequeño
```
α = 0.001
```
- ✓ Convergencia garantizada (si es convexo)
- ✗ Muy lento
- ✗ Puede quedar atascado

### Learning Rate Muy Grande
```
α = 1.0
```
- ✗ Puede divergir
- ✗ Oscila sin converger
- ✗ Salta sobre el mínimo

### Learning Rate Óptimo
```
α = 0.01 - 0.1 (depende del problema)
```
- ✓ Convergencia rápida
- ✓ Estable
- ✓ Encuentra el mínimo

## Visualización

### Superficie de Costo 3D
```
        J(θ)
         ↑
         |     ╱╲
         |    ╱  ╲
         |   ╱    ╲
         |  ╱  •   ╲  ← Punto inicial
         | ╱   ↓    ╲
         |╱    ★     ╲ ← Mínimo global
         └────────────→ θ
```

El algoritmo sigue la pendiente hacia abajo hasta el mínimo (★).

## Variantes de Gradient Descent

### 1. Batch Gradient Descent

Usa **todos** los datos en cada iteración.

```
θ := θ - α(1/m)Σ∇J(θ; xi, yi)
```

**Ventajas**:
- ✓ Convergencia suave
- ✓ Garantiza encontrar mínimo (si es convexo)

**Desventajas**:
- ✗ Muy lento con datasets grandes
- ✗ No puede manejar datos que no caben en memoria

### 2. Stochastic Gradient Descent (SGD)

Usa **un solo** ejemplo en cada iteración.

```
θ := θ - α∇J(θ; xi, yi)
```

**Ventajas**:
- ✓ Muy rápido
- ✓ Puede escapar de mínimos locales
- ✓ Funciona con datos en streaming

**Desventajas**:
- ✗ Ruidoso, oscila mucho
- ✗ No converge exactamente al mínimo

### 3. Mini-Batch Gradient Descent

Usa un **pequeño lote** de ejemplos (típicamente 32-256).

```
θ := θ - α(1/b)Σ∇J(θ; xi, yi)  # b = batch size
```

**Ventajas**:
- ✓ Balance entre velocidad y estabilidad
- ✓ Aprovecha paralelización (GPUs)
- ✓ Más usado en práctica

**Desventajas**:
- ⚠️ Requiere ajustar batch size

## Ejemplo Numérico

**Problema**: Minimizar J(θ) = θ²

### Iteraciones con α = 0.1

```
Inicio: θ = 10

Iteración 1:
∇J = 2θ = 20
θ = 10 - 0.1(20) = 8

Iteración 2:
∇J = 2θ = 16
θ = 8 - 0.1(16) = 6.4

Iteración 3:
∇J = 2θ = 12.8
θ = 6.4 - 0.1(12.8) = 5.12

...

Convergencia: θ → 0 (el mínimo)
```

## Criterios de Parada

¿Cuándo detener el algoritmo?

### 1. Número Máximo de Iteraciones
```
if iteration >= max_iterations:
    stop
```

### 2. Cambio Pequeño en Parámetros
```
if |θ_new - θ_old| < ε:
    stop
```

### 3. Cambio Pequeño en Costo
```
if |J(θ_new) - J(θ_old)| < ε:
    stop
```

### 4. Gradiente Pequeño
```
if ||∇J(θ)|| < ε:
    stop
```

## Problemas Comunes

### 1. Mínimos Locales

En funciones no convexas:
```
J(θ)
  ↑
  |  ╱╲    ╱╲
  | ╱  ╲  ╱  ╲
  |╱ ★₁ ╲╱ ★₂ ╲
  └──────────→ θ
```

- ★₁: Mínimo local (malo)
- ★₂: Mínimo global (bueno)

**Soluciones**:
- Múltiples inicializaciones aleatorias
- Momentum
- Adaptive learning rates

### 2. Saddle Points (Puntos de Silla)

Puntos donde el gradiente es cero pero no son mínimos:
```
      ╱╲
     ╱  ╲
────╱ ★  ╲────
   ╱      ╲
```

**Solución**: Momentum ayuda a escapar

### 3. Plateaus (Mesetas)

Regiones planas donde el gradiente es muy pequeño:
```
J(θ)
  ↑
  |     ________
  |    ╱        ╲
  |   ╱          ╲
  └──────────────→ θ
```

**Solución**: Adaptive learning rates

## Optimizadores Avanzados

### Momentum

Acumula velocidad en direcciones consistentes:

```
v := βv + α∇J(θ)
θ := θ - v
```

- **β**: Típicamente 0.9
- Acelera en direcciones consistentes
- Amortigua oscilaciones

### RMSprop

Adapta el learning rate por parámetro:

```
s := βs + (1-β)(∇J)²
θ := θ - α∇J/√(s + ε)
```

- Divide por raíz de promedio de gradientes al cuadrado
- Parámetros con gradientes grandes → pasos pequeños

### Adam (Adaptive Moment Estimation)

Combina Momentum y RMSprop:

```
m := β₁m + (1-β₁)∇J     # Momento
v := β₂v + (1-β₂)(∇J)²  # RMSprop
θ := θ - α·m/√(v + ε)
```

**Parámetros típicos**:
- β₁ = 0.9
- β₂ = 0.999
- α = 0.001

**Ventajas**:
- ✓ Funciona bien en la mayoría de problemas
- ✓ Requiere poco tuning
- ✓ Más usado en deep learning

## Learning Rate Scheduling

Ajustar α durante el entrenamiento:

### Step Decay
```
α = α₀ × 0.5^(epoch/10)
```

### Exponential Decay
```
α = α₀ × e^(-kt)
```

### Cosine Annealing
```
α = α_min + 0.5(α_max - α_min)(1 + cos(πt/T))
```

## Aplicaciones

### En Redes Neuronales
- Backpropagation usa gradient descent
- Actualiza pesos en cada capa
- Minimiza cross-entropy o MSE

### En Regresión Lineal
- Encuentra β₀ y β₁ óptimos
- Minimiza suma de errores cuadrados

### En Logistic Regression
- Optimiza parámetros para clasificación
- Minimiza log-loss

### En Deep Learning
- Entrenar CNNs, RNNs, Transformers
- Millones de parámetros
- Requiere GPUs

## Consejos Prácticos

### 1. Normalizar Features
```
x_norm = (x - μ) / σ
```
- Hace que la optimización sea más rápida
- Evita que unas features dominen

### 2. Inicialización
- No inicializar todos a cero
- Xavier/He initialization para redes neuronales

### 3. Monitorear Pérdida
- Graficar J(θ) vs iteraciones
- Debe disminuir consistentemente

### 4. Batch Size
- Más grande → más estable, más lento
- Más pequeño → más ruidoso, más rápido
- Típico: 32, 64, 128, 256

## Visualización de Convergencia

```
Loss
  ↑
  |╲
  | ╲___
  |     ╲___
  |         ╲___
  |             ────────
  └────────────────────→ Iterations
```

**Buena convergencia**: Disminución suave hacia un valor estable.

## Conclusión

Gradient Descent es:
- 🎯 El algoritmo de optimización fundamental en ML
- 🚀 La base de cómo las redes neuronales aprenden
- ⚙️ Simple en concepto, poderoso en práctica

**Claves del éxito**:
- Elegir buen learning rate
- Usar variante apropiada (SGD, Adam, etc.)
- Normalizar datos
- Monitorear convergencia

## Juegos Relacionados

🎮 [Gradient Descent Visualizer](/game/gradient-descent) - Visualiza el descenso en superficies 3D

---

*Siguiente: [Redes Neuronales](/wiki/redes-neuronales)*
