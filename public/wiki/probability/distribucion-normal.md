# Distribución Normal

## Introducción

La **distribución normal** (también llamada distribución gaussiana o curva de campana) es la distribución de probabilidad más importante en estadística. Aparece naturalmente en innumerables fenómenos del mundo real y es fundamental para la inferencia estadística.

## Características de la Curva Normal

### Forma de Campana
- Simétrica alrededor de la media
- Un solo pico en el centro
- Colas que se extienden infinitamente en ambas direcciones

### Propiedades Clave
- **Media = Mediana = Moda** (todas en el centro)
- **Asintótica**: Las colas nunca tocan el eje X
- **Área total bajo la curva = 1** (100% de probabilidad)

## Parámetros

La distribución normal se define por dos parámetros:

### μ (mu) - Media
- Determina el centro de la distribución
- Desplaza la curva horizontalmente

### σ (sigma) - Desviación Estándar
- Determina la dispersión de los datos
- σ pequeño → curva estrecha y alta
- σ grande → curva ancha y baja

## Notación

```
X ~ N(μ, σ²)
```

Se lee: "X sigue una distribución normal con media μ y varianza σ²"

## Regla Empírica (68-95-99.7)

Una de las propiedades más útiles de la distribución normal:

### 68% de los datos
Están dentro de **1 desviación estándar** de la media:
```
μ - σ ≤ X ≤ μ + σ
```

### 95% de los datos
Están dentro de **2 desviaciones estándar**:
```
μ - 2σ ≤ X ≤ μ + 2σ
```

### 99.7% de los datos
Están dentro de **3 desviaciones estándar**:
```
μ - 3σ ≤ X ≤ μ + 3σ
```

## Ejemplo: Alturas Humanas

Las alturas de hombres adultos siguen aproximadamente N(175, 7²) cm:

- **Media (μ)**: 175 cm
- **Desviación estándar (σ)**: 7 cm

Aplicando la regla empírica:
- **68%** miden entre 168-182 cm (μ ± σ)
- **95%** miden entre 161-189 cm (μ ± 2σ)
- **99.7%** miden entre 154-196 cm (μ ± 3σ)

## Distribución Normal Estándar

### Z-Score (Estandarización)

Convertir cualquier distribución normal a N(0, 1):

```
Z = (X - μ) / σ
```

Donde:
- **Z**: Valor estandarizado (z-score)
- **X**: Valor original
- **μ**: Media de la distribución
- **σ**: Desviación estándar

### Ventajas de Estandarizar
- Comparar valores de diferentes distribuciones
- Usar tablas estándar de probabilidad
- Calcular percentiles fácilmente

## Ejemplo de Z-Score

Si un estudiante saca 85 en un examen donde:
- Media = 75
- Desviación estándar = 10

```
Z = (85 - 75) / 10 = 1.0
```

**Interpretación**: El estudiante está 1 desviación estándar por encima de la media, mejor que aproximadamente el 84% de los estudiantes.

## Teorema del Límite Central

**Concepto clave**: La suma de muchas variables aleatorias independientes tiende a seguir una distribución normal, sin importar la distribución original.

**Implicación**: Por eso la distribución normal aparece tan frecuentemente en la naturaleza.

## Aplicaciones

### En la Naturaleza
- Alturas y pesos de poblaciones
- Errores de medición
- Puntuaciones de tests estandarizados
- Presión arterial

### En Machine Learning
- Inicialización de pesos en redes neuronales
- Ruido gaussiano en modelos
- Distribución de errores en regresión
- Prior en inferencia bayesiana

### En Finanzas
- Retornos de inversiones (aproximadamente)
- Modelos de riesgo
- Opciones financieras (Black-Scholes)

## Función de Densidad de Probabilidad

```
f(x) = (1 / (σ√(2π))) × e^(-(x-μ)²/(2σ²))
```

Esta fórmula define la curva de campana matemáticamente.

## Probabilidades con la Normal

Para calcular P(a ≤ X ≤ b):
1. Estandarizar a y b usando z-scores
2. Buscar en tabla Z o usar software
3. Restar probabilidades acumuladas

## Ejemplo de Cálculo

Alturas N(175, 7²). ¿Probabilidad de medir entre 170-180 cm?

```
Z₁ = (170 - 175) / 7 ≈ -0.71
Z₂ = (180 - 175) / 7 ≈ 0.71

P(170 ≤ X ≤ 180) = P(-0.71 ≤ Z ≤ 0.71) ≈ 0.52 = 52%
```

## Prueba de Normalidad

### Métodos para verificar normalidad:
- **Histograma**: ¿Tiene forma de campana?
- **Q-Q Plot**: ¿Los puntos siguen la línea diagonal?
- **Test de Shapiro-Wilk**: Test estadístico formal
- **Test de Kolmogorov-Smirnov**: Compara con distribución teórica

## Transformaciones

Si los datos no son normales, a veces se pueden transformar:
- **Logaritmo**: Para datos con sesgo positivo
- **Raíz cuadrada**: Para datos de conteo
- **Box-Cox**: Transformación general

## Juegos Relacionados

🎮 [Constructor de Distribuciones](/game/distribution-builder) - Visualiza y experimenta con la distribución normal

---

*Siguiente: [Teorema del Límite Central](/wiki/teorema-limite-central)*
