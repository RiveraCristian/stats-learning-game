# Ética en IA

## Introducción

La **ética en Inteligencia Artificial** se ha convertido en uno de los temas más críticos de nuestra era. A medida que los sistemas de IA toman decisiones que afectan vidas humanas, es fundamental asegurar que sean justos, transparentes y responsables.

## Principios Éticos Fundamentales

### 1. Fairness (Equidad)
Los sistemas de IA deben tratar a todos los grupos de manera justa, sin discriminación.

### 2. Transparency (Transparencia)
Las decisiones de IA deben ser explicables y comprensibles.

### 3. Privacy (Privacidad)
Proteger los datos personales y la privacidad de los usuarios.

### 4. Accountability (Responsabilidad)
Debe haber responsables humanos por las decisiones de IA.

### 5. Safety (Seguridad)
Los sistemas deben ser seguros y robustos.

## Bias en Algoritmos

El **sesgo algorítmico** ocurre cuando un sistema de IA produce resultados sistemáticamente injustos hacia ciertos grupos.

### Tipos de Bias

#### 1. Bias en Datos de Entrenamiento
Los datos históricos reflejan prejuicios sociales.

**Ejemplo**: Sistema de contratación
- Entrenado con datos de contrataciones pasadas
- Históricamente, más hombres en tech
- El algoritmo aprende a preferir candidatos masculinos
- **Resultado**: Discriminación de género

#### 2. Bias de Selección
Los datos no representan adecuadamente a toda la población.

**Ejemplo**: Reconocimiento facial
- Entrenado principalmente con rostros de personas blancas
- Menor precisión en personas de color
- **Consecuencia**: Errores discriminatorios

#### 3. Bias de Confirmación
El algoritmo refuerza creencias existentes.

**Ejemplo**: Sistemas de recomendación
- Muestran contenido similar a lo que ya viste
- Crean "burbujas de filtro"
- **Efecto**: Polarización y radicalización

### Casos Reales de Bias

#### COMPAS (Predicción de Reincidencia)
- **Uso**: Predecir probabilidad de reincidencia criminal
- **Problema**: Sesgo racial
- **Hallazgo**: Sobrepredice reincidencia en personas negras
- **Impacto**: Sentencias injustas

#### Amazon Recruiting Tool
- **Uso**: Filtrar CVs automáticamente
- **Problema**: Sesgo de género
- **Causa**: Entrenado con CVs históricos (mayoría hombres)
- **Resultado**: Penalizaba palabras como "women's"
- **Acción**: Amazon descontinuó el sistema

#### Algoritmos de Préstamos
- **Problema**: Discriminación por código postal
- **Efecto**: Redlining digital
- **Consecuencia**: Perpetúa desigualdad económica

## Fairness en Machine Learning

### Métricas de Fairness

#### 1. Demographic Parity
```
P(Ŷ=1|A=0) = P(Ŷ=1|A=1)
```
La tasa de predicción positiva debe ser igual para todos los grupos.

#### 2. Equal Opportunity
```
P(Ŷ=1|Y=1,A=0) = P(Ŷ=1|Y=1,A=1)
```
La tasa de verdaderos positivos debe ser igual.

#### 3. Equalized Odds
Combina true positive rate y false positive rate iguales.

### Técnicas para Mitigar Bias

#### Pre-processing
- Rebalancear datos de entrenamiento
- Remover features sensibles
- Reweighting de ejemplos

#### In-processing
- Agregar constraints de fairness al entrenamiento
- Adversarial debiasing
- Fair representation learning

#### Post-processing
- Ajustar umbrales de decisión por grupo
- Calibración por grupo

## Privacidad

### Riesgos de Privacidad en IA

#### 1. Reidentificación
Datos "anónimos" pueden ser reidentificados.

**Ejemplo**: Netflix Prize
- Datos de películas "anónimos"
- Investigadores reidentificaron usuarios
- Cruzando con IMDb reviews

#### 2. Membership Inference
Determinar si un individuo está en el dataset de entrenamiento.

**Riesgo**: Revelar información sensible

#### 3. Model Inversion
Reconstruir datos de entrenamiento desde el modelo.

**Ejemplo**: Reconstruir rostros desde modelo de reconocimiento facial

### Técnicas de Privacidad

#### Differential Privacy
Añade ruido matemático para proteger individuos.

```
ε-differential privacy: 
P(M(D) ∈ S) ≤ e^ε × P(M(D') ∈ S)
```

**Usado por**:
- Apple (teclado predictivo)
- Google (Chrome)
- US Census

#### Federated Learning
Entrenar modelos sin centralizar datos.

**Proceso**:
1. Modelo se envía a dispositivos
2. Entrenamiento local
3. Solo actualizaciones se envían al servidor
4. Datos nunca salen del dispositivo

**Usado por**: Google (Gboard)

#### Homomorphic Encryption
Computar sobre datos encriptados.

**Ventaja**: Nunca se desencriptan los datos

## Transparencia y Explicabilidad

### El Problema de la Caja Negra

Modelos complejos (deep learning) son difíciles de interpretar.

**Dilema**: 
- Modelos simples → Interpretables pero menos precisos
- Modelos complejos → Precisos pero opacos

### Explainable AI (XAI)

Técnicas para hacer modelos interpretables:

#### 1. LIME (Local Interpretable Model-agnostic Explanations)
Explica predicciones individuales con modelos simples locales.

#### 2. SHAP (SHapley Additive exPlanations)
Asigna importancia a cada feature basándose en teoría de juegos.

#### 3. Attention Mechanisms
En transformers, muestra qué partes del input son importantes.

#### 4. Saliency Maps
En visión por computadora, resalta regiones importantes de la imagen.

### Derecho a Explicación

**GDPR (Europa)**: Los usuarios tienen derecho a explicaciones de decisiones automatizadas.

**Implicaciones**:
- Las empresas deben poder explicar decisiones de IA
- Impulsa investigación en XAI

## Casos de Estudio

### 1. Reconocimiento Facial y Vigilancia

**Problema**: 
- Uso por gobiernos para vigilancia masiva
- Errores discriminatorios
- Violación de privacidad

**Acciones**:
- San Francisco prohibió uso gubernamental
- IBM dejó de ofrecer reconocimiento facial
- Amazon pausó ventas a policía

### 2. Armas Autónomas

**Debate**: ¿Deben las máquinas tomar decisiones de vida o muerte?

**Posiciones**:
- **A favor**: Mayor precisión, menos bajas civiles
- **En contra**: Dilemas éticos, falta de accountability

**Campaña**: Future of Life Institute - prohibir armas autónomas letales

### 3. Deepfakes

**Riesgo**:
- Desinformación
- Pornografía no consensuada
- Manipulación política

**Contramedidas**:
- Detección de deepfakes con IA
- Watermarking de contenido sintético
- Legislación

### 4. Sistemas de Scoring Social

**Ejemplo**: China
- Puntaje basado en comportamiento
- Afecta acceso a servicios
- **Preocupación**: Vigilancia orwelliana

## Responsabilidad y Gobernanza

### ¿Quién es Responsable?

Cuando un auto autónomo causa un accidente:
- ¿El fabricante?
- ¿El programador?
- ¿El dueño?
- ¿El algoritmo?

**Necesidad**: Marcos legales claros

### Regulación de IA

#### EU AI Act
Clasifica sistemas de IA por riesgo:
- **Riesgo inaceptable**: Prohibido
- **Alto riesgo**: Regulación estricta
- **Riesgo limitado**: Transparencia requerida
- **Riesgo mínimo**: Sin regulación

#### Principios de Asilomar
27 principios para IA beneficiosa:
- Seguridad
- Transparencia
- Valores humanos
- Dignidad humana

## Dilemas Éticos

### El Problema del Trolley (Versión IA)

Auto autónomo debe elegir:
- Atropellar a 1 persona
- O desviarse y matar a 5

**Preguntas**:
- ¿Quién programa esta decisión?
- ¿Utilitarismo vs deontología?
- ¿Debe el auto proteger al pasajero sobre peatones?

### Sesgo vs Precisión

A veces, remover bias reduce precisión.

**Dilema**: ¿Sacrificar precisión por equidad?

## Mejores Prácticas

### Para Desarrolladores

1. **Auditar datos** por bias
2. **Diversificar equipos** de desarrollo
3. **Testear** en grupos diversos
4. **Documentar** decisiones de diseño
5. **Monitorear** sistemas en producción
6. **Actualizar** modelos regularmente

### Para Organizaciones

1. **Establecer comités de ética**
2. **Realizar impact assessments**
3. **Ser transparentes** sobre uso de IA
4. **Permitir opt-out** cuando sea posible
5. **Entrenar** empleados en ética de IA

### Para Usuarios

1. **Cuestionar** decisiones automatizadas
2. **Exigir explicaciones**
3. **Reportar** comportamiento injusto
4. **Educarse** sobre IA

## El Futuro de la Ética en IA

### Desafíos Emergentes

- **AGI (Inteligencia Artificial General)**: Riesgos existenciales
- **Desempleo tecnológico**: Impacto social masivo
- **Desigualdad**: Brecha entre quienes tienen y no tienen acceso a IA
- **Manipulación**: Uso de IA para propaganda y control

### Oportunidades

- **Medicina**: Diagnósticos más precisos y equitativos
- **Educación**: Personalizada y accesible
- **Clima**: Optimización de recursos
- **Justicia**: Reducir sesgos humanos (si se hace bien)

## Conclusión

La ética en IA no es opcional, es **fundamental**:
- 🎯 Guía el desarrollo responsable
- ⚖️ Protege derechos humanos
- 🌍 Asegura beneficio para toda la humanidad

**Recuerda**:
- La tecnología no es neutral
- Los algoritmos reflejan valores humanos
- Todos tenemos responsabilidad

## Juegos Relacionados

🎮 [AI Ethics Scenarios](/game/ai-ethics) - Explora dilemas éticos en IA

---

*Siguiente: [Futuro de la IA](/wiki/futuro-ia)*
