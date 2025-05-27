### 🎯 Objetivo:

Crie uma API que recebe textos e retorna um **ranking das palavras mais frequentes**. O candidato deverá usar **estruturas de dados apropriadas** para calcular e servir esse ranking.

---

### 📌 Funcionalidades obrigatórias:

### ✅ 1. `POST /text`

- Recebe um corpo JSON com um campo `text`, contendo uma string de texto.
- Armazena esse texto no sistema (em memória).
- Exemplo de payload:

```json
json
CopyEdit
{
  "text": "hoje é um bom dia para aprender back-end com testes técnicos"
}

```

### ✅ 2. `GET /top-words?limit=N`

- Retorna as N palavras mais frequentes, ordenadas da mais para a menos frequente.
- Se `limit` não for fornecido, retorna as top 5.
- Não retornar palavras com menos de 3 letras, como: é, da, de, o, a, etc…
- Resposta esperada:

```json

[
  { "word": "back-end", "count": 1, },
  { "word": "testes", "count": 1 },
  { "word": "técnicos", "count": 1 },
  ...
]

```

---

### ✅ 3. `GET /phrases?word=teste`

- Retorna as frases que uma palavra foi usada

```json
[
	{
		phrase: "esse é um teste",
	},
	{
		phrase: "novo teste",
	}
]
```

### ✅ 4. `GET /text?word=teste&word=novo`

- Receber um array de palavras e retorna as frases que possuam a combinação das palavras escolhidas.

```json
[
	{
		phrase: "novo teste de exemplo",
	},	
	{
		phrase: "teste de exemplo novo",
	}
]
```

Requisitos:

- Armazenar os textos recebidos.
- O código precisa ter a menor complexidade temporal possível.
- Implementação de testes unitários.
- Processar os textos para contar palavras.
- Implementar alguma ordenação.
- Usar normalização de texto (remover pontuação, lower case, etc.).

Ferramentas:

- Typescript (preferencial)
- NodeJS