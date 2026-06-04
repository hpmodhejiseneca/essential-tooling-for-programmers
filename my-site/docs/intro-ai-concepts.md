---
sidebar_position: 10
---

# Introduction to Artificial Intelligence

## What is Artificial Intelligence?

**Artificial Intelligence (AI)** is the ability of machines to perform tasks that typically require human intelligence — teaching computers to "think" and make decisions like humans do.

### Real-Life Example: Your Smartphone

When you ask Siri or Google Assistant "What's the weather like today?", the AI system:
- Understands your spoken words (speech recognition)
- Figures out what you're asking for (natural language processing)
- Finds the weather information
- Responds back in human language

---

## Brief History of AI

| Year | Event |
|---|---|
| 1950 | Alan Turing proposes the Turing Test |
| 1997 | IBM's Deep Blue defeats world chess champion Garry Kasparov |
| 2011 | IBM's Watson defeats Jeopardy! champions |
| 2012 | AlexNet neural network achieves 85% accuracy on ImageNet |
| 2016 | Google's AlphaGo defeats Go world champion Lee Sedol |
| 2018 | OpenAI releases GPT-1 |
| 2020 | GPT-3 amazes the public with human-like text generation |
| 2022 | ChatGPT reaches 100 million users in 2 months |
| 2023 | GPT-4 introduces multimodal AI (text + images) |

---

## AI vs. Human Intelligence

### What AI Does Well
- **Speed:** Can process millions of pieces of information in seconds
- **Consistency:** Never gets tired or makes mistakes due to fatigue
- **Memory:** Never forgets information once learned
- **Pattern Recognition:** Great at finding patterns in large amounts of data

### What Humans Do Better
- **Creativity:** Coming up with truly new ideas
- **Emotional Intelligence:** Understanding feelings and social situations
- **Common Sense:** Knowing that ice cream melts in hot weather
- **Flexibility:** Adapting to completely new situations

---

## Algorithms

An **algorithm** is a step-by-step set of instructions to solve a problem.

### Simple Algorithm Example: Making Toast

```
1. Get bread slice
2. Put bread in toaster
3. Set timer for 2 minutes
4. Press start button
5. Wait for timer
6. Remove toast
7. Add butter if desired
```

AI systems follow very complex algorithms, but the concept is the same — detailed instructions for solving problems.

---

## Tokens — How AI Understands Language

**Tokens** are the basic building blocks that AI uses to understand and process text.

### What is a Token?

- A token is usually a word, part of a word, or a punctuation mark
- Not always whole words — sometimes one word becomes multiple tokens

### Examples of Tokenization

**Sentence:** "I love pizza!"
**Tokens:** ["I", "love", "pizza", "!"] = 4 tokens

**Sentence:** "The artificial intelligence system"
**Tokens:** ["The", "art", "ificial", "intel", "ligence", "system"] = 6 tokens

### Token Limits in AI Systems

Context Window (Per Conversation):
- **GPT-4:** Can process about 128,000 tokens per conversation (~96,000 words)
- **Claude:** Can process about 200,000 tokens (~150,000 words)

### Why Token Count Matters

- **Cost:** Many AI services charge by token usage
- **Context Window:** AI can only "remember" a limited number of tokens per conversation

### Token Efficiency in Different Languages

- **English:** Generally efficient (most words = 1-2 tokens)
- **Chinese:** Each character might be 1 token
- **German:** Long compound words become many tokens

---

## Hardware — The Engine Behind AI

### CPU vs GPU

#### CPU (Central Processing Unit) — The "Smart Manager"

- **4-16 cores** (individual processing units)
- Each core is very powerful — handles complex instructions
- Optimized for single-thread performance
- **Analogy:** CEO of a company — makes complex strategic decisions, handles multiple different types of problems

#### GPU (Graphics Processing Unit) — The "Massive Workforce"

- **2,000-10,000+ cores** (simple processing units)
- Optimized for parallel processing
- High memory bandwidth for moving large amounts of data
- **Analogy:** Factory assembly line — thousands of workers doing simple, repetitive tasks, incredibly productive at volume work

#### Why AI Prefers GPUs

| Approach | Time to Train Cat Recognizer |
|---|---|
| CPU (sequential) | ~6 months |
| GPU (parallel) | ~2 weeks |

### Specialized AI Hardware

**TPUs (Tensor Processing Units):** Built specifically for AI by Google. 128,000+ tiny processors on one chip, 10x more energy-efficient than GPUs for AI tasks. Powers Google Search, Google Translate, and Google Photos.

**NPUs (Neural Processing Units):** On-device AI in your phone/laptop. Process AI tasks locally — 100x less power than sending data to cloud. Examples: Apple A17 Pro chip (Face ID, portrait mode), Qualcomm Snapdragon (real-time translation).

### Training vs Inference

| Phase | What Happens | Hardware Need |
|---|---|---|
| **Training** | AI learns from millions of examples | Massive — weeks/months of compute |
| **Inference** | AI uses trained knowledge to answer | Much less — must respond in milliseconds |

---

## Types of AI and Machine Learning

**Machine Learning** is a way for computers to learn patterns from examples, rather than being programmed with specific instructions.

### Three Types of Machine Learning

#### Supervised Learning
- Learn from examples with correct answers
- **Example:** Email spam detection — show the AI 10,000 emails labelled as "spam" or "not spam," it learns to identify spam in new emails

#### Unsupervised Learning
- Find hidden patterns in data without being told what to look for
- **Example:** Customer grouping — AI discovers customers naturally fall into groups like "budget shoppers" or "luxury buyers"

#### Reinforcement Learning
- Learn through trial and error, getting rewards for good actions
- **Example:** Learning to play a video game — AI tries random moves, gets points for good moves, gradually learns winning strategies
- This is how AI learned to play chess and Go at superhuman levels

---

## Neural Networks — The Brain of AI

**Neural Networks** are AI systems inspired by how the human brain works. Just like your brain has billions of connected nerve cells, artificial neural networks have artificial "neurons" that work together to solve problems.

### The Basic Structure

**Input Layer → Hidden Layers → Output Layer**

### Example: Recognizing a Cat in a Photo

1. **Input Layer:** Receives the photo as millions of numbers (pixel values)
2. **Hidden Layers:**
   - Layer 1: Detects basic shapes (lines, curves, edges)
   - Layer 2: Combines shapes into patterns (eyes, ears, whiskers)
   - Layer 3: Recognizes features (cat face, cat body)
3. **Output Layer:** Final decision: "This is a cat" (with 95% confidence)

### The Learning Process

1. Show the network 100,000 photos labelled "cat" or "not cat"
2. Network makes guesses (mostly wrong at first)
3. When wrong, it adjusts its internal connections
4. Repeat millions of times until it gets good at recognizing cats

### Deep Learning

**Deep Learning** is neural networks with many layers (usually more than 3 hidden layers).

- **Shallow Network:** Can recognize objects in scenes
- **Deep Network:** Can understand plot, emotions, relationships between characters

**What makes deep learning powerful:**
1. Automatic feature detection — figures out what's important without human help
2. Handles complex data — images, text, sound, and video
3. Improves with more data — gets better as you give it more examples

---

## AI in Everyday Life

### Your Smartphone — An AI Powerhouse

**Camera:**
- Portrait Mode: AI separates you from background in real-time
- Night Mode: AI combines multiple photos for clear images in darkness
- Object Recognition: Identifies plants, animals, text, and landmarks
- Live Translation: Point camera at foreign text for instant translation

**Voice and Text:**
- Autocorrect: AI predicts and fixes typos
- Voice Recognition: Converts speech to text
- Predictive Text: Suggests next words based on your writing style
- Voice Assistants: Understand natural language and context

### Social Media and Entertainment

Netflix's recommendation engine tracks what you watch, when you pause, and what you skip to create a personalized homepage. AI even chooses which movie poster image you see based on your preferences.

### Shopping and Commerce

- **Visual Search:** Take photo of item and find similar products online
- **Size Recommendations:** AI analyses body measurements and brand sizing
- **Chatbots:** Handle customer service inquiries without human intervention

---

### Final Thought

Artificial Intelligence is not just a technology — it's a tool that amplifies human capability. The future will be shaped not by AI replacing humans, but by humans and AI working together to solve problems, create new possibilities, and improve life for everyone.

The field of AI is evolving rapidly. Stay curious, stay informed, and be part of shaping our AI-enhanced future!
