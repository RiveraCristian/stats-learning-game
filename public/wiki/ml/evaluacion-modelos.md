# Evaluación de Modelos de Machine Learning

## Introducción

La **evaluación de modelos** es fundamental para determinar si un modelo de Machine Learning es efectivo y generaliza bien a datos nuevos. Una evaluación apropiada va más allá de la simple precisión, considerando múltiples métricas, validación cruzada y análisis de errores. Elegir las métricas correctas es crítico para el éxito del proyecto.

## Métricas de Clasificación

### Matriz de Confusión

Base para muchas métricas:

```
                Predicho Positivo  Predicho Negativo
Real Positivo       TP                  FN
Real Negativo       FP                  TN
```

- **TP (True Positive):** Correctamente clasificados como positivos
- **TN (True Negative):** Correctamente clasificados como negativos
- **FP (False Positive):** Error Tipo I
- **FN (False Negative):** Error Tipo II

### Accuracy (Exactitud)

```
Accuracy = (TP + TN) / (TP + TN + FP + FN)
```

**Cuándo usar:** Clases balanceadas

**Limitación:** Engañosa con clases desbalanceadas

**Ejemplo:** 95% negativos → predecir siempre negativo da 95% accuracy

### Precision (Precisión)

```
Precision = TP / (TP + FP)
```

**Interpretación:** De los predichos como positivos, ¿cuántos son realmente positivos?

**Uso:** Cuando false positives son costosos

**Ejemplo:** Detección de spam (no quieres marcar emails legítimos)

### Recall (Sensibilidad/Sensitivity)

```
Recall = TP / (TP + FN)
```

**Interpretación:** De los realmente positivos, ¿cuántos detectamos?

**Uso:** Cuando false negatives son costosos

**Ejemplo:** Diagnóstico médico (no quieres perder casos positivos)

### F1-Score

Média armónica de Precision y Recall:

```
F1 = 2 × (Precision × Recall) / (Precision + Recall)
```

**Uso:** Balance entre Precision y Recall

**Variantes:**
- **F0.5:** Favorece Precision
- **F2:** Favorece Recall

### Specificity

```
Specificity = TN / (TN + FP)
```

**Interpretación:** De los negativos reales, ¿cuántos clasificamos correctamente?

### ROC Curve (Receiver Operating Characteristic)

Gráfico de True Positive Rate vs False Positive Rate en diferentes umbrales.

```
TPR = Recall = TP / (TP + FN)
FPR = FP / (FP + TN)
```

**AUC (Area Under Curve):**
- AUC = 1.0: Clasificador perfecto
- AUC = 0.5: Aleatorio
- AUC < 0.5: Peor que aleatorio

**Uso:** Comparar modelos, elegir threshold

### Precision-Recall Curve

Alternativa a ROC para clases desbalanceadas.

**Ventaja:** Más informativa cuando clase positiva es rara.

### Cohen's Kappa

Acuerdo considerando probabilidad de acuerdo aleatorio:

```
κ = (po - pe) / (1 - pe)
```

**Interpretación:**
- κ = 1: Acuerdo perfecto
- κ = 0: Acuerdo aleatorio
- κ < 0: Peor que aleatorio

### Matthews Correlation Coefficient (MCC)

```
MCC = (TP×TN - FP×FN) / √((TP+FP)(TP+FN)(TN+FP)(TN+FN))
```

**Rango:** -1 a +1
**Ventaja:** Considera las 4 categorías de confusión

## Métricas de Regresión

### Mean Absolute Error (MAE)

```
MAE = (1/n) Σ|yi - ŷi|
```

**Ventajas:**
- Fácil de interpretar
- Mismas unidades que variable objetivo
- Robusto a outliers

### Mean Squared Error (MSE)

```
MSE = (1/n) Σ(yi - ŷi)²
```

**Ventajas:**
- Penaliza errores grandes
- Diferenciable

**Desventaja:**
- Sensible a outliers
- Unidades al cuadrado

### Root Mean Squared Error (RMSE)

```
RMSE = √MSE
```

**Ventaja:** Mismas unidades que objetivo

### Mean Absolute Percentage Error (MAPE)

```
MAPE = (100/n) Σ|yi - ŷi| / |yi|
```

**Ventaja:** Escala relativa (%)
**Desventaja:** Indefinido si yi = 0

### R² (Coeficiente de Determinación)

```
R² = 1 - (SSres / SStot)
```

**Interpretación:**
- R² = 1: Predicción perfecta
- R² = 0: Modelo tan bueno como la media
- R² < 0: Peor que la media

### Adjusted R²

Penaliza por número de features:

```
R²_adj = 1 - [(1-R²)(n-1) / (n-p-1)]
```

## Validación de Modelos

### Train-Test Split

División simple:
- 70-80% entrenamiento
- 20-30% prueba

**Ventaja:** Simple y rápido
**Desventaja:** Dependiente de split específico

### Cross-Validation (K-Fold)

1. Dividir datos en K folds
2. Entrenar en K-1 folds
3. Evaluar en fold restante
4. Repetir K veces
5. Promediar resultados

**K típico:** 5 o 10

**Ventaja:** Usa todos los datos, más robusto

### Stratified K-Fold

Mantiene proporción de clases en cada fold.

**Uso:** Datasets desbalanceados

### Leave-One-Out Cross-Validation (LOOCV)

K-Fold donde K = n (número de observaciones)

**Uso:** Datasets muy pequeños
**Desventaja:** Computacionalmente costoso

### Time Series Cross-Validation

Para datos temporales, mantener orden:
- Entrenar: t1 a tn
- Validar: tn+1 a tn+m
- Expandir ventana progresivamente

## Diagnóstico de Modelos

### Bias vs Variance

**High Bias (Underfitting):**
- Train error alto
- Test error alto
- Gap pequeño

**High Variance (Overfitting):**
- Train error bajo
- Test error alto
- Gap grande

### Learning Curves

Gráfico de error vs tamaño de training set.

**Diagnóstico:**
- Convergen en valor alto → High bias
- Gap grande → High variance
- Convergen en valor bajo → Buen fit

### Residual Analysis

Para regresión:
- Plot residuos vs predicciones
- Patrón aleatorio → Buen modelo
- Patrón sistemático → Problemas

## Selección de Modelo

### Occam's Razor

Entre modelos con performance similar, elegir el más simple.

### AIC (Akaike Information Criterion)

```
AIC = 2k - 2ln(L)
```

k = número de parámetros
L = likelihood

**Menor AIC es mejor**

### BIC (Bayesian Information Criterion)

```
BIC = k ln(n) - 2ln(L)
```

**Penaliza más la complejidad que AIC**

## Comparación de Modelos

### Statistical Tests

**Paired t-test:**
Comparar dos modelos en mismo dataset.

**McNemar's Test:**
Para clasificadores en same test set.

**Friedman Test:**
Comparar múltiples modelos en múltiples datasets.

### Confidence Intervals

Reportar métrica ± intervalo de confianza.

## Mejores Prácticas

1. **Separar Test Set:** No tocarlo hasta el final
2. **Múltiples Métricas:** No solo accuracy
3. **Cross-Validation:** Para modelos finales
4. **Baseline:** Comparar con modelo simple
5. **Reproducibilidad:** Fijar random seeds
6. **Análisis de Errores:** Entender qué falla
7. **Domain Knowledge:** Considerar costo de errores

## Errores Comunes

❌ **Data Leakage:** Información de test en train
❌ **Look-ahead Bias:** Usar datos futuros
❌ **Selection Bias:** Test set no representativo
❌ **Overfitting to Validation:** Tunear demasiado
❌ **Ignorar Contexto:** Usar métrica incorrecta

## Herramientas

### Python
```python
from sklearn.metrics import *

# Clasificación
accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)
cm = confusion_matrix(y_true, y_pred)
roc_auc = roc_auc_score(y_true, y_proba)

# Regresión
mae = mean_absolute_error(y_true, y_pred)
mse = mean_squared_error(y_true, y_pred)
rmse = mean_squared_error(y_true, y_pred, squared=False)
r2 = r2_score(y_true, y_pred)

# Cross-validation
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
```

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Observa métricas de clasificación

🎮 [Overfitting Game](/game/overfitting-game) - Explora train vs test error

🎮 [Regresión Lineal Builder](/game/linear-regression) - Visualiza R² y métricas de regresión

## Recursos Adicionales

- Scikit-learn Metrics Guide
- Model Evaluation, Model Selection, and Algorithm Selection (Sebastian Raschka)
- Cross-validation: evaluating estimator performance
- Imbalanced-learn: Métricas para datos desbalanceados

---

*Anterior: [Redes Neuronales](/wiki/redes-neuronales) | Siguiente: [Cross-Validation](/wiki/cross-validation)*
