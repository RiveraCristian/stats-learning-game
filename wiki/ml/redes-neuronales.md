# Redes Neuronales

## Introducción

Las **redes neuronales** son modelos de Machine Learning inspirados en el cerebro humano, compuestos por capas de neuronas artificiales interconectadas. Son la base del Deep Learning y han revolucionado campos como visión por computadora, procesamiento de lenguaje natural y generación de contenido. Su capacidad para aprender representaciones jerárquicas complejas las hace extremadamente poderosas.

## Conceptos Fundamentales

### Neurona Artificial (Perceptrón)

Unidad básica que:
1. Recibe inputs (x₁, x₂, ..., xₙ)
2. Multiplica por pesos (w₁, w₂, ..., wₙ)
3. Suma: z = w₁x₁ + w₂x₂ + ... + b (bias)
4. Aplica función de activación: a = f(z)

### Arquitectura de Red

**Componentes:**
- **Capa de Entrada:** Recibe datos
- **Capas Ocultas:** Procesan información
- **Capa de Salida:** Genera predicción

**Tipos:**
- **Fully Connected (Dense):** Cada neurona conectada a todas las anteriores
- **Convolutional (CNN):** Para imágenes
- **Recurrent (RNN/LSTM):** Para secuencias
- **Transformer:** Para NLP moderno

## Funciones de Activación

### Sigmoid
```
σ(x) = 1 / (1 + e^(-x))
```
Salida: (0, 1)
**Uso:** Clasificación binaria en salida

### Tanh
```
tanh(x) = (e^x - e^(-x)) / (e^x + e^(-x))
```
Salida: (-1, 1)
**Ventaja:** Centrada en 0

### ReLU (Rectified Linear Unit)
```
ReLU(x) = max(0, x)
```
**Más usado:** Rápido, evita vanishing gradient

### Leaky ReLU
```
LeakyReLU(x) = max(αx, x)
```
**Ventaja:** No "muere" con valores negativos

### Softmax
```
softmax(xi) = e^xi / Σe^xj
```
**Uso:** Clasificación multiclase en salida

## Proceso de Entrenamiento

### Forward Propagation

1. Input pasa por capas
2. Cada neurona calcula: a = f(Wx + b)
3. Output final en capa de salida

### Loss Function

**Regresión:**
- Mean Squared Error (MSE)
- Mean Absolute Error (MAE)

**Clasificación:**
- Binary Cross-Entropy (binaria)
- Categorical Cross-Entropy (multiclase)

### Backpropagation

1. Calcular error en salida
2. Propagar error hacia atrás
3. Calcular gradientes: ∂L/∂w, ∂L/∂b
4. Actualizar pesos: w := w - α∇L

### Optimizadores

**SGD (Stochastic Gradient Descent):**
```
w := w - α∇L
```

**Momentum:**
```
v := βv + ∇L
w := w - αv
```

**Adam (Adaptive Moment Estimation):**
Combina momentum y tasa de aprendizaje adaptativa.
**Más usado actualmente.**

**RMSprop:**
Ajusta learning rate por parámetro.

## Regularización

### Dropout

Durante entrenamiento, "apagar" aleatoriamente neuronas.
**Tasa típica:** 0.2-0.5

**Ventaja:** Previene co-adaptación de neuronas.

### L1/L2 Regularization

Penalizar pesos grandes:
```
Loss_total = Loss + λ Σ|wi| (L1)
Loss_total = Loss + λ Σwi² (L2)
```

### Batch Normalization

Normalizar activaciones entre capas.

**Beneficios:**
- Entrenamiento más rápido
- Permite learning rates mayores
- Reduce dependencia de inicialización

### Early Stopping

Detener entrenamiento cuando validación deja de mejorar.

## Hiperparámetros

**Arquitectura:**
- Número de capas
- Neuronas por capa
- Función de activación

**Entrenamiento:**
- Learning rate (α)
- Batch size
- Epochs
- Optimizer

**Regularización:**
- Dropout rate
- L1/L2 lambda
- Batch normalization

## Tipos de Redes Neuronales

### Feedforward Neural Networks (FNN)

Red básica, información fluye solo hacia adelante.

**Uso:**
- Clasificación tabular
- Regresión
- Baseline

### Convolutional Neural Networks (CNN)

Especializadas en datos con estructura espacial.

**Componentes:**
- **Capas convolucionales:** Detectan patrones locales
- **Pooling:** Reduce dimensionalidad
- **Fully connected:** Clasificación final

**Aplicaciones:**
- Reconocimiento de imágenes
- Detección de objetos
- Segmentación
- Video processing

**Arquitecturas famosas:**
- LeNet, AlexNet, VGG
- ResNet, Inception
- EfficientNet, Vision Transformer

### Recurrent Neural Networks (RNN)

Para secuencias, mantienen "memoria" de inputs anteriores.

**Problemas:**
- Vanishing gradient en secuencias largas

**Solución:** LSTM, GRU

**LSTM (Long Short-Term Memory):**
- Gates: Forget, Input, Output
- Mantiene información relevante largo plazo

**Aplicaciones:**
- Series temporales
- Procesamiento de texto
- Reconocimiento de voz
- Generación de música

### Transformers

Arquitectura moderna basada en atención.

**Componentes:**
- **Self-Attention:** Relaciona elementos de secuencia
- **Multi-Head Attention:** Múltiples representaciones
- **Positional Encoding:** Información de posición

**Ventajas:**
- Paralelizable (vs RNN secuencial)
- Captura dependencias largas
- State-of-the-art en NLP

**Modelos famosos:**
- BERT, GPT, T5
- Vision Transformer (ViT)

### Autoencoders

Aprender representaciones comprimidas de datos.

**Arquitectura:**
- Encoder: Comprimir
- Decoder: Reconstruir

**Aplicaciones:**
- Reducción de dimensionalidad
- Detección de anomalías
- Generación de imágenes
- Denoising

### GANs (Generative Adversarial Networks)

Dos redes compitiendo:
- **Generator:** Crea datos falsos
- **Discriminator:** Distingue real vs falso

**Aplicaciones:**
- Generación de imágenes realistas
- Style transfer
- Data augmentation
- Super-resolution

## Ventajas de Redes Neuronales

✅ **Universal approximator:** Puede aproximar cualquier función
✅ **Feature learning automático:** No requiere feature engineering manual
✅ **Flexibilidad:** Arquitecturas para diferentes tipos de datos
✅ **Estado del arte:** Mejores resultados en muchos problemas
✅ **Transfer learning:** Reusar modelos pre-entrenados

## Desventajas

❌ **Requiere muchos datos:** Miles a millones de ejemplos
❌ **Computacionalmente costoso:** GPUs necesarias
❌ **Caja negra:** Difícil de interpretar
❌ **Hiperparámetros:** Muchos para tunear
❌ **Overfitting:** Sin regularización adecuada
❌ **Tiempo de entrenamiento:** Horas a días

## Frameworks y Librerías

### TensorFlow/Keras
```python
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(128, activation='relu', input_shape=(784,)),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(64, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, batch_size=32)
```

### PyTorch
```python
import torch.nn as nn

class NeuralNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.layer1 = nn.Linear(784, 128)
        self.layer2 = nn.Linear(128, 64)
        self.layer3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        
    def forward(self, x):
        x = self.relu(self.layer1(x))
        x = self.relu(self.layer2(x))
        return self.layer3(x)
```

## Mejores Prácticas

1. **Normalizar inputs:** Mean=0, Std=1
2. **Inicialización:** Xavier/He initialization
3. **Batch size:** 32-256 típicamente
4. **Learning rate:** Empezar con 0.001 (Adam)
5. **Monitorear:** Validation loss/accuracy
6. **Regularización:** Dropout + L2
7. **Data augmentation:** Especialmente en imágenes
8. **Transfer learning:** Usar modelos pre-entrenados cuando sea posible

## Aplicaciones del Mundo Real

### Visión por Computadora
- Reconocimiento facial
- Conducción autónoma
- Diagnóstico médico por imágenes
- Control de calidad industrial

### Procesamiento de Lenguaje Natural
- Traducción automática
- Chatbots y asistentes virtuales
- Análisis de sentimientos
- Resumen de textos

### Generación de Contenido
- DALL-E, Stable Diffusion (imágenes)
- GPT (texto)
- MuseNet (música)
- DeepFake (video)

### Juegos y Simulación
- AlphaGo, AlphaZero
- OpenAI Five (Dota 2)
- Simuladores de física

### Otros
- Recomendación (Netflix, Spotify)
- Predicción de series temporales
- Detección de fraude
- Drug discovery

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Visualiza cómo aprenden modelos

🎮 [Overfitting Game](/game/overfitting-game) - Experimenta con complejidad de redes

## Recursos Adicionales

- deeplearning.ai: Cursos de Andrew Ng
- Fast.ai: Practical Deep Learning
- Neural Networks and Deep Learning (Michael Nielsen)
- PyTorch Tutorials
- TensorFlow Tutorials
- Papers with Code: State-of-the-art

---

*Anterior: [Random Forest](/wiki/random-forest) | Siguiente: [Evaluación de Modelos](/wiki/evaluacion-modelos)*
