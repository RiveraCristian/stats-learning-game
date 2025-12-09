# Visualizaciones Estadísticas

## Introducción

Las **visualizaciones estadísticas** son representaciones gráficas de datos que facilitan la comprensión de patrones, tendencias y relaciones. Una visualización bien diseñada puede revelar insights que serían difíciles de detectar en tablas numéricas. En la era del big data y la ciencia de datos, la capacidad de crear y interpretar visualizaciones efectivas es una habilidad fundamental.

## Principios de Visualización Efectiva

### 1. Claridad
La visualización debe comunicar el mensaje sin ambigüedad.

### 2. Precisión
Los datos deben representarse fielmente sin distorsiones.

### 3. Eficiencia
Transmitir la máxima información con el mínimo de elementos.

### 4. Estética
Diseño atractivo que invite a explorar los datos.

## Tipos de Visualizaciones

### Visualizaciones Univariadas

#### 1. Histograma

Muestra la distribución de una variable continua mediante barras que representan frecuencias.

**Cuándo usar:**
- Explorar la forma de la distribución
- Identificar simetría, asimetría, multimodalidad
- Detectar outliers

**Elementos clave:**
- Número de bins (contenedores)
- Ancho de bins
- Eje Y: Frecuencia o densidad

**Ejemplo:** Distribución de edades en una población

#### 2. Box Plot (Diagrama de Caja)

Visualiza la distribución mediante cuartiles y detecta outliers.

**Componentes:**
- Caja: Q1 a Q3 (IQR)
- Línea central: Mediana (Q2)
- Bigotes: Hasta 1.5×IQR desde Q1 y Q3
- Puntos: Outliers

**Ventajas:**
- Compacto y fácil de comparar múltiples grupos
- Muestra mediana, dispersión y valores atípicos
- No asume distribución normal

**Ejemplo:** Comparar salarios entre departamentos

#### 3. Violin Plot

Combina box plot con kernel density estimation (KDE).

**Ventajas:**
- Muestra la forma completa de la distribución
- Útil para detectar bimodalidad
- Comparación visual entre grupos

#### 4. Gráfico de Densidad

Versión suavizada del histograma.

**Ventajas:**
- Muestra distribución continua
- Fácil de superponer múltiples grupos
- Sin dependencia del ancho de bins

**Desventajas:**
- Puede suavizar detalles importantes
- Requiere elegir ancho de banda

### Visualizaciones Bivariadas

#### 5. Scatter Plot (Diagrama de Dispersión)

Muestra la relación entre dos variables continuas.

**Cuándo usar:**
- Explorar correlaciones
- Identificar patrones lineales o no lineales
- Detectar outliers bivariados

**Variaciones:**
- **Tamaño de puntos:** Variable adicional
- **Color:** Categoría o tercera variable
- **Línea de tendencia:** Mostrar relación

**Ejemplo:** Relación entre altura y peso

#### 6. Línea de Regresión

Añade línea de mejor ajuste al scatter plot.

**Información adicional:**
- Ecuación: y = mx + b
- R² (coeficiente de determinación)
- Intervalos de confianza

#### 7. Heatmap (Mapa de Calor)

Representa datos mediante colores en una matriz.

**Usos:**
- Matriz de correlación
- Datos de series temporales multivariadas
- Comparaciones categoría vs categoría

**Elementos:**
- Escala de colores intuitiva
- Anotaciones numéricas opcionales
- Dendrogramas para clustering

**Ejemplo:** Correlación entre múltiples variables

#### 8. Gráfico de Barras

Compara valores entre categorías.

**Tipos:**
- **Vertical/Horizontal:** Según número de categorías
- **Agrupadas:** Múltiples series
- **Apiladas:** Mostrar composición

**Cuándo usar:**
- Comparar magnitudes entre categorías
- Mostrar rankings
- Visualizar distribución de categorías

### Visualizaciones de Series Temporales

#### 9. Línea Temporal

Muestra evolución de variables a lo largo del tiempo.

**Elementos:**
- Eje X: Tiempo (secuencial)
- Eje Y: Valor de la variable
- Múltiples líneas para comparación

**Técnicas:**
- Suavizado (moving average)
- Bandas de confianza
- Anotaciones de eventos importantes

**Ejemplo:** Evolución de ventas mensuales

#### 10. Área Apilada

Similar a línea temporal pero con áreas coloreadas.

**Uso:** Mostrar composición que cambia en el tiempo

**Ejemplo:** Participación de mercado de diferentes empresas

#### 11. Candlestick Chart (Velas)

Visualización financiera para series temporales.

**Componentes:**
- Apertura, cierre, máximo, mínimo
- Color: Verde (alza) vs Rojo (baja)

**Uso:** Análisis de precios de acciones, criptomonedas

### Visualizaciones Multivariadas

#### 12. Pair Plot (Matriz de Dispersión)

Grid de scatter plots para todas las combinaciones de variables.

**Uso:**
- Análisis exploratorio de múltiples variables
- Identificar correlaciones
- Detectar patrones entre pares

**Diagonal:** Histogramas o KDE de cada variable

#### 13. Gráfico de Radar

Visualiza múltiples variables en ejes radiales.

**Uso:**
- Comparar perfiles multidimensionales
- Evaluación de competencias
- Análisis de productos

**Limitación:** Difícil de interpretar con muchas variables

#### 14. Parallel Coordinates

Cada variable es un eje vertical, observaciones son líneas.

**Uso:**
- Visualizar datos de alta dimensión
- Identificar clusters
- Detectar outliers multivariados

#### 15. Bubble Chart

Scatter plot donde el tamaño de burbujas representa tercera variable.

**Uso:**
- Tres variables continuas
- Identificar relaciones complejas

**Ejemplo:** X=GDP, Y=Esperanza de vida, Tamaño=Población

### Visualizaciones de Composición

#### 16. Gráfico de Pastel (Pie Chart)

Muestra partes de un todo.

**Cuándo usar:**
- Pocas categorías (≤ 5)
- Proporciones simples

**Cuándo NO usar:**
- Muchas categorías
- Comparaciones precisas
- Múltiples series

**Alternativa:** Gráfico de barras (más preciso)

#### 17. Treemap

Rectángulos anidados representan jerarquías.

**Uso:**
- Visualizar estructuras jerárquicas
- Mostrar proporciones en múltiples niveles

**Ejemplo:** Distribución de ventas por región > país > ciudad

#### 18. Sunburst Chart

Versión circular del treemap.

**Uso:** Similar al treemap, más estético

### Visualizaciones Especializadas

#### 19. Q-Q Plot

Compara cuantiles de dos distribuciones.

**Uso Principal:** Verificar normalidad de datos

**Interpretación:**
- Puntos en línea recta → Datos siguen distribución
- Desviaciones → Violación de supuestos

#### 20. Residual Plot

Gráfico de residuos vs valores predichos.

**Uso:** Diagnosticar regresión lineal

**Patrones:**
- Aleatorio → Modelo adecuado
- Patrón sistemático → Problemas

#### 21. ROC Curve

True Positive Rate vs False Positive Rate.

**Uso:** Evaluar clasificadores binarios

**Métrica:** AUC (Area Under Curve)
- AUC = 1: Clasificador perfecto
- AUC = 0.5: Aleatorio

#### 22. Confusion Matrix Heatmap

Visualiza matriz de confusión con colores.

**Uso:** Evaluar modelos de clasificación

**Elementos:**
- Diagonal: Predicciones correctas
- Fuera diagonal: Errores

## Herramientas y Librerías

### Python

**Matplotlib:**
- Librería base, muy flexible
- Control fino de todos los elementos
- Curva de aprendizaje pronunciada

**Seaborn:**
- Basado en Matplotlib
- Visualizaciones estadísticas elegantes
- API de alto nivel

```python
import seaborn as sns
import matplotlib.pyplot as plt

# Scatter plot con línea de regresión
sns.regplot(x='feature1', y='target', data=df)

# Heatmap de correlación
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')

# Pair plot
sns.pairplot(df, hue='categoria')
```

**Plotly:**
- Gráficos interactivos
- Excelente para dashboards web
- Hover tooltips, zoom, pan

**Altair:**
- Gramática declarativa de gráficos
- Código conciso y expresivo
- Basado en Vega-Lite

### R

**ggplot2:**
- Gramática de gráficos
- Muy popular y flexible
- Ecosistema extenso

```R
library(ggplot2)

# Scatter plot
ggplot(df, aes(x=feature1, y=target, color=grupo)) +
  geom_point() +
  geom_smooth(method='lm') +
  theme_minimal()

# Box plot
ggplot(df, aes(x=categoria, y=valor)) +
  geom_boxplot() +
  facet_wrap(~grupo)
```

### JavaScript

**D3.js:**
- Control total sobre visualización
- Gráficos web interactivos
- Muy potente pero complejo

**Chart.js:**
- Gráficos simples para web
- Fácil de usar
- Limitado en personalización

**Recharts:**
- Componentes React para gráficos
- Basado en D3
- Declarativo y composable

## Mejores Prácticas

### 1. Elige el Gráfico Apropiado

- **Comparación:** Barras
- **Distribución:** Histograma, box plot
- **Relación:** Scatter plot
- **Composición:** Barras apiladas, treemap
- **Temporal:** Línea

### 2. Usa Colores Efectivamente

- **Categóricos:** Colores distintos y contrastantes
- **Secuenciales:** Gradiente de un color (bajo → alto)
- **Divergentes:** Dos colores desde punto central
- **Accesibilidad:** Considerar daltonismo

### 3. Etiqueta Apropiadamente

- Títulos descriptivos
- Ejes claramente etiquetados
- Unidades especificadas
- Leyenda cuando necesaria

### 4. Evita Distorsiones

- Eje Y debe empezar en 0 para barras
- No usar 3D innecesario
- Proporciones correctas
- Sin chart junk (decoraciones innecesarias)

### 5. Optimiza para Audiencia

- **Técnica:** Incluir detalles estadísticos
- **General:** Simplicidad y claridad
- **Ejecutivos:** Insights clave destacados

## Errores Comunes

### 1. Pie Chart con Muchas Categorías
**Problema:** Difícil de comparar proporciones pequeñas
**Solución:** Usar gráfico de barras ordenado

### 2. Doble Eje Y
**Problema:** Puede engañar al manipular escalas
**Solución:** Usar dos gráficos separados o normalizar

### 3. Eje Y Truncado en Barras
**Problema:** Exagera diferencias
**Solución:** Empezar en 0 o usar líneas en su lugar

### 4. Demasiada Información
**Problema:** Gráfico abarrotado e ilegible
**Solución:** Simplificar, usar faceting, o múltiples gráficos

### 5. Colores Inapropiados
**Problema:** Dificulta lectura, no accesible
**Solución:** Usar paletas diseñadas (ColorBrewer, Viridis)

## Visualización Interactiva

### Ventajas
- Exploración profunda de datos
- Personalización por usuario
- Múltiples vistas coordinadas
- Tooltips con detalles

### Tecnologías
- Plotly Dash (Python)
- Shiny (R)
- Tableau
- Power BI
- Observable (JavaScript)

## Storytelling con Datos

### 1. Narrativa Clara
Guiar al lector a través de insights clave

### 2. Progresión Lógica
Construir argumento paso a paso

### 3. Destacar Insights
Usar anotaciones, colores, para enfatizar

### 4. Contexto
Proporcionar marco de referencia

### 5. Llamada a Acción
¿Qué debe hacer el lector con esta información?

## Aplicaciones

### Ciencia de Datos
- Análisis exploratorio (EDA)
- Comunicación de resultados
- Reportes automáticos

### Machine Learning
- Feature importance
- Curvas de aprendizaje
- Evaluación de modelos

### Negocios
- Dashboards ejecutivos
- KPI tracking
- Análisis de mercado

### Investigación
- Publicaciones científicas
- Presentaciones
- Validación de hipótesis

## Juegos Relacionados

🎮 [Detector de Correlación](/game/correlation-detector) - Interpreta scatter plots y correlación

🎮 [Regresión Lineal Builder](/game/linear-regression) - Visualiza líneas de regresión

🎮 [Adivina la Medida](/game/guess-measure) - Practica con visualizaciones de distribuciones

## Recursos Adicionales

- The Visual Display of Quantitative Information (Edward Tufte)
- Storytelling with Data (Cole Nussbaumer Knaflic)
- From Data to Viz (Catálogo de visualizaciones)
- ColorBrewer: Paletas de colores para mapas
- D3 Graph Gallery: Ejemplos de código
- Matplotlib Gallery: Galería de ejemplos Python
- R Graph Gallery: Galería de ejemplos R

---

*Anterior: [ANOVA](/wiki/anova)*
