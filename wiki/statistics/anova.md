# ANOVA (Análisis de Varianza)

## Introducción

El **ANOVA** (Analysis of Variance) es una técnica estadística que permite comparar las medias de tres o más grupos simultáneamente. Aunque su nombre sugiere análisis de varianzas, ANOVA en realidad compara medias descomponiendo la variabilidad total en componentes explicables por diferentes fuentes. Es una extensión natural del test t para múltiples grupos y es fundamental en diseño experimental y análisis de datos.

## Conceptos Fundamentales

### ¿Por Qué ANOVA y no Múltiples Tests t?

Si tenemos 3 grupos y hacemos todas las comparaciones por pares con tests t:
- A vs B
- A vs C  
- B vs C

**Problema:** Múltiples comparaciones aumentan la probabilidad de Error Tipo I.

Con α = 0.05 por prueba:
```
P(al menos un error) = 1 - (1-0.05)³ ≈ 0.143 (14.3%)
```

ANOVA controla el error global al nivel α especificado (típicamente 0.05).

### Hipótesis en ANOVA

**Hipótesis Nula (H₀):**
```
μ₁ = μ₂ = μ₃ = ... = μk
```
Todas las medias poblacionales son iguales.

**Hipótesis Alternativa (H₁):**
```
Al menos una media es diferente
```

**Nota:** H₁ NO especifica cuál(es) grupo(s) difiere(n).

## Tipos de ANOVA

### 1. ANOVA de Un Factor (One-Way ANOVA)

Un solo factor con k niveles.

**Ejemplo:** Comparar rendimiento académico entre 4 métodos de enseñanza.
- Factor: Método de enseñanza
- Niveles: Método A, B, C, D
- Variable respuesta: Calificación

### 2. ANOVA de Dos Factores (Two-Way ANOVA)

Dos factores y posible interacción.

**Ejemplo:** Analizar el rendimiento considerando:
- Factor 1: Método de enseñanza (A, B, C)
- Factor 2: Género (Masculino, Femenino)
- Variable respuesta: Calificación

Permite evaluar:
- Efecto del método
- Efecto del género
- Interacción método × género

### 3. ANOVA Factorial

Múltiples factores con todas sus combinaciones.

### 4. ANOVA de Medidas Repetidas

El mismo sujeto es medido múltiples veces.

**Ejemplo:** Medir presión arterial de pacientes en 4 momentos diferentes.

### 5. ANCOVA (Análisis de Covarianza)

ANOVA con variables continuas de control (covariables).

**Ejemplo:** Comparar métodos de enseñanza controlando por CI de estudiantes.

## Descomposición de Varianza

ANOVA descompone la variabilidad total:

```
Variabilidad Total = Variabilidad Entre Grupos + Variabilidad Dentro de Grupos

SST = SSB + SSW
```

Donde:
- **SST (Sum of Squares Total):** Variabilidad total de los datos
- **SSB (Sum of Squares Between):** Variabilidad explicada por grupos
- **SSW (Sum of Squares Within):** Variabilidad no explicada (error)

## Tabla ANOVA

| Fuente | SS | df | MS | F | p-value |
|--------|----|----|-------|-----|---------|
| Entre grupos | SSB | k-1 | MSB | F | p |
| Dentro grupos | SSW | N-k | MSW | - | - |
| Total | SST | N-1 | - | - | - |

Donde:
- **df:** Grados de libertad
- **MS (Mean Square):** SS/df
- **F:** MSB/MSW (estadístico de prueba)
- **k:** Número de grupos
- **N:** Total de observaciones

## Estadístico F

```
F = MSB / MSW = Varianza entre grupos / Varianza dentro de grupos
```

**Interpretación:**
- F ≈ 1: Las medias son similares (no rechazar H₀)
- F >> 1: Al menos una media es diferente (rechazar H₀)

El valor F sigue una distribución F con df₁ = k-1 y df₂ = N-k grados de libertad.

## Cálculo Paso a Paso (ANOVA de Un Factor)

### Ejemplo: Productividad en 3 Turnos

**Datos:**
- Turno Mañana: {25, 28, 30, 27, 29}
- Turno Tarde: {22, 24, 23, 25, 21}
- Turno Noche: {18, 20, 19, 21, 17}

### Paso 1: Calcular Medias

```
x̄₁ = 27.8 (Mañana)
x̄₂ = 23.0 (Tarde)
x̄₃ = 19.0 (Noche)
x̄_total = 23.27
```

### Paso 2: Calcular SST

```
SST = Σ(xᵢⱼ - x̄_total)² = 258.93
```

### Paso 3: Calcular SSB

```
SSB = Σnⱼ(x̄ⱼ - x̄_total)²
    = 5(27.8-23.27)² + 5(23.0-23.27)² + 5(19.0-23.27)²
    = 194.13
```

### Paso 4: Calcular SSW

```
SSW = SST - SSB = 258.93 - 194.13 = 64.8
```

### Paso 5: Construir Tabla ANOVA

| Fuente | SS | df | MS | F |
|--------|---------|----|----|------|
| Entre turnos | 194.13 | 2 | 97.07 | 17.99 |
| Dentro turnos | 64.8 | 12 | 5.4 | - |
| Total | 258.93 | 14 | - | - |

### Paso 6: Decisión

Con α = 0.05, F crítico (2, 12) ≈ 3.89

Como F = 17.99 > 3.89, rechazamos H₀.

**Conclusión:** Hay diferencias significativas en productividad entre turnos.

## Post-Hoc Tests

Si ANOVA es significativa, necesitamos saber **qué grupos** difieren.

### 1. Test de Tukey (HSD)

Compara todos los pares, controlando error Tipo I.

**Ventaja:** Más potente cuando se comparan todos los pares
**Uso:** Comparaciones múltiples

### 2. Test de Bonferroni

Ajusta α para cada comparación: α_ajustado = α / número de comparaciones

**Ventaja:** Conservador, fácil de entender
**Desventaja:** Pierde potencia con muchas comparaciones

### 3. Test de Scheffé

Permite comparaciones complejas (no solo pares).

**Ventaja:** Muy conservador y flexible
**Desventaja:** Menos potente

### 4. Test LSD (Least Significant Difference)

Similar a múltiples tests t.

**Ventaja:** Más potente
**Desventaja:** No controla bien error Tipo I

## Supuestos de ANOVA

### 1. Independencia

Las observaciones deben ser independientes entre sí.

**Violación:** Datos correlacionados, medidas repetidas
**Solución:** Usar ANOVA de medidas repetidas o modelos mixtos

### 2. Normalidad

Los residuos deben seguir distribución normal.

**Verificación:** Q-Q plot, test de Shapiro-Wilk
**Robustez:** ANOVA es robusta con n ≥ 30 por grupo (TLC)
**Alternativa:** Kruskal-Wallis (no paramétrico)

### 3. Homogeneidad de Varianzas (Homocedasticidad)

Las varianzas de los grupos deben ser iguales.

**Verificación:** Test de Levene, test de Bartlett
**Regla práctica:** σ_max / σ_min < 2
**Robustez:** Robusto con grupos de tamaño similar
**Alternativa:** Welch ANOVA (no asume varianzas iguales)

## Tamaño del Efecto

El valor p solo indica significancia estadística, no magnitud.

### Eta Cuadrado (η²)

```
η² = SSB / SST
```

Proporción de varianza explicada por el factor.

**Interpretación (Cohen):**
- η² = 0.01: Efecto pequeño
- η² = 0.06: Efecto medio
- η² = 0.14: Efecto grande

### Omega Cuadrado (ω²)

Estimador menos sesgado que η²:

```
ω² = (SSB - (k-1)MSW) / (SST + MSW)
```

## Ejemplos Prácticos

### Ejemplo 1: Marketing Digital

Comparar 4 diseños de landing page:

**Datos:** Tasa de conversión (%) de 30 sesiones por diseño

**Resultado:**
- F(3, 116) = 5.67, p = 0.001
- η² = 0.128 (efecto medio-grande)

**Post-hoc (Tukey):**
- Diseño A vs B: p = 0.002 (significativo)
- Diseño A vs C: p = 0.856 (no significativo)
- Diseño A vs D: p = 0.021 (significativo)

**Conclusión:** Diseño A es significativamente mejor que B y D.

### Ejemplo 2: Control de Calidad

Comparar 3 máquinas en precisión de corte:

**Supuestos:**
- Normalidad: Shapiro-Wilk p > 0.05 ✓
- Homogeneidad: Levene p = 0.412 ✓

**ANOVA:**
- F(2, 57) = 0.82, p = 0.445
- No significativo

**Conclusión:** No hay evidencia de diferencia entre máquinas.

### Ejemplo 3: Ensayo Clínico

Comparar 3 tratamientos + control (4 grupos):

**Two-Way ANOVA:**
- Factor A: Tratamiento (4 niveles)
- Factor B: Género (2 niveles)

**Resultados:**
- Tratamiento: F(3,152) = 12.4, p < 0.001 ✓
- Género: F(1,152) = 0.8, p = 0.372
- Interacción: F(3,152) = 2.1, p = 0.102

**Conclusión:** El tratamiento tiene efecto, pero no hay diferencia por género ni interacción significativa.

## ANOVA vs Regresión

ANOVA es un caso especial de regresión lineal:
- Variables predictoras: Variables dummy para grupos
- Equivalencia: F de ANOVA = F de regresión

**Ventaja de regresión:** Puede incluir variables continuas (ANCOVA)

## Diseño Experimental

### Diseño Completamente Aleatorizado

Sujetos asignados aleatoriamente a grupos.

**Análisis:** ANOVA de un factor

### Diseño de Bloques Aleatorizados

Sujetos agrupados en bloques homogéneos, luego aleatorizados dentro de bloques.

**Análisis:** ANOVA de dos factores (tratamiento + bloque)

### Diseño Factorial

Combina múltiples factores para estudiar efectos principales e interacciones.

**Análisis:** ANOVA factorial

## Aplicaciones

### Ciencia de Datos
- **Feature Selection:** ¿La feature tiene efecto significativo?
- **A/B/n Testing:** Comparar múltiples variantes
- **Segmentación:** Diferencias entre segmentos de clientes

### Machine Learning
- **Comparación de Modelos:** Evaluar múltiples algoritmos
- **Hiperparámetros:** Optimizar configuraciones
- **Cross-validation:** Analizar estabilidad de modelos

### Medicina
- **Ensayos Clínicos:** Comparar tratamientos
- **Epidemiología:** Efectos de múltiples factores de riesgo
- **Farmacología:** Dosis óptima de medicamentos

### Agricultura
- **Fertilizantes:** Comparar efectividad
- **Variedades:** Rendimiento de cultivos
- **Condiciones:** Efectos de clima, suelo, etc.

### Manufactura
- **Procesos:** Optimizar parámetros de producción
- **Materiales:** Comparar proveedores
- **Calidad:** Six Sigma, Design of Experiments (DOE)

## Cálculo con Software

### Python (SciPy/Statsmodels)
```python
from scipy import stats
import statsmodels.api as sm
from statsmodels.formula.api import ols

# ANOVA de un factor
f_stat, p_value = stats.f_oneway(grupo1, grupo2, grupo3)

# ANOVA detallado con Statsmodels
modelo = ols('valor ~ C(grupo)', data=df).fit()
tabla_anova = sm.stats.anova_lm(modelo, typ=2)

# Post-hoc Tukey
from statsmodels.stats.multicomp import pairwise_tukeyhsd
tukey = pairwise_tukeyhsd(df['valor'], df['grupo'])
```

### R
```R
# ANOVA de un factor
modelo <- aov(valor ~ grupo, data=df)
summary(modelo)

# Two-way ANOVA
modelo2 <- aov(valor ~ factor1 * factor2, data=df)
summary(modelo2)

# Post-hoc Tukey
TukeyHSD(modelo)

# Verificar supuestos
shapiro.test(residuals(modelo))  # Normalidad
leveneTest(valor ~ grupo, data=df)  # Homogeneidad
```

## Limitaciones y Alternativas

### Limitaciones
- Asume independencia, normalidad, homogeneidad
- Solo detecta diferencias, no su naturaleza
- Pierde potencia con grupos desbalanceados

### Alternativas No Paramétricas

**Kruskal-Wallis:**
- Alternativa a ANOVA de un factor
- Basado en rangos
- No asume normalidad

**Friedman:**
- Alternativa a ANOVA de medidas repetidas
- Para datos ordinales o no normales

## Juegos Relacionados

🎮 [Adivina la Medida](/game/guess-measure) - Practica comparando grupos de datos

🎮 [Detector de Correlación](/game/correlation-detector) - Observa relaciones entre variables

## Recursos Adicionales

- MANOVA: ANOVA multivariado (múltiples variables respuesta)
- Design of Experiments (DOE): Metodología de diseño experimental
- Mixed Models: Efectos fijos y aleatorios combinados
- Contrasts: Comparaciones planificadas específicas
- Power Analysis: Calcular tamaño de muestra necesario

---

*Anterior: [Pruebas de Hipótesis](/wiki/pruebas-hipotesis)*
