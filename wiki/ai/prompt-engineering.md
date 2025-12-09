# Prompt Engineering

## ¿Qué es?

**Prompt Engineering** es el arte y ciencia de diseñar instrucciones (prompts) efectivas para obtener los mejores resultados de modelos de IA generativa como ChatGPT, Claude, o GPT-4.

## Importancia

Un buen prompt puede ser la diferencia entre:
- ❌ Respuesta genérica y poco útil
- ✅ Respuesta precisa, detallada y accionable

## Componentes de un Buen Prompt

### 1. Contexto
Proporciona información relevante:
```
"Eres un experto en nutrición deportiva..."
```

### 2. Tarea
Especifica qué quieres:
```
"Crea un plan de alimentación de 7 días..."
```

### 3. Formato
Indica cómo quieres la respuesta:
```
"Preséntalo en formato de tabla..."
```

### 4. Restricciones
Define límites:
```
"Máximo 2000 calorías diarias, sin lácteos..."
```

## Técnicas Avanzadas

### Zero-Shot
Pedir sin ejemplos
```
"Clasifica este texto como positivo o negativo: ..."
```

### Few-Shot
Dar ejemplos antes
```
Positivo: "Me encanta"
Negativo: "Es horrible"
Clasifica: "Está bien"
```

### Chain of Thought
Pedir razonamiento paso a paso
```
"Resuelve este problema paso a paso, mostrando tu razonamiento..."
```

## Mejores Prácticas

1. ✅ Sé específico y claro
2. ✅ Usa delimitadores (""", ---)
3. ✅ Itera y refina
4. ✅ Pide validación
5. ❌ No asumas conocimiento implícito

## Ejemplo Práctico

❌ **Mal prompt:**
```
"Escribe código"
```

✅ **Buen prompt:**
```
"""
Eres un desarrollador senior en Python.

Crea una función que:
1. Reciba una lista de números
2. Calcule la media y mediana
3. Retorne ambos valores en un diccionario

Requisitos:
- Usa type hints
- Incluye docstring
- Maneja listas vacías con excepción
- Agrega 3 tests unitarios con pytest
"""
```

## Juego

🎮 [Prompt Engineering Challenge](/game/prompt-engineering) - Mejora tus habilidades

---

*Relacionado: [¿Qué son los LLMs?](/wiki/que-son-llms)*
