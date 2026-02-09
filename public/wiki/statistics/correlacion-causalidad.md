# Correlación vs Causalidad

## Introducción

**"Correlación no implica causalidad"** es uno de los principios más importantes en estadística y ciencia de datos. Entender la diferencia entre estos conceptos es crucial para evitar conclusiones erróneas y tomar decisiones informadas.

## ¿Qué es Correlación?

La **correlación** mide la relación estadística entre dos variables. Indica si cuando una variable cambia, la otra tiende a cambiar también.

### Coeficiente de Correlación de Pearson (r)

```
r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]
```

**Rango**: -1 ≤ r ≤ 1

- **r = 1**: Correlación positiva perfecta
- **r = 0**: Sin correlación lineal
- **r = -1**: Correlación negativa perfecta

## Tipos de Correlación

### Correlación Positiva (r > 0)
Cuando una variable aumenta, la otra también tiende a aumentar.

**Ejemplos**:
- Horas de estudio ↔ Calificaciones
- Altura ↔ Peso
- Temperatura ↔ Ventas de helado

### Correlación Negativa (r < 0)
Cuando una variable aumenta, la otra tiende a disminuir.

**Ejemplos**:
- Ejercicio ↔ Peso corporal
- Precio ↔ Demanda
- Velocidad ↔ Tiempo de viaje

### Sin Correlación (r ≈ 0)
No hay relación lineal entre las variables.

**Ejemplos**:
- Número de zapato ↔ Inteligencia
- Color de ojos ↔ Habilidad matemática

## ¿Qué es Causalidad?

La **causalidad** implica que un cambio en una variable **causa** directamente un cambio en otra. Existe una relación de causa-efecto.

### Criterios para Causalidad

1. **Asociación**: Las variables deben estar correlacionadas
2. **Temporalidad**: La causa debe preceder al efecto
3. **Eliminación de alternativas**: Descartar otras explicaciones
4. **Mecanismo plausible**: Debe existir una explicación lógica
5. **Dosis-respuesta**: Más causa → más efecto

## Correlaciones Espurias

**Correlación espuria**: Relación estadística entre variables sin conexión causal real.

### Ejemplos Famosos

#### 1. Helado y Ahogamientos
- **Correlación**: Fuerte y positiva
- **Causalidad**: ¡NO! Comer helado no causa ahogamientos
- **Variable oculta**: Temperatura/Verano
  - Verano → más gente come helado
  - Verano → más gente nada → más ahogamientos

#### 2. Películas de Nicolas Cage y Muertes en Piscinas
- **Correlación**: Estadísticamente significativa (r ≈ 0.67)
- **Causalidad**: Obviamente NO
- **Explicación**: Coincidencia pura

#### 3. Consumo de Chocolate y Premios Nobel
- **Correlación**: Los países que consumen más chocolate tienen más premios Nobel per cápita
- **Causalidad**: El chocolate no causa genios
- **Variable oculta**: Riqueza del país
  - Países ricos → más chocolate
  - Países ricos → mejor educación → más premios Nobel

## Variable Confusora (Confounder)

Una **variable confusora** es un factor oculto que influye tanto en X como en Y, creando una correlación espuria.

### Diagrama
```
Variable Confusora (Z)
    ↓           ↓
    X    →?←    Y
```

La correlación entre X e Y puede ser explicada por Z.

### Ejemplo: Café y Cáncer de Pulmón
- **Observación**: Correlación positiva
- **Conclusión errónea**: El café causa cáncer
- **Variable confusora**: Fumar
  - Fumadores tienden a tomar más café
  - Fumar causa cáncer de pulmón
  - El café es inocente

## Cómo Establecer Causalidad

### 1. Experimentos Controlados Aleatorizados (RCT)
El **gold standard** para establecer causalidad:
- Asignar aleatoriamente sujetos a grupos
- Grupo de tratamiento vs grupo de control
- Controlar todas las demás variables

**Ejemplo**: Ensayos clínicos de medicamentos

### 2. Estudios Longitudinales
Seguir a los mismos sujetos a lo largo del tiempo:
- Establecer temporalidad
- Observar cambios
- Controlar por características individuales

### 3. Análisis de Regresión Múltiple
Controlar estadísticamente por variables confusoras:
- Incluir posibles confounders en el modelo
- Aislar el efecto de la variable de interés

### 4. Diseños Cuasi-Experimentales
Cuando los experimentos no son posibles:
- Diferencias en diferencias
- Variables instrumentales
- Regresión discontinua

## Errores Comunes

### 1. Asumir Causalidad por Correlación
**Error**: "X e Y están correlacionados, entonces X causa Y"

**Ejemplo**: 
- Observación: Más bomberos → más daño
- Conclusión errónea: Los bomberos causan daño
- Realidad: Incendios grandes requieren más bomberos Y causan más daño

### 2. Invertir Causa y Efecto
**Error**: Confundir cuál variable es la causa

**Ejemplo**:
- ¿La depresión causa insomnio?
- ¿O el insomnio causa depresión?
- Respuesta: Puede ser bidireccional

### 3. Ignorar Variables Confusoras
**Error**: No considerar factores ocultos

## Aplicaciones en Machine Learning

### Predicción vs Causalidad
- **Modelos predictivos**: Solo necesitan correlación
  - "Usuarios que compraron X también compraron Y"
  - No importa por qué, solo que funciona
  
- **Modelos causales**: Necesitan entender causas
  - "¿Qué pasará si cambio el precio?"
  - "¿Este tratamiento funciona?"

### Causal Inference
Técnicas modernas para inferir causalidad:
- **Propensity Score Matching**: Emparejar sujetos similares
- **Causal Forests**: Árboles de decisión causales
- **Do-Calculus**: Matemáticas de intervenciones

### A/B Testing
Experimentos en productos digitales:
- Asignación aleatoria de usuarios
- Medir efecto causal de cambios
- Ejemplo: ¿Este botón aumenta conversiones?

## Interpretación de Coeficientes

### En Regresión
```
Y = β₀ + β₁X₁ + β₂X₂ + ε
```

**Interpretación correlacional**: 
"X₁ está asociado con Y"

**Interpretación causal** (solo si se cumplen criterios):
"Un aumento de 1 unidad en X₁ causa un cambio de β₁ en Y"

## Visualización

### Scatter Plots
Útiles para ver correlación:
- Puntos en línea diagonal → correlación fuerte
- Puntos dispersos → correlación débil

### Gráficos de Series de Tiempo
Ayudan a establecer temporalidad:
- ¿X cambia antes que Y?
- ¿O viceversa?

## Conclusión

**Recuerda**:
- ✅ Correlación es necesaria pero no suficiente para causalidad
- ✅ Siempre busca variables confusoras
- ✅ La causalidad requiere evidencia rigurosa
- ✅ En duda, diseña un experimento

## Juegos Relacionados

🎮 [Detector de Correlación](/game/correlation-detector) - Practica identificando tipos de correlación

---

*Siguiente: [Regresión Lineal](/wiki/regresion-lineal)*
