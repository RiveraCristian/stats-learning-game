# Overfitting vs Underfitting

## Introducción

**Overfitting** y **underfitting** son dos problemas fundamentales en machine learning que afectan la capacidad de un modelo para generalizar a nuevos datos. Encontrar el balance correcto es crucial para construir modelos efectivos.

## ¿Qué es Underfitting?

**Underfitting** ocurre cuando un modelo es demasiado simple para capturar los patrones subyacentes en los datos.

### Características
- **Alto bias (sesgo)**
- Bajo rendimiento en datos de entrenamiento
- Bajo rendimiento en datos de prueba
- El modelo es demasiado general

### Ejemplo Visual
Imagina intentar ajustar una línea recta a datos que siguen una curva:
```
Datos: Forma de U
Modelo: Línea recta ─────
Resultado: No captura el patrón
```

### Causas Comunes
- Modelo demasiado simple (ej: regresión lineal para datos no lineales)
- Pocas features
- Regularización excesiva
- Entrenamiento insuficiente

## ¿Qué es Overfitting?

**Overfitting** ocurre cuando un modelo aprende no solo los patrones reales sino también el ruido en los datos de entrenamiento.

### Características
- **Alta varianza**
- Excelente rendimiento en datos de entrenamiento
- Pobre rendimiento en datos de prueba
- El modelo memoriza en lugar de aprender

### Ejemplo Visual
```
Datos de entrenamiento: • • • • •
Modelo overfitted: ~~~∿∿∿~~~
Modelo correcto: ────────
```

El modelo overfitted pasa por cada punto exactamente, incluyendo el ruido.

### Causas Comunes
- Modelo demasiado complejo
- Demasiadas features
- Poco datos de entrenamiento
- Entrenamiento excesivo
- Sin regularización

## Bias-Variance Tradeoff

El dilema fundamental en machine learning:

```
Error Total = Bias² + Varianza + Ruido Irreducible
```

### Bias (Sesgo)
- Error por simplificaciones en el modelo
- Modelos simples → Alto bias
- **Underfitting** está asociado con alto bias

### Varianza
- Error por sensibilidad a fluctuaciones en datos
- Modelos complejos → Alta varianza
- **Overfitting** está asociado con alta varianza

### El Tradeoff
```
Modelo Simple → Alto Bias, Baja Varianza → Underfitting
Modelo Complejo → Bajo Bias, Alta Varianza → Overfitting
Modelo Óptimo → Balance entre Bias y Varianza
```

## Curvas de Aprendizaje

Gráficos que muestran el rendimiento del modelo vs tamaño de datos o complejidad.

### Curva Típica de Underfitting
```
Error
  ↑
  |  Train ────────
  |  Test  ────────
  |  (ambos altos, cercanos)
  └────────────→ Tamaño de datos
```

### Curva Típica de Overfitting
```
Error
  ↑
  |  Test  ────────
  |  Train _____ (muy bajo)
  |  (gran brecha)
  └────────────→ Tamaño de datos
```

### Curva Ideal
```
Error
  ↑
  |  Test  ──────
  |  Train ────── (cercanos, ambos bajos)
  |
  └────────────→ Tamaño de datos
```

## Detección

### Señales de Underfitting
- ✗ Accuracy bajo en entrenamiento (<80%)
- ✗ Accuracy bajo en validación
- ✗ Poca diferencia entre train y test
- ✗ Pérdida alta que no disminuye

### Señales de Overfitting
- ✗ Accuracy muy alto en entrenamiento (>95%)
- ✗ Accuracy bajo en validación
- ✗ **Gran brecha** entre train y test
- ✗ Pérdida de entrenamiento disminuye pero validación aumenta

### Modelo Bien Ajustado
- ✓ Buen accuracy en entrenamiento (~85-90%)
- ✓ Accuracy similar en validación
- ✓ Pequeña brecha entre train y test
- ✓ Ambas pérdidas disminuyen juntas

## Soluciones para Underfitting

### 1. Aumentar Complejidad del Modelo
- Usar modelos más complejos (ej: de lineal a polinomial)
- Agregar más capas (redes neuronales)
- Aumentar número de neuronas

### 2. Agregar Features
- Feature engineering
- Interacciones entre variables
- Transformaciones no lineales

### 3. Reducir Regularización
- Disminuir λ en Ridge/Lasso
- Reducir dropout
- Menos restricciones

### 4. Entrenar Más Tiempo
- Más épocas
- Mejor optimización

## Soluciones para Overfitting

### 1. Más Datos de Entrenamiento
La solución más efectiva:
- Recolectar más datos
- Data augmentation (imágenes, texto)
- Synthetic data generation

### 2. Regularización

**L1 (Lasso)**:
```
Loss = MSE + λΣ|w|
```
- Fuerza algunos pesos a cero
- Feature selection automática

**L2 (Ridge)**:
```
Loss = MSE + λΣw²
```
- Penaliza pesos grandes
- Mantiene todas las features

**Elastic Net**:
Combina L1 y L2

### 3. Dropout (Redes Neuronales)
- Desactiva aleatoriamente neuronas durante entrenamiento
- Típicamente 20-50%
- Previene co-adaptación de neuronas

### 4. Early Stopping
- Monitorear pérdida de validación
- Detener cuando empieza a aumentar
- Guardar el mejor modelo

### 5. Reducir Complejidad
- Menos features (feature selection)
- Modelos más simples
- Menos capas/neuronas

### 6. Cross-Validation
- K-fold cross-validation
- Evaluar generalización
- Detectar overfitting temprano

### 7. Ensemble Methods
- Bagging (Random Forest)
- Boosting (XGBoost, AdaBoost)
- Stacking

## Ejemplo Práctico: Regresión Polinomial

### Datos
Relación cuadrática: y = x² + ruido

### Modelos

**Underfitting** (grado 1):
```python
y = β₀ + β₁x
# R² train = 0.65, R² test = 0.63
```

**Bien ajustado** (grado 2):
```python
y = β₀ + β₁x + β₂x²
# R² train = 0.95, R² test = 0.93
```

**Overfitting** (grado 10):
```python
y = β₀ + β₁x + β₂x² + ... + β₁₀x¹⁰
# R² train = 0.99, R² test = 0.45
```

## Validación Cruzada

Técnica esencial para detectar overfitting:

### K-Fold Cross-Validation
1. Dividir datos en K partes
2. Entrenar en K-1 partes
3. Validar en la parte restante
4. Repetir K veces
5. Promediar resultados

**Ventaja**: Usa todos los datos para entrenamiento y validación.

## Regularización en Práctica

### Ejemplo con Ridge Regression

```python
# Sin regularización (λ = 0)
# Puede overfittear

# Regularización moderada (λ = 1)
# Balance óptimo

# Regularización excesiva (λ = 1000)
# Underfitting
```

### Seleccionar λ
- Grid search
- Cross-validation
- Curva de validación

## Complejidad del Modelo

### Navaja de Occam
"Entre modelos con rendimiento similar, prefiere el más simple"

**Razones**:
- Más interpretable
- Más rápido
- Menos propenso a overfitting
- Más robusto

## Métricas de Evaluación

### Para Clasificación
- **Accuracy**: Correctos / Total
- **Precision**: VP / (VP + FP)
- **Recall**: VP / (VP + FN)
- **F1-Score**: Media armónica de precision y recall

### Para Regresión
- **MSE**: Mean Squared Error
- **RMSE**: Root MSE
- **MAE**: Mean Absolute Error
- **R²**: Coeficiente de determinación

## Estrategias Generales

### Pipeline Recomendado
1. **Baseline simple** (detectar underfitting)
2. **Aumentar complejidad gradualmente**
3. **Monitorear train vs test**
4. **Aplicar regularización si es necesario**
5. **Validar con cross-validation**
6. **Evaluar en test set final**

### Reglas Prácticas
- Train accuracy > 90%, Test << Train → **Overfitting**
- Train accuracy < 80%, Test ≈ Train → **Underfitting**
- Train ≈ Test, ambos ~85-90% → **Bien ajustado**

## Conclusión

**Balance es la clave**:
- ⚖️ Ni muy simple (underfitting)
- ⚖️ Ni muy complejo (overfitting)
- ⚖️ Justo en el punto óptimo

**Recuerda**:
- Más datos casi siempre ayuda
- Regularización es tu amiga
- Siempre valida en datos no vistos
- La simplicidad tiene valor

## Juegos Relacionados

🎮 [Overfitting Game](/game/overfitting-game) - Encuentra el balance perfecto entre underfitting y overfitting

---

*Siguiente: [Evaluación de Modelos](/wiki/evaluacion-modelos)*
