# RAG Systems

## Introducción

**RAG (Retrieval-Augmented Generation)** es una técnica revolucionaria que combina la búsqueda de información con la generación de texto. Permite a los modelos de lenguaje acceder a conocimiento externo actualizado sin necesidad de reentrenamiento.

## ¿Qué es RAG?

RAG es una arquitectura que mejora los LLMs (Large Language Models) al darles acceso a una base de conocimientos externa.

### Componentes Principales

```
Query → [Retrieval] → Documentos Relevantes → [LLM] → Respuesta
```

1. **Retrieval**: Buscar información relevante
2. **Augmentation**: Agregar contexto al prompt
3. **Generation**: Generar respuesta basada en contexto

## ¿Por Qué RAG?

### Problemas de LLMs Tradicionales

#### 1. Conocimiento Limitado
- Entrenados hasta una fecha de corte
- No saben eventos recientes
- **Ejemplo**: GPT-4 no sabe noticias de hoy

#### 2. Alucinaciones
- Inventan información que suena plausible
- No pueden verificar hechos
- **Riesgo**: Información incorrecta presentada con confianza

#### 3. Conocimiento Específico
- No tienen acceso a datos propietarios
- No conocen documentos internos de empresas
- **Limitación**: No pueden responder sobre tu base de datos

#### 4. Costo de Actualización
- Reentrenar es extremadamente caro
- Requiere millones de dólares y meses
- **Problema**: Conocimiento queda obsoleto

### Solución: RAG

✅ **Conocimiento actualizado**: Acceso a información reciente
✅ **Reducción de alucinaciones**: Respuestas basadas en fuentes
✅ **Conocimiento específico**: Puede usar tus documentos
✅ **Costo-efectivo**: No requiere reentrenamiento
✅ **Transparencia**: Puedes ver las fuentes

## Arquitectura de RAG

### Pipeline Completo

```
1. Indexación (Offline)
   Documentos → Chunking → Embeddings → Vector DB

2. Retrieval (Online)
   Query → Embedding → Búsqueda Semántica → Top-K Docs

3. Generation (Online)
   Query + Docs → Prompt → LLM → Respuesta
```

### Paso 1: Indexación

#### Chunking
Dividir documentos en fragmentos manejables.

**Estrategias**:
- **Fixed-size**: 512 tokens por chunk
- **Sentence-based**: Por oraciones completas
- **Semantic**: Por temas/secciones

**Ejemplo**:
```
Documento largo (10,000 palabras)
    ↓
Chunks de 500 palabras
    ↓
20 chunks indexados
```

#### Embeddings
Convertir texto a vectores numéricos.

**Modelos comunes**:
- OpenAI `text-embedding-ada-002`
- Sentence-BERT
- Cohere Embed

**Resultado**:
```
"La IA es fascinante" → [0.23, -0.45, 0.67, ..., 0.12]
                         (vector de 1536 dimensiones)
```

#### Vector Database
Almacenar embeddings para búsqueda rápida.

**Opciones populares**:
- **Pinecone**: Managed, escalable
- **Weaviate**: Open-source, flexible
- **Chroma**: Simple, local
- **FAISS**: Facebook, muy rápido

### Paso 2: Retrieval

#### Búsqueda Semántica

1. **Convertir query a embedding**
```
Query: "¿Cómo funciona RAG?"
    ↓
Embedding: [0.21, -0.43, 0.69, ...]
```

2. **Calcular similitud**
```
Similitud Coseno = (A · B) / (||A|| × ||B||)
```

3. **Retornar Top-K más similares**
```
Top 3 chunks más relevantes
```

#### Métodos de Búsqueda

**Dense Retrieval**:
- Basado en embeddings
- Captura significado semántico
- **Ejemplo**: "auto" encuentra "coche", "vehículo"

**Sparse Retrieval** (BM25):
- Basado en palabras clave
- Búsqueda tradicional
- **Ejemplo**: "auto" solo encuentra "auto"

**Hybrid**:
- Combina dense + sparse
- Mejor de ambos mundos

### Paso 3: Generation

#### Prompt Augmentation

Construir prompt con contexto:

```
Contexto:
[Documento 1]: RAG combina retrieval y generation...
[Documento 2]: Los embeddings son representaciones vectoriales...
[Documento 3]: Vector databases permiten búsqueda rápida...

Pregunta: ¿Cómo funciona RAG?

Responde basándote SOLO en el contexto proporcionado.
```

#### Generación

El LLM genera respuesta usando el contexto:

```
RAG funciona en tres pasos: primero, convierte documentos 
en embeddings y los almacena en una vector database. Segundo, 
cuando llega una pregunta, busca los documentos más relevantes. 
Tercero, usa esos documentos como contexto para generar una 
respuesta precisa.
```

## Ejemplo Práctico

### Caso de Uso: Chatbot de Soporte Técnico

**Problema**: Empresa tiene 1000 documentos de soporte.

**Solución RAG**:

1. **Indexación**:
```python
docs = load_documents("support_docs/")
chunks = split_into_chunks(docs, size=500)
embeddings = embed_chunks(chunks)
vector_db.store(embeddings, chunks)
```

2. **Query del Usuario**:
```
"¿Cómo reseteo mi contraseña?"
```

3. **Retrieval**:
```python
query_embedding = embed("¿Cómo reseteo mi contraseña?")
relevant_docs = vector_db.search(query_embedding, top_k=3)
```

4. **Generation**:
```python
prompt = f"""
Contexto: {relevant_docs}
Pregunta: ¿Cómo reseteo mi contraseña?
Responde basándote en el contexto.
"""
response = llm.generate(prompt)
```

5. **Respuesta**:
```
Para resetear tu contraseña:
1. Ve a la página de login
2. Haz clic en "Olvidé mi contraseña"
3. Ingresa tu email
4. Sigue las instrucciones del correo

[Fuente: Manual de Usuario, p.15]
```

## Ventajas de RAG

### vs Fine-Tuning

| Aspecto | RAG | Fine-Tuning |
|---------|-----|-------------|
| **Costo** | Bajo | Alto ($$$) |
| **Tiempo** | Minutos | Días/Semanas |
| **Actualización** | Instantánea | Requiere reentrenar |
| **Transparencia** | Alta (cita fuentes) | Baja (caja negra) |
| **Datos necesarios** | Cualquier cantidad | Miles de ejemplos |
| **Conocimiento** | Explícito | Implícito |

### Casos de Uso Ideales

✅ **Documentación técnica**: Manuales, APIs, guías
✅ **Knowledge bases**: FAQs, wikis internas
✅ **Investigación**: Papers, artículos científicos
✅ **Legal**: Contratos, regulaciones, casos
✅ **Médico**: Historiales, estudios, protocolos
✅ **Noticias**: Información actualizada

## Desafíos y Soluciones

### 1. Calidad de Retrieval

**Problema**: Recuperar documentos irrelevantes.

**Soluciones**:
- Mejorar chunking strategy
- Usar hybrid search
- Reranking con modelo especializado
- Query expansion

### 2. Contexto Limitado

**Problema**: LLMs tienen límite de tokens (ej: 4K, 8K).

**Soluciones**:
- Chunks más pequeños
- Summarización de documentos largos
- Hierarchical retrieval
- Usar modelos con contexto largo (100K+)

### 3. Alucinaciones Persistentes

**Problema**: LLM inventa información no en el contexto.

**Soluciones**:
- Prompt engineering: "SOLO usa el contexto"
- Verificación de citas
- Confidence scoring
- Human-in-the-loop

### 4. Latencia

**Problema**: Retrieval + Generation es lento.

**Soluciones**:
- Caching de queries comunes
- Async retrieval
- Optimizar vector DB
- Modelos más rápidos

## Técnicas Avanzadas

### 1. Multi-Query RAG

Generar múltiples queries para mejor cobertura:

```
Query original: "¿Qué es RAG?"

Queries generadas:
- "Definición de RAG"
- "Cómo funciona Retrieval-Augmented Generation"
- "Componentes de sistemas RAG"
```

### 2. Hypothetical Document Embeddings (HyDE)

Generar respuesta hipotética, luego buscar:

```
Query: "¿Cómo funciona RAG?"
    ↓
LLM genera respuesta hipotética
    ↓
Buscar documentos similares a la respuesta
```

### 3. Self-RAG

El modelo decide cuándo necesita retrieval:

```
Query → LLM decide si necesita contexto
    ↓
Si sí → Retrieval → Generation
Si no → Generation directa
```

### 4. Iterative RAG

Múltiples rondas de retrieval:

```
Query → Retrieval → Partial Answer
    ↓
Refine Query → Retrieval → Better Answer
    ↓
Repeat until satisfactory
```

## Evaluación de RAG

### Métricas de Retrieval

**Recall@K**: ¿Recuperamos documentos relevantes?
```
Recall@3 = Docs relevantes en top-3 / Total docs relevantes
```

**Precision@K**: ¿Los recuperados son relevantes?
```
Precision@3 = Docs relevantes en top-3 / 3
```

**MRR (Mean Reciprocal Rank)**: Posición del primer relevante

### Métricas de Generation

**Faithfulness**: ¿La respuesta es fiel al contexto?

**Answer Relevance**: ¿Responde la pregunta?

**Context Relevance**: ¿El contexto es relevante?

## Herramientas y Frameworks

### LangChain
Framework popular para RAG:
```python
from langchain import RetrievalQA

qa = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    retriever=vector_store.as_retriever()
)
```

### LlamaIndex
Especializado en RAG:
```python
from llama_index import VectorStoreIndex

index = VectorStoreIndex.from_documents(docs)
query_engine = index.as_query_engine()
```

### Haystack
Pipeline flexible:
```python
from haystack import Pipeline

pipeline = Pipeline()
pipeline.add_node(retriever)
pipeline.add_node(generator)
```

## Casos de Éxito

### 1. Notion AI
- RAG sobre documentos del workspace
- Responde preguntas sobre tus notas
- Cita fuentes específicas

### 2. GitHub Copilot Chat
- RAG sobre documentación de código
- Contexto de tu repositorio
- Sugerencias basadas en tu código

### 3. Perplexity AI
- RAG sobre internet en tiempo real
- Cita fuentes web
- Información actualizada

## Futuro de RAG

### Tendencias

**Multimodal RAG**:
- Retrieval de imágenes, videos, audio
- Generación multimodal

**Agentic RAG**:
- Agentes que deciden qué recuperar
- Múltiples fuentes de datos
- Razonamiento complejo

**Personalized RAG**:
- Adaptado a cada usuario
- Aprende preferencias
- Contexto histórico

## Conclusión

RAG es:
- 🚀 El futuro de LLMs con conocimiento actualizado
- 💡 Más práctico que fine-tuning para muchos casos
- 🎯 Esencial para aplicaciones empresariales
- 🔄 En constante evolución

**Cuándo usar RAG**:
- ✅ Necesitas conocimiento actualizado
- ✅ Tienes documentos específicos
- ✅ Quieres transparencia (citas)
- ✅ Presupuesto limitado

**Cuándo NO usar RAG**:
- ❌ Necesitas cambiar comportamiento del modelo
- ❌ Tarea no requiere conocimiento externo
- ❌ Latencia es crítica

---

*Siguiente: [Agentes Autónomos](/wiki/agentes-autonomos)*
