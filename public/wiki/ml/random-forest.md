# Random Forest

## Introducción

**Random Forest** es un algoritmo de ensemble que combina múltiples árboles de decisión para crear un modelo más robusto y preciso. Cada árbol se entrena con una muestra aleatoria diferente de los datos y features, y las predicciones finales se obtienen por votación (clasificación) o promedio (regresión).

## Conceptos Fundamentales

### Ensemble Learning

Combinar múltiples modelos débiles para crear un modelo fuerte.

**Tipos:**
- **Bagging:** Bootstrap Aggregating
- **Boosting:** Secuencial, corrige errores
- **Stacking:** Combina diferentes tipos de modelos

Random Forest usa **Bagging**.

## Cómo Funciona Random Forest

### Proceso de Entrenamiento

1. **Bootstrap Sampling:** Crear n muestras aleatorias con reemplazo
2. **Random Feature Selection:** En cada split, considerar solo subset aleatorio de features
3. **Entrenar árboles:** Cada árbol crece sin poda
4. **Almacenar bosque:** Guardar todos los árboles

### Predicción

**Clasificación:**
```
Predicción = Moda(predicciones de todos los árboles)
```

**Regresión:**
```
Predicción = Promedio(predicciones de todos los árboles)
```

## Ventajas de Random Forest

✅ **Alta precisión:** Generalmente supera a árboles individuales
✅ **Robusto al overfitting:** Promediado reduce varianza
✅ **Feature importance:** Mide importancia de variables
✅ **Maneja datos faltantes:** Automáticamente
✅ **Paralelizable:** Árboles independientes
✅ **Versátil:** Clasificación y regresión

## Hiperparámetros Clave

**Del bosque:**
- **n_estimators:** Número de árboles (100-1000)
- **max_features:** Features por split ('sqrt', 'log2', número)
- **bootstrap:** Usar bootstrap o no
- **oob_score:** Out-of-bag evaluation

**De árboles individuales:**
- **max_depth:** Profundidad máxima
- **min_samples_split:** Mínimo para dividir
- **min_samples_leaf:** Mínimo en hojas

## Feature Importance

### Mean Decrease in Impurity

Promedio de reducción de impureza al usar feature.

### Permutation Importance

Reducción en precisión al permutar feature aleatoriamente.

## Out-of-Bag (OOB) Error

Cada árbol se prueba con datos no usados en su entrenamiento (~37%).

**Ventaja:** Estimación sin necesidad de conjunto de validación separado.

## Aplicaciones

### Clasificación
- Detección de fraude
- Diagnóstico médico
- Reconocimiento de imágenes
- Análisis de sentimientos

### Regresión
- Predicción de precios
- Demanda de productos
- Series temporales
- Valoración de propiedades

### Feature Selection
- Identificar variables importantes
- Reducir dimensionalidad

## Comparación con Otros Algoritmos

| Aspecto | Random Forest | Gradient Boosting | Redes Neuronales |
|---------|---------------|-------------------|------------------|
| Precisión | Alta | Muy Alta | Muy Alta |
| Velocidad | Rápido | Moderado | Lento |
| Interpretabilidad | Media | Media | Baja |
| Hiperparámetros | Pocos | Muchos | Muchos |
| Overfitting | Robusto | Propenso | Propenso |

## Implementación

### Python (Scikit-learn)
```python
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=2,
    max_features='sqrt',
    random_state=42
)

rf.fit(X_train, y_train)
predictions = rf.predict(X_test)

# Feature importance
importances = rf.feature_importances_
```

## Mejores Prácticas

1. **Más árboles mejor:** 100-1000 típicamente
2. **Tunear max_features:** sqrt para clasificación, n/3 para regresión
3. **Cross-validation:** Validar hiperparámetros
4. **OOB score:** Usar cuando datos son limitados
5. **Profundidad:** Controlar si hay overfitting

## Limitaciones

❌ **Menos interpretable** que árbol único
❌ **Memoria:** Almacena muchos árboles
❌ **Predicción lenta:** Múltiples árboles
❌ **No extrapolación:** Solo interpola

## Variantes

- **Extra Trees:** Splits más aleatorios, más rápido
- **Isolation Forest:** Para detección de anomalías
- **Conditional Random Forest:** Maneja correlación

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Compara decisiones de clasificadores

🎮 [Overfitting Game](/game/overfitting-game) - Observa cómo ensemble reduce overfitting

---

*Anterior: [Árboles de Decisión](/wiki/arboles-decision) | Siguiente: [Redes Neuronales](/wiki/redes-neuronales)*
