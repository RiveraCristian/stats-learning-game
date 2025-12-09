# Cross-Validation (Validación Cruzada)

## Introducción

**Cross-validation** es una técnica estadística para evaluar y comparar modelos de Machine Learning dividiendo los datos en múltiples subconjuntos. En lugar de una simple división train-test, cross-validation usa diferentes particiones para obtener una estimación más robusta y menos sesgada del desempeño del modelo. Es esencial para evitar overfitting y seleccionar modelos óptimos.

## ¿Por Qué Cross-Validation?

### Problemas con Simple Train-Test Split

❌ **Dependiente del split específico:** Resultados varían según cómo se dividen los datos
❌ **Desperdicio de datos:** Test set no se usa para entrenamiento
❌ **Varianza alta:** Especialmente con datasets pequeños
❌ **Puede ser engañoso:** Un split "afortunado" da resultados optimistas

### Beneficios de Cross-Validation

✅ **Estimación más robusta:** Promedia múltiples evaluaciones
✅ **Uso eficiente de datos:** Todos los datos se usan para entrenar y evaluar
✅ **Detecta overfitting:** Identifica modelos que no generalizan
✅ **Selección de modelos:** Compara modelos objetivamente
✅ **Tuning de hiperparámetros:** Encuentra configuración óptima

## K-Fold Cross-Validation

### Proceso

1. **Dividir datos en K folds (particiones) iguales**
2. **Para cada fold:**
   - Usar ese fold como validación
   - Entrenar con los K-1 folds restantes
   - Evaluar en fold de validación
3. **Calcular métrica promedio** de las K iteraciones

### Ejemplo con K=5

```
Fold 1: [Test][Train][Train][Train][Train]
Fold 2: [Train][Test][Train][Train][Train]
Fold 3: [Train][Train][Test][Train][Train]
Fold 4: [Train][Train][Train][Test][Train]
Fold 5: [Train][Train][Train][Train][Test]
```

Promedio de 5 evaluaciones = estimación final

### Elección de K

**K=5:**
- Balance entre bias y variance
- Computacionalmente eficiente
- Recomendado para la mayoría de casos

**K=10:**
- Estándar en literatura
- Más tiempo de cómputo
- Menor varianza

**K grande (≈n):**
- Estimación menos sesgada
- Mayor varianza
- Muy costoso computacionalmente

## Variantes de Cross-Validation

### Stratified K-Fold

Mantiene la proporción de clases en cada fold.

**Cuándo usar:**
- Clasificación con clases desbalanceadas
- Asegurar representatividad en cada fold

**Ejemplo:**
Si dataset tiene 80% clase A y 20% clase B, cada fold tendrá la misma proporción.

```python
from sklearn.model_selection import StratifiedKFold

skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
for train_idx, val_idx in skf.split(X, y):
    X_train, X_val = X[train_idx], X[val_idx]
    y_train, y_val = y[train_idx], y[val_idx]
```

### Leave-One-Out Cross-Validation (LOOCV)

K = n (número total de observaciones)

**Proceso:**
- Cada observación es un fold
- Entrenar con n-1 observaciones
- Evaluar en 1 observación
- Repetir n veces

**Ventajas:**
✅ Estimación casi insesgada
✅ Determinístico (no aleatorio)
✅ Útil para datasets muy pequeños

**Desventajas:**
❌ Muy costoso (n entrenamientos)
❌ Alta varianza en estimación
❌ Puede sobreestimar performance

**Cuándo usar:**
- n < 100 y se necesita máxima precisión
- Tiempo de entrenamiento rápido

### Leave-P-Out

Generalización de LOOCV, deja P observaciones fuera.

**Problema:** Número de combinaciones C(n,p) crece exponencialmente.

### Repeated K-Fold

Repite K-Fold múltiples veces con diferentes random splits.

```python
from sklearn.model_selection import RepeatedKFold

rkf = RepeatedKFold(n_splits=5, n_repeats=10, random_state=42)
```

**Ventaja:** Reduce varianza de estimación.

### Time Series Cross-Validation

Para datos temporales, respeta el orden cronológico.

**Métodos:**

**1. Rolling Window (Sliding):**
```
Train: [1 2 3 4 5] Test: [6]
Train: [2 3 4 5 6] Test: [7]
Train: [3 4 5 6 7] Test: [8]
```

**2. Expanding Window:**
```
Train: [1 2 3 4 5] Test: [6]
Train: [1 2 3 4 5 6] Test: [7]
Train: [1 2 3 4 5 6 7] Test: [8]
```

**Importante:** NO usar K-Fold estándar (mezcla pasado y futuro).

### Group K-Fold

Asegura que grupos relacionados no se dividan entre train y test.

**Ejemplo:**
- Múltiples mediciones del mismo paciente
- Imágenes del mismo objeto
- Transacciones del mismo usuario

```python
from sklearn.model_selection import GroupKFold

gkf = GroupKFold(n_splits=5)
for train_idx, val_idx in gkf.split(X, y, groups=patient_ids):
    ...
```

## Nested Cross-Validation

CV anidado para selección de modelos E hiperparámetros.

**Estructura:**
- **Outer Loop:** Evaluar performance del modelo
- **Inner Loop:** Seleccionar hiperparámetros

**Ejemplo:**
```python
# Outer CV: 5 folds
outer_cv = KFold(n_splits=5)

# Inner CV: 3 folds para tuning
inner_cv = KFold(n_splits=3)

# Grid Search con inner CV
grid_search = GridSearchCV(model, param_grid, cv=inner_cv)

# Evaluar con outer CV
scores = []
for train_idx, test_idx in outer_cv.split(X):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]
    
    grid_search.fit(X_train, y_train)
    score = grid_search.score(X_test, y_test)
    scores.append(score)

final_score = np.mean(scores)
```

**Ventaja:** Estimación no sesgada del performance real.

## Hold-Out vs Cross-Validation

### Hold-Out (Train-Test Split)

**Pros:**
- Rápido
- Simple
- Suficiente para datasets grandes

**Cons:**
- Alta varianza en datasets pequeños
- Desperdicia datos

**Cuándo usar:** n > 10,000 y tiempo limitado

### Cross-Validation

**Pros:**
- Estimación robusta
- Usa todos los datos
- Detecta variabilidad

**Cons:**
- Computacionalmente costoso
- Más complejo

**Cuándo usar:** n < 10,000 o selección de modelos crítica

## Aplicaciones de Cross-Validation

### 1. Evaluación de Modelos

Estimar performance real en datos no vistos.

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"Accuracy: {scores.mean():.3f} (+/- {scores.std():.3f})")
```

### 2. Selección de Modelos

Comparar diferentes algoritmos.

```python
models = {
    'Logistic': LogisticRegression(),
    'RF': RandomForestClassifier(),
    'SVM': SVC()
}

for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    print(f"{name}: {scores.mean():.3f}")
```

### 3. Tuning de Hiperparámetros

Con Grid Search o Random Search.

```python
from sklearn.model_selection import GridSearchCV

param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 20, 30]
}

grid_search = GridSearchCV(
    RandomForestClassifier(),
    param_grid,
    cv=5,
    scoring='accuracy'
)

grid_search.fit(X, y)
print(f"Best params: {grid_search.best_params_}")
print(f"Best score: {grid_search.best_score_:.3f}")
```

### 4. Feature Selection

Identificar features importantes.

```python
from sklearn.feature_selection import RFECV

selector = RFECV(estimator=model, cv=5)
selector.fit(X, y)
selected_features = X.columns[selector.support_]
```

## Consideraciones Prácticas

### Computational Cost

K-Fold con K=5 entrena modelo 5 veces.
Grid Search con 10 parámetros y CV=5 entrena 50 veces.

**Estrategias:**
- Usar submuestra para búsqueda inicial
- Paralelización (n_jobs=-1)
- Random Search en lugar de Grid Search
- Bayesian Optimization para búsqueda eficiente

### Random State

Fijar `random_state` para reproducibilidad:

```python
cv = KFold(n_splits=5, shuffle=True, random_state=42)
```

### Shuffle

Generalmente recomendado, excepto para series temporales:

```python
cv = KFold(n_splits=5, shuffle=True)  # Mezclar datos
```

## Errores Comunes

❌ **Data Leakage:** Preprocesar antes de split
```python
# INCORRECTO
scaler.fit(X)  # Usa información de test set
X_scaled = scaler.transform(X)
cross_val_score(model, X_scaled, y, cv=5)

# CORRECTO
cv_results = []
for train_idx, val_idx in cv.split(X):
    X_train, X_val = X[train_idx], X[val_idx]
    scaler.fit(X_train)  # Solo en train
    X_train_scaled = scaler.transform(X_train)
    X_val_scaled = scaler.transform(X_val)
    # Entrenar y evaluar...
```

❌ **Usar K-Fold en Series Temporales:** Mezcla pasado y futuro

❌ **Overfitting to Validation:** Tunear demasiado con mismo CV

❌ **Ignorar Grupos:** Datos relacionados en train y test

## Métricas con Cross-Validation

### Clasificación

```python
scoring = {
    'accuracy': 'accuracy',
    'precision': 'precision',
    'recall': 'recall',
    'f1': 'f1',
    'roc_auc': 'roc_auc'
}

scores = cross_validate(model, X, y, cv=5, scoring=scoring)
```

### Regresión

```python
scoring = {
    'mae': 'neg_mean_absolute_error',
    'mse': 'neg_mean_squared_error',
    'r2': 'r2'
}

scores = cross_validate(model, X, y, cv=5, scoring=scoring)
```

## Interpretación de Resultados

### Media y Desviación Estándar

```python
scores = cross_val_score(model, X, y, cv=5)
mean_score = scores.mean()
std_score = scores.std()

print(f"Score: {mean_score:.3f} ± {std_score:.3f}")
```

**Interpretación:**
- **Mean alto:** Buen desempeño promedio
- **Std bajo:** Performance consistente
- **Std alto:** Performance variable (posible problema)

### Intervalo de Confianza

```python
import scipy.stats as stats

confidence = 0.95
n = len(scores)
interval = stats.t.interval(
    confidence, 
    n-1, 
    loc=mean_score, 
    scale=stats.sem(scores)
)

print(f"95% CI: [{interval[0]:.3f}, {interval[1]:.3f}]")
```

## Juegos Relacionados

🎮 [Overfitting Game](/game/overfitting-game) - Observa importancia de validación

🎮 [Clasificador Visual](/game/visual-classifier) - Experimenta con train-test split

## Recursos Adicionales

- Scikit-learn: Cross-validation Guide
- On Over-fitting in Model Selection (Cawley & Talbot)
- Approximately Correct Cross-Validation
- Time Series Forecasting: Cross-Validation Strategies
- Nested versus non-nested cross-validation

---

*Anterior: [Evaluación de Modelos](/wiki/evaluacion-modelos)*
