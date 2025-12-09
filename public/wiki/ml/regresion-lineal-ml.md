# Regresión Lineal en Machine Learning

## Introducción

La **regresión lineal** es uno de los algoritmos fundamentales en Machine Learning para predecir valores continuos. A pesar de su simplicidad, sigue siendo ampliamente utilizada debido a su interpretabilidad, eficiencia computacional y efectividad en muchos problemas del mundo real. Es el punto de partida ideal para entender algoritmos de ML más complejos.

## Conceptos Fundamentales

### ¿Qué es Regresión Lineal?

Modelar la relación entre una o más variables independientes (X) y una variable dependiente continua (Y) mediante una función lineal.

**Ecuación Simple:**
```
y = β₀ + β₁x + ε
```

Donde:
- **y:** Variable dependiente (target)
- **x:** Variable independiente (feature)
- **β₀:** Intercepto (bias)
- **β₁:** Pendiente (peso)
- **ε:** Error aleatorio

**Regresión Múltiple:**
```
y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
```

### Objetivo

Encontrar los valores de β que minimizan el error entre predicciones y valores reales.

## Función de Costo

### Mean Squared Error (MSE)

```
MSE = (1/n) Σ(yi - ŷi)²
```

Donde:
- **yi:** Valor real
- **ŷi:** Valor predicho
- **n:** Número de observaciones

**Interpretación:** Promedio de los errores al cuadrado.

### Root Mean Squared Error (RMSE)

```
RMSE = √MSE
```

**Ventaja:** Mismas unidades que la variable objetivo.

### Mean Absolute Error (MAE)

```
MAE = (1/n) Σ|yi - ŷi|
```

**Ventaja:** Menos sensible a outliers que MSE.

## Métodos de Solución

### 1. Ecuación Normal (Closed-Form)

Solución analítica directa:

```
β = (XᵀX)⁻¹Xᵀy
```

**Ventajas:**
- Solución exacta
- No requiere iteraciones
- No hay hiperparámetros

**Desventajas:**
- Costoso computacionalmente para n grande
- Requiere invertir matriz (puede ser inestable)
- No escalable

### 2. Gradient Descent

Método iterativo de optimización:

```
β := β - α ∇J(β)
```

Donde:
- **α:** Learning rate (tasa de aprendizaje)
- **∇J(β):** Gradiente de la función de costo

**Proceso:**
1. Inicializar β aleatoriamente
2. Calcular predicciones
3. Calcular gradiente
4. Actualizar β
5. Repetir hasta convergencia

**Ventajas:**
- Escalable a grandes datasets
- Funciona cuando matriz no es invertible
- Base para algoritmos más complejos

**Variantes:**
- **Batch:** Usa todos los datos
- **Stochastic (SGD):** Un ejemplo a la vez
- **Mini-Batch:** Lotes pequeños

## Supuestos de Regresión Lineal

### 1. Linealidad

La relación entre X y Y es lineal.

**Verificación:** Scatter plot de X vs Y
**Solución:** Transformaciones (log, polinomial)

### 2. Independencia

Las observaciones son independientes.

**Verificación:** Durbin-Watson test
**Problema:** Datos de series temporales

### 3. Homocedasticidad

Varianza constante de errores.

**Verificación:** Plot residuos vs predichos
**Solución:** Transformaciones, Weighted Least Squares

### 4. Normalidad de Errores

Los residuos siguen distribución normal.

**Verificación:** Q-Q plot, test de normalidad
**Importancia:** Crítico para intervalos de confianza

### 5. No Multicolinealidad

Features no están altamente correlacionadas.

**Verificación:** VIF (Variance Inflation Factor)
**Solución:** Eliminar features, PCA, regularización

## Métricas de Evaluación

### R² (Coeficiente de Determinación)

```
R² = 1 - (SSR/SST)
```

Donde:
- **SSR:** Suma de cuadrados de residuos
- **SST:** Suma total de cuadrados

**Interpretación:**
- R² = 0.8 → 80% de varianza explicada
- R² = 0 → Modelo no mejor que la media
- R² < 0 → Modelo peor que la media

**Limitación:** Siempre aumenta al agregar features.

### R² Ajustado

Penaliza por número de features:

```
R²_adj = 1 - [(1-R²)(n-1)/(n-p-1)]
```

Donde:
- **n:** Número de observaciones
- **p:** Número de features

### Gráficos de Diagnóstico

**1. Residuos vs Predichos:**
- Patrón aleatorio → Buen ajuste
- Patrón sistemático → Problemas

**2. Q-Q Plot:**
- Puntos en línea → Normalidad
- Desviaciones → Violación de supuesto

**3. Residuos vs Leverage:**
- Identificar puntos influyentes

**4. Scale-Location:**
- Verificar homocedasticidad

## Regularización

Técnicas para prevenir overfitting.

### Ridge Regression (L2)

Añade penalización a la magnitud de β:

```
J(β) = MSE + α Σβi²
```

**Efecto:**
- Reduce magnitud de coeficientes
- No elimina features (β ≈ 0 pero no = 0)
- Útil con multicolinealidad

### Lasso Regression (L1)

Penalización con valor absoluto:

```
J(β) = MSE + α Σ|βi|
```

**Efecto:**
- Puede poner coeficientes exactamente a 0
- Feature selection automático
- Produce modelos sparse

### Elastic Net

Combina L1 y L2:

```
J(β) = MSE + α₁ Σ|βi| + α₂ Σβi²
```

**Ventaja:** Balance entre Ridge y Lasso.

## Ejemplo Práctico

### Predicción de Precios de Casas

**Dataset:** Boston Housing

**Features:**
- CRIM: Tasa de criminalidad
- RM: Número promedio de habitaciones
- DIS: Distancia a centros de empleo
- LSTAT: % población de bajos ingresos

**Target:** MEDV (Precio mediano en $1000s)

**Proceso:**
```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Dividir datos
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Entrenar modelo
modelo = LinearRegression()
modelo.fit(X_train, y_train)

# Predecir
y_pred = modelo.predict(X_test)

# Evaluar
rmse = mean_squared_error(y_test, y_pred, squared=False)
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.2f}")
print(f"R²: {r2:.3f}")
```

**Resultados:**
- RMSE: $4,500
- R²: 0.72
- Coeficiente RM: +5.2 (más habitaciones → mayor precio)
- Coeficiente LSTAT: -3.8 (más pobreza → menor precio)

## Extensiones de Regresión Lineal

### Regresión Polinomial

Añadir términos de mayor grado:

```
y = β₀ + β₁x + β₂x² + β₃x³ + ...
```

**Uso:** Capturar relaciones no lineales
**Cuidado:** Overfitting con grados altos

### Interacciones

Incluir productos de features:

```
y = β₀ + β₁x₁ + β₂x₂ + β₃(x₁·x₂)
```

**Ejemplo:** Efecto de publicidad depende de precio

### Regresión Logística

Para clasificación binaria (extensión de regresión lineal con función sigmoide).

## Ventajas de Regresión Lineal

✅ **Simplicidad:** Fácil de entender e implementar
✅ **Interpretabilidad:** Coeficientes tienen significado claro
✅ **Eficiencia:** Rápido de entrenar y predecir
✅ **Baseline:** Excelente punto de partida
✅ **Estadística:** Intervalos de confianza, p-values

## Limitaciones

❌ **Supuestos restrictivos:** Linealidad, normalidad, etc.
❌ **No captura no-linealidad:** Sin transformaciones
❌ **Sensible a outliers:** Especialmente con MSE
❌ **Multicolinealidad:** Coeficientes inestables
❌ **Overfitting:** Con muchas features

## Cuándo Usar Regresión Lineal

✅ **Relación aproximadamente lineal**
✅ **Interpretabilidad es importante**
✅ **Baseline rápido**
✅ **Dataset pequeño a mediano**
✅ **Features no correlacionadas**

## Alternativas

**Cuando regresión lineal no es suficiente:**

- **Árboles de Decisión:** No linealidad, no supuestos
- **Random Forest:** Múltiples árboles, robusto
- **Gradient Boosting:** XGBoost, LightGBM, alta precisión
- **Redes Neuronales:** Patrones complejos
- **SVR:** Support Vector Regression para no linealidad
- **GAM:** Generalized Additive Models

## Implementación en Diferentes Lenguajes

### Python (Scikit-learn)
```python
from sklearn.linear_model import LinearRegression, Ridge, Lasso

# Lineal simple
modelo = LinearRegression()
modelo.fit(X_train, y_train)

# Ridge
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Lasso
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)
```

### R
```R
# Regresión simple
modelo <- lm(y ~ x1 + x2 + x3, data=df)
summary(modelo)

# Ridge
library(glmnet)
ridge <- glmnet(X, y, alpha=0)

# Lasso
lasso <- glmnet(X, y, alpha=1)
```

## Mejores Prácticas

1. **Explorar datos:** Visualizar relaciones
2. **Feature engineering:** Transformaciones, interacciones
3. **Escalar features:** Especialmente para regularización
4. **Validar supuestos:** Gráficos de diagnóstico
5. **Cross-validation:** Evaluar generalización
6. **Regularización:** Prevenir overfitting
7. **Interpretar resultados:** No solo métricas

## Juegos Relacionados

🎮 [Regresión Lineal Builder](/game/linear-regression) - Ajusta líneas de regresión interactivamente

🎮 [Detector de Correlación](/game/correlation-detector) - Visualiza relaciones lineales

## Recursos Adicionales

- Statsmodels (Python): Inferencia estadística detallada
- Ordinary Least Squares (OLS): Fundamentos matemáticos
- Generalized Linear Models (GLM): Extensión para otras distribuciones
- Bayesian Linear Regression: Enfoque probabilístico
- Online Learning: Actualización incremental

---

*Anterior: [Tipos de Aprendizaje](/wiki/tipos-aprendizaje) | Siguiente: [Árboles de Decisión](/wiki/arboles-decision)*
