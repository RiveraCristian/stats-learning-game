# Árboles de Decisión

## Introducción

Los **árboles de decisión** son algoritmos de Machine Learning versátiles que pueden usarse tanto para clasificación como para regresión. Funcionan dividiendo iterativamente el espacio de features en regiones, tomando decisiones basadas en condiciones simples en cada nodo. Su estructura similar a un diagrama de flujo los hace altamente interpretables y fáciles de visualizar.

## Conceptos Fundamentales

### Estructura del Árbol

**Componentes:**
- **Nodo Raíz:** Inicio del árbol con todos los datos
- **Nodos Internos:** Decisiones basadas en features
- **Hojas (Nodos Terminales):** Predicciones finales
- **Ramas:** Conexiones representando decisiones

### ¿Cómo Funciona?

1. Seleccionar el mejor feature para dividir
2. Crear nodos hijos según la división
3. Repetir recursivamente para cada nodo hijo
4. Detener cuando se cumple criterio de parada

## Criterios de División

### Para Clasificación

**Gini Impurity:**
```
Gini = 1 - Σ(pi)²
```
Mide la probabilidad de clasificar incorrectamente.

**Entropy (Information Gain):**
```
Entropy = -Σ pi log₂(pi)
```
Mide el desorden o incertidumbre.

### Para Regresión

**Mean Squared Error:**
```
MSE = (1/n) Σ(yi - ŷ)²
```

**Mean Absolute Error:**
```
MAE = (1/n) Σ|yi - ŷ|
```

## Ventajas

✅ Fácil de entender e interpretar
✅ Visualización intuitiva
✅ No requiere escalado de features
✅ Maneja features numéricos y categóricos
✅ Captura interacciones no lineales
✅ Feature importance automático

## Desventajas

❌ Propenso a overfitting
❌ Inestable (pequeños cambios en datos)
❌ Sesgado hacia features con muchos valores
❌ No captura relaciones lineales eficientemente
❌ Decisiones de frontera solo ortogonales

## Hiperparámetros

- **max_depth:** Profundidad máxima
- **min_samples_split:** Mínimo de muestras para dividir
- **min_samples_leaf:** Mínimo en hojas
- **max_features:** Features a considerar
- **criterion:** gini, entropy, mse

## Aplicaciones

- Diagnóstico médico
- Aprobación de créditos
- Detección de fraude
- Marketing (segmentación)
- Precios dinámicos

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Visualiza fronteras de decisión

---

*Siguiente: [Random Forest](/wiki/random-forest)*
