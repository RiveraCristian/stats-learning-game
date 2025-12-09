# Procesamiento de Lenguaje Natural (NLP)

## Introducción

El **Procesamiento de Lenguaje Natural** (NLP) es el campo de la IA que permite a las máquinas entender, interpretar y generar lenguaje humano. Desde traductores automáticos hasta chatbots y asistentes virtuales, NLP está transformando cómo interactuamos con la tecnología. Es uno de los campos más activos y de rápido avance en IA.

## Conceptos Fundamentales

### ¿Qué es NLP?

Disciplina que combina:
- Lingüística computacional
- Machine Learning
- Deep Learning
- Ciencias cognitivas

**Objetivo:** Cerrar la brecha entre lenguaje humano y comprensión computacional.

### Desafíos del Lenguaje

**Ambigüedad:**
- "Vi al hombre con el telescopio" (¿quién tiene el telescopio?)

**Contexto:**
- "El banco está cerrado" (¿institución financiera o asiento?)

**Variabilidad:**
- Múltiples formas de expresar la misma idea

**Implícito:**
- Sarcasmo, ironía, referencias culturales

**Evolución:**
- Nuevas palabras, slang, modismos

## Niveles de Análisis

### 1. Fonética y Fonología

Estudio de sonidos del habla.

**Aplicación:** Reconocimiento de voz

### 2. Morfología

Estructura de palabras.

**Tareas:**
- Stemming: "corriendo" → "corr"
- Lemmatization: "corriendo" → "correr"

### 3. Sintaxis

Estructura gramatical de oraciones.

**Tareas:**
- Part-of-Speech (POS) Tagging
- Parsing: Árboles sintácticos

### 4. Semántica

Significado de palabras y oraciones.

**Tareas:**
- Word Sense Disambiguation
- Named Entity Recognition (NER)

### 5. Pragmática

Uso del lenguaje en contexto.

**Aspectos:**
- Intención del hablante
- Conocimiento compartido
- Implicaturas

### 6. Discurso

Análisis más allá de oraciones individuales.

**Tareas:**
- Coreference Resolution
- Discourse Parsing

## Tareas Principales de NLP

### Text Classification

Categorizar textos.

**Ejemplos:**
- Análisis de sentimientos (positivo/negativo/neutral)
- Detección de spam
- Clasificación de noticias por tema
- Moderación de contenido

### Named Entity Recognition (NER)

Identificar entidades en texto.

**Tipos:**
- Personas
- Lugares
- Organizaciones
- Fechas, cantidades

**Ejemplo:**
"Steve Jobs fundó Apple en California"
- Steve Jobs: PERSONA
- Apple: ORGANIZACIÓN
- California: LUGAR

### Machine Translation

Traducir entre idiomas automáticamente.

**Evolución:**
- Rule-based → Statistical → Neural MT
- Google Translate, DeepL

### Question Answering

Responder preguntas en lenguaje natural.

**Tipos:**
- Extractive: Extraer respuesta del texto
- Abstractive: Generar respuesta

**Ejemplos:** Siri, Alexa, ChatGPT

### Text Summarization

Generar resúmenes de textos largos.

**Tipos:**
- Extractive: Seleccionar oraciones clave
- Abstractive: Generar nuevo texto

### Text Generation

Generar texto coherente.

**Aplicaciones:**
- Autocompletado
- Generación de contenido
- Chatbots
- Escritura creativa

**Modelos:** GPT-3, GPT-4, Claude

### Information Extraction

Extraer información estructurada de texto no estructurado.

**Tareas:**
- Relaciones entre entidades
- Eventos
- Atributos

### Sentiment Analysis

Determinar emoción o opinión en texto.

**Niveles:**
- Documento
- Oración
- Aspecto (opiniones sobre características específicas)

## Técnicas Tradicionales

### Bag of Words (BoW)

Representar documento como conjunto de palabras.

**Limitaciones:**
- Pierde orden
- Ignora contexto

### TF-IDF

Term Frequency - Inverse Document Frequency

```
TF-IDF(palabra) = TF × IDF
```

**Ventaja:** Da más peso a palabras distintivas.

### N-grams

Secuencias de n palabras consecutivas.

**Ejemplos:**
- Unigram: "el", "gato"
- Bigram: "el gato"
- Trigram: "el gato negro"

### Regular Expressions

Patrones para buscar/extraer información.

**Uso:** Extracción de emails, teléfonos, fechas.

## Word Embeddings

Representaciones vectoriales densas de palabras que capturan significado semántico.

### Word2Vec

**Arquitecturas:**
- CBOW (Continuous Bag of Words)
- Skip-gram

**Idea:** Palabras similares tienen vectores similares.

**Ejemplo:**
```
king - man + woman ≈ queen
```

### GloVe

Global Vectors for Word Representation.

Basado en matriz de co-ocurrencia de palabras.

### FastText

Extensión de Word2Vec considerando subwords.

**Ventaja:** Maneja palabras fuera de vocabulario.

## Modelos de Lenguaje

### RNN (Recurrent Neural Networks)

Procesan secuencias manteniendo estado oculto.

**Problema:** Vanishing gradient en secuencias largas.

### LSTM y GRU

Variantes de RNN que manejan mejor dependencias largas.

**Uso:** Traducción, generación de texto

### Transformers

Arquitectura revolucionaria basada en mecanismo de atención.

**Ventajas:**
- Paralelizable
- Captura dependencias largas
- State-of-the-art en NLP

**Componentes:**
- Self-Attention
- Multi-Head Attention
- Positional Encoding
- Feed-Forward Networks

## Modelos de Lenguaje Grandes (LLMs)

### BERT (Bidirectional Encoder Representations from Transformers)

**Características:**
- Bidireccional
- Pre-entrenado en masked language modeling
- Fine-tuning para tareas específicas

**Uso:** Question answering, NER, classification

### GPT (Generative Pre-trained Transformer)

**Características:**
- Autoregresivo (genera palabra por palabra)
- Pre-entrenado en predicción de siguiente palabra
- Modelos: GPT-2, GPT-3, GPT-4

**Capacidades:**
- Generación de texto
- Few-shot learning
- Zero-shot tasks

### T5 (Text-to-Text Transfer Transformer)

Todo como tarea text-to-text.

**Ejemplo:**
- Traducción: "translate English to Spanish: Hello" → "Hola"

### Otros LLMs

- **PaLM (Google):** 540B parámetros
- **LLaMA (Meta):** Open source
- **Claude (Anthropic):** Enfocado en seguridad
- **Gemini (Google):** Multimodal

## Tokenización

Dividir texto en unidades (tokens).

### Tipos

**Word Tokenization:**
```
"Hello world" → ["Hello", "world"]
```

**Subword Tokenization (BPE, WordPiece):**
```
"unwrapping" → ["un", "wrap", "ping"]
```

**Ventaja:** Vocabulario más pequeño, maneja palabras raras.

**Character Tokenization:**
```
"Hello" → ["H", "e", "l", "l", "o"]
```

## Fine-Tuning

Adaptar modelo pre-entrenado a tarea específica.

**Proceso:**
1. Cargar modelo pre-entrenado
2. Entrenar en dataset específico
3. Ajustar solo últimas capas (o todas)

**Ventaja:** Requiere menos datos y tiempo.

## Prompt Engineering

Diseñar inputs para obtener mejores outputs de LLMs.

**Técnicas:**
- **Zero-shot:** Sin ejemplos
- **Few-shot:** Con ejemplos
- **Chain-of-thought:** Razonamiento paso a paso
- **Self-consistency:** Múltiples generaciones

## Aplicaciones del Mundo Real

### Asistentes Virtuales

- Siri, Alexa, Google Assistant
- Entender comandos por voz
- Responder preguntas

### Chatbots

- Atención al cliente
- Soporte técnico
- Conversaciones generales (ChatGPT)

### Traducción

- Google Translate
- DeepL
- Traducción simultánea

### Análisis de Redes Sociales

- Sentiment analysis de tweets
- Detección de tendencias
- Moderación de contenido

### Salud

- Extracción de información de registros médicos
- Asistentes para diagnóstico
- Análisis de literatura médica

### Legal

- Revisión de contratos
- Búsqueda de precedentes
- Redacción asistida

### Educación

- Corrección automática
- Tutores virtuales
- Generación de materiales

## Desafíos Actuales

❌ **Bias:** Reproducir sesgos de datos de entrenamiento
❌ **Alucinaciones:** Generar información falsa con confianza
❌ **Idiomas de bajos recursos:** Pobre desempeño en idiomas menos comunes
❌ **Interpretabilidad:** Difícil entender decisiones
❌ **Contexto limitado:** Ventana de contexto finita
❌ **Costo computacional:** Entrenar LLMs es muy costoso

## Métricas de Evaluación

### BLEU (Bilingual Evaluation Understudy)

Para traducción automática.

Compara n-grams con referencias.

### ROUGE (Recall-Oriented Understudy for Gisting Evaluation)

Para summarization.

Mide overlap con resumen de referencia.

### Perplexity

Para modelos de lenguaje.

Mide qué tan "sorprendido" está el modelo.

### Human Evaluation

A menudo necesaria para tareas generativas.

## Recursos y Herramientas

### Librerías Python

**NLTK:**
- Natural Language Toolkit
- Herramientas clásicas de NLP

**spaCy:**
- Industrial-strength NLP
- Rápido y eficiente

**Hugging Face Transformers:**
- Acceso a modelos pre-entrenados
- Fine-tuning fácil

**Gensim:**
- Word embeddings
- Topic modeling

### Datasets

- **GLUE:** Benchmark de tareas de NLP
- **SQuAD:** Question answering
- **IMDb:** Sentiment analysis
- **Common Crawl:** Corpus web masivo

## Juegos Relacionados

🎮 [NLP Challenge](/game/nlp-challenge) - Practica tokenización y análisis de texto

🎮 [Prompt Engineering](/game/prompt-engineering) - Mejora prompts para LLMs

## Recursos Adicionales

- Speech and Language Processing (Jurafsky & Martin)
- Natural Language Processing with Python (NLTK Book)
- Hugging Face Course
- fast.ai NLP
- Stanford CS224N: NLP with Deep Learning

---

*Anterior: [IA Débil vs Fuerte](/wiki/ia-debil-vs-fuerte) | Siguiente: [Fine-Tuning de Modelos](/wiki/fine-tuning-modelos)*
