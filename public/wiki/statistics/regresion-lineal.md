# Regresión Lineal

## Introducción

La **regresión lineal** es una de las técnicas estadísticas más fundamentales y ampliamente utilizadas. Modela la relación entre una variable dependiente (Y) y una o más variables independientes (X) mediante una línea recta.

## Regresión Lineal Simple

Modelo con una sola variable independiente:

```
Y = β₀ + β₁X + ε
```

Donde:
- **Y**: Variable dependiente (respuesta)
- **X**: Variable independiente (predictora)
- **β₀**: Intercepto (valor de Y cuando X = 0)
- **β₁**: Pendiente (cambio en Y por unidad de X)
- **ε**: Error aleatorio

## Ecuación de la Recta

La línea de mejor ajuste se expresa como:

```
Ŷ = b₀ + b₁X
```

Donde:
- **Ŷ**: Valor predicho de Y
- **b₀**: Estimación del intercepto
- **b₁**: Estimación de la pendiente

## Método de Mínimos Cuadrados

El método más común para encontrar la mejor línea.

### Objetivo
Minimizar la suma de los cuadrados de los residuos:

```
SSE = Σ(yi - ŷi)²
```

Donde:
- **yi**: Valor observado
- **ŷi**: Valor predicho
- **Residuo**: ei = yi - ŷi

### Fórmulas para los Coeficientes

**Pendiente**:
```
b₁ = Σ[(xi - x̄)(yi - ȳ)] / Σ(xi - x̄)²
```

**Intercepto**:
```
b₀ = ȳ - b₁x̄
```

## Ejemplo Práctico

**Problema**: Predecir ventas basándose en gastos en publicidad.

**Datos**:
| Publicidad (X) | Ventas (Y) |
|----------------|------------|
| 1              | 2          |
| 2              | 3          |
| 3              | 5          |
| 4              | 4          |
| 5              | 6          |

**Cálculos**:
```
x̄ = 3, ȳ = 4

b₁ = [(1-3)(2-4) + (2-3)(3-4) + ... + (5-3)(6-4)] / [(1-3)² + (2-3)² + ... + (5-3)²]
b₁ = 10 / 10 = 1

b₀ = 4 - 1(3) = 1
```

**Modelo**:
```
Ventas = 1 + 1 × Publicidad
```

**Predicción**: Si gastamos 6 en publicidad:
```
Ŷ = 1 + 1(6) = 7 unidades vendidas
```

## Coeficiente de Determinación (R²)

Mide qué tan bien el modelo explica la variabilidad en Y.

```
R² = 1 - (SSE / SST)
```

Donde:
- **SSE**: Suma de cuadrados de errores
- **SST**: Suma total de cuadrados

### Interpretación de R²

- **R² = 0**: El modelo no explica nada
- **R² = 0.5**: El modelo explica 50% de la variabilidad
- **R² = 1**: El modelo explica perfectamente los datos

### Ejemplo
Si R² = 0.75:
- 75% de la variación en ventas se explica por publicidad
- 25% se debe a otros factores

## R² Ajustado

Para regresión múltiple, penaliza por agregar variables:

```
R²_adj = 1 - [(1 - R²)(n - 1) / (n - k - 1)]
```

Donde:
- **n**: Número de observaciones
- **k**: Número de predictores

## Supuestos del Modelo

### 1. Linealidad
La relación entre X e Y es lineal.

**Verificación**: Scatter plot de X vs Y

### 2. Independencia
Las observaciones son independientes entre sí.

**Verificación**: Conocimiento del diseño del estudio

### 3. Homoscedasticidad
La varianza de los errores es constante.

**Verificación**: Plot de residuos vs valores ajustados

### 4. Normalidad de Errores
Los residuos siguen una distribución normal.

**Verificación**: Q-Q plot de residuos

### 5. No Multicolinealidad
(Solo para regresión múltiple) Las variables independientes no están altamente correlacionadas.

**Verificación**: VIF (Variance Inflation Factor)

## Análisis de Residuos

Los **residuos** son la diferencia entre valores observados y predichos:

```
e = y - ŷ
```

### Gráficos Importantes

**1. Residuos vs Valores Ajustados**
- Patrón aleatorio → Buen modelo
- Patrón en forma de embudo → Heteroscedasticidad
- Patrón curvo → No linealidad

**2. Q-Q Plot**
- Puntos en línea diagonal → Normalidad
- Desviaciones → Violación de normalidad

**3. Residuos vs Orden**
- Detecta autocorrelación en series de tiempo

## Regresión Lineal Múltiple

Modelo con múltiples predictores:

```
Y = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ + ε
```

### Ejemplo
Predecir precio de casa:

```
Precio = β₀ + β₁(Área) + β₂(Habitaciones) + β₃(Edad) + ε
```

### Interpretación de Coeficientes
**β₁**: Cambio en Y cuando X₁ aumenta 1 unidad, **manteniendo constantes** las demás variables.

## Inferencia en Regresión

### Prueba de Significancia de β₁

**Hipótesis**:
- H₀: β₁ = 0 (X no tiene efecto en Y)
- H₁: β₁ ≠ 0 (X tiene efecto en Y)

**Estadístico t**:
```
t = b₁ / SE(b₁)
```

Si |t| es grande (p < 0.05), rechazamos H₀.

### Intervalo de Confianza para β₁

```
IC₉₅% = b₁ ± t* × SE(b₁)
```

## Predicción

### Predicción Puntual
Usar la ecuación directamente:
```
Ŷ = b₀ + b₁X
```

### Intervalo de Confianza para la Media
Rango donde esperamos que esté la **media** de Y para un valor dado de X.

### Intervalo de Predicción
Rango donde esperamos que esté un **valor individual** de Y.

**Nota**: El intervalo de predicción es más ancho que el de confianza.

## Limitaciones

### 1. Extrapolación
No predecir fuera del rango de datos observados.

**Ejemplo**: Si tenemos datos de publicidad entre $1-10K, no predecir para $100K.

### 2. Correlación ≠ Causalidad
La regresión muestra asociación, no necesariamente causa-efecto.

### 3. Outliers
Puntos extremos pueden distorsionar la línea.

**Solución**: Identificar y evaluar outliers

### 4. Overfitting
Modelo muy complejo que se ajusta al ruido.

**Solución**: Validación cruzada, regularización

## Transformaciones

Cuando los supuestos no se cumplen:

### Transformación Logarítmica
```
log(Y) = β₀ + β₁X
```

Útil para:
- Relaciones exponenciales
- Estabilizar varianza

### Transformación Polinomial
```
Y = β₀ + β₁X + β₂X² + β₃X³
```

Captura relaciones no lineales.

## Regularización

Técnicas para prevenir overfitting:

### Ridge Regression (L2)
Penaliza coeficientes grandes:
```
Minimizar: SSE + λΣβ²
```

### Lasso Regression (L1)
Puede reducir coeficientes a cero:
```
Minimizar: SSE + λΣ|β|
```

### Elastic Net
Combina Ridge y Lasso.

## Aplicaciones

### En Negocios
- Predicción de ventas
- Análisis de precios
- Forecasting financiero

### En Ciencias Sociales
- Estudios de salarios
- Análisis educativo
- Investigación psicológica

### En Machine Learning
- Baseline model
- Feature importance
- Interpretabilidad

## Evaluación del Modelo

### Métricas Comunes

**MSE (Mean Squared Error)**:
```
MSE = Σ(yi - ŷi)² / n
```

**RMSE (Root Mean Squared Error)**:
```
RMSE = √MSE
```

**MAE (Mean Absolute Error)**:
```
MAE = Σ|yi - ŷi| / n
```

## Validación

### Train-Test Split
- Entrenar en 70-80% de datos
- Evaluar en 20-30% restante

### Cross-Validation
- K-fold cross-validation
- Leave-one-out CV

## Conclusión

La regresión lineal es:
- ✅ Simple e interpretable
- ✅ Rápida de entrenar
- ✅ Buena como baseline
- ✅ Útil para inferencia

Pero requiere:
- ⚠️ Verificar supuestos
- ⚠️ Cuidado con outliers
- ⚠️ No asumir causalidad

## Juegos Relacionados

🎮 [Regresión Lineal Builder](/game/linear-regression) - Ajusta líneas y mejora tu R²

---

*Siguiente: [Correlación vs Causalidad](/wiki/correlacion-causalidad)*
