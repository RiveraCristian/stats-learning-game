# Fine-Tuning de Modelos de IA

## Introducción

El **fine-tuning** (ajuste fino) es el proceso de adaptar un modelo de IA pre-entrenado a una tarea específica. En lugar de entrenar desde cero, aprovechamos el conocimiento ya aprendido por el modelo en grandes conjuntos de datos y lo especializamos para nuestra aplicación. Esta técnica es fundamental en el desarrollo moderno de IA, especialmente con modelos grandes donde el entrenamiento completo sería prohibitivamente costoso.

## Conceptos Fundamentales

### ¿Qué es Fine-Tuning?

**Definición:** Continuar el entrenamiento de un modelo pre-entrenado en un dataset más pequeño y específico.

**Analogía:** Es como un médico general (modelo pre-entrenado) que se especializa en cardiología (fine-tuning).

### Transfer Learning

Fine-tuning es una forma de **transfer learning**:
- Modelo aprende de tarea general (pre-entrenamiento)
- Transfiere conocimiento a tarea específica (fine-tuning)

### Pre-entrenamiento vs Fine-Tuning

**Pre-entrenamiento:**
- Dataset masivo (millones a billones de ejemplos)
- Tarea general (e.g., predecir siguiente palabra)
- Computacionalmente costoso (semanas, GPUs/TPUs)

**Fine-Tuning:**
- Dataset pequeño (cientos a miles de ejemplos)
- Tarea específica (e.g., clasificar reviews de productos)
- Relativamente rápido (horas, GPU estándar)

## ¿Por Qué Fine-Tuning?

### Ventajas

✅ **Menos datos requeridos:** Miles vs millones
✅ **Más rápido:** Horas vs semanas
✅ **Más barato:** GPUs estándar vs clusters masivos
✅ **Mejor desempeño:** Aprovecha conocimiento previo
✅ **Menor overfitting:** Modelo ya tiene regularización natural

### Cuándo Usar

- Tienes tarea específica
- Dataset limitado (< 100k ejemplos)
- Recursos computacionales limitados
- Necesitas resultados rápidos
- Existe modelo pre-entrenado relevante

## Tipos de Fine-Tuning

### 1. Feature Extraction

Congelar modelo pre-entrenado, entrenar solo capas finales.

**Proceso:**
```python
# Congelar capas base
for param in base_model.parameters():
    param.requires_grad = False

# Entrenar solo cabeza de clasificación
classifier = nn.Linear(base_features, num_classes)
```

**Cuándo usar:**
- Dataset muy pequeño
- Tarea similar a pre-entrenamiento
- Recursos muy limitados

### 2. Full Fine-Tuning

Entrenar todas las capas del modelo.

**Proceso:**
```python
# Todas las capas entrenables
model = PretrainedModel()
optimizer = Adam(model.parameters(), lr=1e-5)  # Learning rate bajo
```

**Cuándo usar:**
- Dataset mediano (10k+ ejemplos)
- Tarea diferente a pre-entrenamiento
- Recursos suficientes

### 3. Gradual Unfreezing

Descongelar capas progresivamente.

**Proceso:**
1. Entrenar solo cabeza
2. Descongelar últimas capas, entrenar
3. Descongelar más capas, entrenar
4. Repetir hasta el inicio

**Ventaja:** Previene catastrophic forgetting

### 4. Discriminative Fine-Tuning

Learning rates diferentes por capa.

**Idea:** Capas tempranas cambian poco, capas finales más.

```python
optimizer = Adam([
    {'params': model.layer1.parameters(), 'lr': 1e-6},
    {'params': model.layer2.parameters(), 'lr': 1e-5},
    {'params': model.layer3.parameters(), 'lr': 1e-4},
])
```

## Fine-Tuning en Diferentes Dominios

### Computer Vision (CNN)

**Modelos pre-entrenados:**
- ResNet, VGG (ImageNet)
- EfficientNet
- Vision Transformer (ViT)

**Tareas:**
- Clasificación de imágenes médicas
- Detección de objetos personalizados
- Segmentación específica

**Ejemplo:**
```python
from torchvision.models import resnet50

# Cargar modelo pre-entrenado
model = resnet50(pretrained=True)

# Reemplazar última capa
model.fc = nn.Linear(2048, num_classes)

# Fine-tune
optimizer = Adam(model.parameters(), lr=1e-4)
```

### NLP (Transformers)

**Modelos pre-entrenados:**
- BERT, RoBERTa
- GPT-2, GPT-3
- T5, LLaMA

**Tareas:**
- Clasificación de texto específica del dominio
- NER personalizado
- Question answering sobre documentos específicos

**Ejemplo con Hugging Face:**
```python
from transformers import BertForSequenceClassification, Trainer

model = BertForSequenceClassification.from_pretrained(
    'bert-base-uncased',
    num_labels=num_classes
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

trainer.train()
```

### Speech Recognition

**Modelos:**
- Wav2Vec 2.0
- Whisper

**Tareas:**
- Transcripción en idiomas específicos
- Reconocimiento de comandos personalizados

## Mejores Prácticas

### 1. Learning Rate

**Regla general:** 10-100x más pequeño que pre-entrenamiento.

**Típico:**
- Pre-entrenamiento: 1e-3
- Fine-tuning: 1e-5 a 1e-4

**Técnica:**
- Learning rate warmup
- Learning rate decay

### 2. Epochs

**Pocos epochs** para evitar overfitting:
- 3-5 epochs típicamente suficientes
- Monitorear validation loss

### 3. Regularización

**Técnicas:**
- **Dropout:** 0.1-0.3
- **Weight decay:** 0.01
- **Early stopping**
- **Data augmentation**

### 4. Batch Size

Balance entre memoria y estabilidad:
- Menor que pre-entrenamiento
- 8-32 típicamente

### 5. Evaluación Frecuente

Evaluar cada epoch o más frecuentemente.

**Guardar:**
- Mejor modelo según validation
- Checkpoints regulares

## Parameter-Efficient Fine-Tuning (PEFT)

Métodos para fine-tunear con menos parámetros modificados.

### LoRA (Low-Rank Adaptation)

Añadir matrices de rango bajo en lugar de fine-tunear pesos completos.

**Ventajas:**
- 10,000x menos parámetros entrenables
- Misma o mejor performance
- Múltiples adaptadores para diferentes tareas

### Adapter Layers

Insertar capas pequeñas adicionales.

**Ventaja:** Congelar modelo base, entrenar solo adapters.

### Prefix Tuning

Añadir vectores aprendibles al inicio de secuencias.

**Uso:** LLMs como GPT

### Prompt Tuning

Optimizar "soft prompts" (embeddings continuos).

**Diferencia con Prefix:** Solo en input layer.

## Fine-Tuning de LLMs

### Casos de Uso

**Adaptación de dominio:**
- Terminología médica/legal específica
- Estilo de escritura empresarial
- Conocimiento especializado

**Seguimiento de instrucciones:**
- Chatbots personalizados
- Asistentes específicos

**Alineación:**
- RLHF (Reinforcement Learning from Human Feedback)
- Constitutional AI

### Técnicas Especiales

**Instruction Tuning:**
Entrenar en pares (instruction, output).

**RLHF:**
1. Fine-tune con supervised learning
2. Entrenar modelo de recompensa
3. Optimizar con PPO

**Few-Shot In-Context Learning:**
Alternativa a fine-tuning para LLMs grandes.

## Desafíos

### Catastrophic Forgetting

Modelo olvida conocimiento del pre-entrenamiento.

**Soluciones:**
- Learning rate bajo
- Regularización
- Gradual unfreezing
- Mixup training (mezclar datos originales)

### Overfitting

Especialmente con datos limitados.

**Soluciones:**
- Data augmentation
- Dropout
- Early stopping
- Más datos (data synthesis, web scraping)

### Domain Gap

Gran diferencia entre datos de pre-entrenamiento y fine-tuning.

**Solución:**
- Intermediate fine-tuning (adaptar progresivamente)
- Domain-adaptive pre-training

## Evaluación

### Métricas por Tarea

**Clasificación:**
- Accuracy, F1, Precision, Recall

**Generación:**
- BLEU, ROUGE, Human evaluation

**QA:**
- Exact Match, F1

### Comparación

Comparar con:
- **Baseline:** Modelo desde cero
- **Pre-trained:** Sin fine-tuning
- **State-of-the-art:** Mejores modelos publicados

## Herramientas y Frameworks

### Hugging Face Transformers

```python
from transformers import AutoModelForSequenceClassification, TrainingArguments, Trainer

model = AutoModelForSequenceClassification.from_pretrained('bert-base-uncased')

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=16,
    learning_rate=2e-5,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset
)

trainer.train()
```

### PyTorch

```python
import torch.nn as nn
from torchvision.models import resnet50

model = resnet50(pretrained=True)
model.fc = nn.Linear(2048, num_classes)

# Congelar capas excepto última
for name, param in model.named_parameters():
    if 'fc' not in name:
        param.requires_grad = False

optimizer = torch.optim.Adam(filter(lambda p: p.requires_grad, model.parameters()))
```

### TensorFlow/Keras

```python
from tensorflow.keras.applications import ResNet50
from tensorflow.keras import layers, Model

base_model = ResNet50(weights='imagenet', include_top=False)
base_model.trainable = False  # Congelar

x = layers.GlobalAveragePooling2D()(base_model.output)
outputs = layers.Dense(num_classes, activation='softmax')(x)

model = Model(base_model.input, outputs)
model.compile(optimizer='adam', loss='categorical_crossentropy')
```

## Casos de Uso Reales

### Medicina

**Radiología:**
- Fine-tune ImageNet models en rayos X
- Detectar enfermedades específicas

### Legal

**Análisis de documentos:**
- Fine-tune BERT en contratos legales
- Extracción de cláusulas

### E-commerce

**Recomendaciones:**
- Fine-tune en historial de compras
- Descripciones de productos

### Customer Service

**Chatbots:**
- Fine-tune GPT en conversaciones históricas
- Respuestas consistentes con marca

## Futuro del Fine-Tuning

### Tendencias

**Modelos más grandes:**
- GPT-4, PaLM, LLaMA cada vez más grandes
- Fine-tuning más costoso → PEFT más importante

**In-Context Learning:**
- Pocos ejemplos en prompt vs fine-tuning
- Competencia para tareas simples

**Automatic Fine-Tuning:**
- AutoML para fine-tuning
- Búsqueda automática de hiperparámetros

**Multimodal:**
- Fine-tuning de modelos visión + lenguaje
- CLIP, Flamingo, GPT-4V

## Juegos Relacionados

🎮 [Clasificador Visual](/game/visual-classifier) - Experimenta con transfer learning

🎮 [Prompt Engineering](/game/prompt-engineering) - Compara con in-context learning

## Recursos Adicionales

- Hugging Face Fine-Tuning Tutorial
- Fast.ai: Transfer Learning Course
- Stanford CS25: Transformers United
- LoRA: Low-Rank Adaptation Paper
- PEFT Library (Hugging Face)

---

*Anterior: [Procesamiento de Lenguaje Natural](/wiki/procesamiento-lenguaje-natural) | Siguiente: [Agentes Autónomos](/wiki/agentes-autonomos)*
