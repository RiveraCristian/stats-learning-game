# Pruebas de Hipótesis

## Introducción

Las **pruebas de hipótesis** son procedimientos estadísticos que permiten tomar decisiones sobre poblaciones basándose en información de muestras. Son fundamentales en la investigación científica, control de calidad, medicina, y ciencia de datos para determinar si los resultados observados son estadísticamente significativos o simplemente debidos al azar.

## Conceptos Fundamentales

### ¿Qué es una Hipótesis?

Una **hipótesis** es una afirmación sobre un parámetro poblacional (media, proporción, varianza, etc.) que queremos probar con evidencia de una muestra.

### Tipos de Hipótesis

**Hipótesis Nula (H₀):**
- La hipótesis de "no efecto" o "no diferencia"
- Lo que asumimos como verdadero hasta probar lo contrario
- Ejemplo: μ = 100, p = 0.5, μ₁ = μ₂

**Hipótesis Alternativa (H₁ o Hₐ):**
- La hipótesis que queremos probar
- Puede ser bilateral o unilateral
- Ejemplo: μ ≠ 100, p > 0.5, μ₁ < μ₂

### Tipos de Pruebas

**Prueba Bilateral (dos colas):**
```
H₀: μ = μ₀
H₁: μ ≠ μ₀
```
Detecta diferencias en cualquier dirección.

**Prueba Unilateral Derecha (cola derecha):**
```
H₀: μ ≤ μ₀
H₁: μ > μ₀
```
Detecta si el parámetro es mayor.

**Prueba Unilateral Izquierda (cola izquierda):**
```
H₀: μ ≥ μ₀
H₁: μ < μ₀
```
Detecta si el parámetro es menor.

## Proceso de Prueba de Hipótesis

### Paso 1: Formular Hipótesis

Definir claramente H₀ y H₁.

### Paso 2: Elegir Nivel de Significancia (α)

**α** es la probabilidad de rechazar H₀ cuando es verdadera (Error Tipo I).

Valores comunes:
- α = 0.05 (5%) - Estándar en muchos campos
- α = 0.01 (1%) - Más conservador
- α = 0.10 (10%) - Menos estricto

### Paso 3: Calcular Estadístico de Prueba

Depende del tipo de prueba y datos disponibles:
- Test z para proporciones o medias (σ conocida)
- Test t para medias (σ desconocida)
- Test χ² para varianzas o tablas de contingencia
- Test F para comparar varianzas

### Paso 4: Calcular Valor p

El **valor p** es la probabilidad de obtener un resultado tan extremo o más que el observado, asumiendo que H₀ es verdadera.

**Interpretación:**
- p < α: Rechazar H₀ (resultado significativo)
- p ≥ α: No rechazar H₀ (resultado no significativo)

### Paso 5: Tomar Decisión

- **Rechazar H₀**: Hay evidencia suficiente para H₁
- **No rechazar H₀**: No hay evidencia suficiente para H₁

**Nota:** "No rechazar H₀" NO significa que H₀ sea verdadera, solo que no hay evidencia suficiente en contra.

## Tipos de Errores

### Error Tipo I (Falso Positivo)

Rechazar H₀ cuando es verdadera.
```
P(Error Tipo I) = α
```

**Ejemplo:** Concluir que un medicamento funciona cuando en realidad no tiene efecto.

### Error Tipo II (Falso Negativo)

No rechazar H₀ cuando es falsa.
```
P(Error Tipo II) = β
```

**Ejemplo:** Concluir que un medicamento no funciona cuando sí tiene efecto.

### Potencia de la Prueba

```
Potencia = 1 - β
```

Probabilidad de rechazar H₀ correctamente cuando es falsa.

**Factores que aumentan la potencia:**
- Mayor tamaño de muestra (n)
- Mayor α (pero aumenta Error Tipo I)
- Mayor tamaño del efecto
- Menor variabilidad

## Pruebas Comunes

### 1. Test t de Una Muestra

Probar si la media de una población difiere de un valor específico.

**Hipótesis:**
```
H₀: μ = μ₀
H₁: μ ≠ μ₀
```

**Estadístico:**
```
t = (x̄ - μ₀) / (s / √n)
```

Con n-1 grados de libertad.

**Ejemplo:** ¿La altura promedio de estudiantes es 170 cm?

### 2. Test t de Dos Muestras Independientes

Comparar medias de dos grupos independientes.

**Hipótesis:**
```
H₀: μ₁ = μ₂
H₁: μ₁ ≠ μ₂
```

**Ejemplo:** ¿Hay diferencia en salarios entre hombres y mujeres?

### 3. Test t Pareado

Comparar medias de dos muestras relacionadas.

**Hipótesis:**
```
H₀: μd = 0 (diferencia promedio = 0)
H₁: μd ≠ 0
```

**Ejemplo:** ¿El tratamiento reduce la presión arterial? (antes vs después)

### 4. Test z para Proporciones

Probar hipótesis sobre una proporción poblacional.

**Estadístico:**
```
z = (p̂ - p₀) / √(p₀(1-p₀)/n)
```

**Ejemplo:** ¿La tasa de conversión es diferente del 10%?

### 5. Test Chi-Cuadrado (χ²)

**Bondad de Ajuste:**
Probar si los datos siguen una distribución específica.

**Independencia:**
Probar si dos variables categóricas son independientes.

**Ejemplo:** ¿La preferencia de producto es independiente del género?

### 6. ANOVA (Análisis de Varianza)

Comparar medias de tres o más grupos.

**Hipótesis:**
```
H₀: μ₁ = μ₂ = μ₃ = ... = μk
H₁: Al menos una media es diferente
```

**Ejemplo:** ¿Hay diferencia en productividad entre tres turnos de trabajo?

## Ejemplos Prácticos

### Ejemplo 1: Test t de Una Muestra

Una empresa afirma que sus empleados trabajan en promedio 40 horas/semana. Una muestra de 25 empleados muestra:
- x̄ = 42.5 horas
- s = 5 horas

**Prueba:**
```
H₀: μ = 40
H₁: μ ≠ 40
α = 0.05

t = (42.5 - 40) / (5/√25) = 2.5 / 1 = 2.5
gl = 24

Valor crítico: t₀.₀₂₅,₂₄ ≈ 2.064
```

Como |2.5| > 2.064, rechazamos H₀.

**Conclusión:** Hay evidencia de que el promedio no es 40 horas.

### Ejemplo 2: Test de Proporciones

Un sitio web tiene tasa de conversión histórica del 5%. Después de rediseño, de 500 visitantes, 35 convierten.

```
H₀: p = 0.05
H₁: p ≠ 0.05
α = 0.05

p̂ = 35/500 = 0.07

z = (0.07 - 0.05) / √(0.05×0.95/500)
  = 0.02 / 0.00974
  = 2.05

Valor crítico: z₀.₀₂₅ = 1.96
```

Como 2.05 > 1.96, rechazamos H₀.

**Conclusión:** El rediseño mejoró la conversión significativamente.

### Ejemplo 3: A/B Testing

**Grupo A (control):** 1000 usuarios, 50 conversiones (5%)
**Grupo B (variante):** 1000 usuarios, 65 conversiones (6.5%)

```
H₀: pA = pB
H₁: pA ≠ pB

Test z para dos proporciones:
z = (p̂A - p̂B) / √(p̂(1-p̂)(1/nA + 1/nB))

Donde p̂ = (50 + 65)/(1000 + 1000) = 0.0575

z = (0.05 - 0.065) / √(0.0575×0.9425×0.002)
  = -0.015 / 0.0104
  = -1.44

|z| < 1.96, no rechazamos H₀
```

**Conclusión:** No hay evidencia suficiente de diferencia significativa.

## Significancia Estadística vs Práctica

**Significancia Estadística:**
- p < α (rechazamos H₀)
- Indica que el efecto no es por azar

**Significancia Práctica:**
- ¿El efecto es lo suficientemente grande para importar?
- Depende del contexto y costo

**Ejemplo:** Con n=1,000,000, una diferencia de 0.1% puede ser estadísticamente significativa pero prácticamente irrelevante.

## Intervalo de Confianza vs Prueba de Hipótesis

Los **intervalos de confianza** proporcionan información complementaria:

**Intervalo de 95% para μ:**
```
x̄ ± t₀.₀₂₅ × (s/√n)
```

Si el intervalo NO contiene μ₀, rechazamos H₀ al nivel 0.05.

**Ventaja del IC:** Muestra rango plausible de valores, no solo sí/no.

## Múltiples Comparaciones

Al hacer múltiples pruebas, la probabilidad de Error Tipo I aumenta:

```
P(al menos un error) = 1 - (1-α)^m
```

Donde m = número de pruebas.

**Correcciones:**
- **Bonferroni:** Usar α/m para cada prueba
- **Holm:** Procedimiento secuencial
- **FDR (False Discovery Rate):** Controlar tasa de falsos positivos

## Supuestos y Robustez

### Test t
**Supuestos:**
- Normalidad (o n grande por TLC)
- Independencia de observaciones
- Para dos muestras: Varianzas iguales (o usar Welch)

**Robustez:** Bastante robusto a violaciones leves con n ≥ 30

### Alternativas No Paramétricas

Cuando los supuestos no se cumplen:
- **Mann-Whitney U:** Alternativa a test t de dos muestras
- **Wilcoxon:** Alternativa a test t pareado
- **Kruskal-Wallis:** Alternativa a ANOVA
- **Test de Permutación:** Mínimos supuestos

## Aplicaciones

### Ciencia de Datos
- **A/B Testing:** Comparar variantes de productos
- **Feature Selection:** ¿La feature es significativa?
- **Model Comparison:** ¿Un modelo es mejor que otro?

### Medicina
- **Ensayos Clínicos:** ¿El tratamiento funciona?
- **Epidemiología:** ¿Hay asociación entre factores?
- **Diagnóstico:** ¿La prueba es efectiva?

### Negocios
- **Marketing:** Evaluar campañas
- **Calidad:** ¿El proceso cumple estándares?
- **Finanzas:** Detectar anomalías

### Investigación Científica
- Probar teorías
- Validar hipótesis
- Replicabilidad de resultados

## Cálculo con Software

### Python (SciPy)
```python
from scipy import stats

# Test t de una muestra
t_stat, p_value = stats.ttest_1samp(datos, popmean=100)

# Test t de dos muestras
t_stat, p_value = stats.ttest_ind(grupo1, grupo2)

# Test t pareado
t_stat, p_value = stats.ttest_rel(antes, despues)

# Test Chi-cuadrado
chi2, p_value = stats.chi2_contingency(tabla)
```

### R
```R
# Test t de una muestra
t.test(datos, mu=100)

# Test t de dos muestras
t.test(grupo1, grupo2)

# Test pareado
t.test(antes, despues, paired=TRUE)

# ANOVA
aov_result <- aov(valor ~ grupo, data=df)
summary(aov_result)
```

## Críticas y Controversias

### Problemas con p-values
- Mal interpretados frecuentemente
- Dependencia del tamaño de muestra
- P-hacking (buscar significancia)
- Crisis de replicabilidad

### Alternativas Modernas
- **Intervalos de Confianza:** Más informativos
- **Tamaños de Efecto:** Cohen's d, R²
- **Estadística Bayesiana:** Factor de Bayes
- **Bootstrapping:** Métodos de remuestreo

## Juegos Relacionados

🎮 [Detector de Correlación](/game/correlation-detector) - Practica identificando relaciones significativas

🎮 [Regresión Lineal Builder](/game/linear-regression) - Observa significancia de relaciones lineales

## Recursos Adicionales

- American Statistical Association: Statement on p-values
- Tamaño de efecto: Cohen's d, Glass's delta
- Cálculo de tamaño de muestra: Power analysis
- Bayesian hypothesis testing: Factor de Bayes
- Múltiples comparaciones: FWER vs FDR

---

*Siguiente: [ANOVA](/wiki/anova)*
