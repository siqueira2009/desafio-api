# Desafio API

Este repositório contém **duas implementações da mesma API REST**, desenvolvidas em Node.js como exercício comparativo entre o uso do framework Express e o módulo HTTP nativo do Node.js.

---

## 📁 Estrutura da branch `main`
 
```
desafio-api/
├── express/       → API construída com Express.js  (porta 3001)
└── node-puro/     → API construída com Node.js puro (porta 3000)
```
 
| Branch | Descrição |
|---|---|
| [`express`](https://github.com/siqueira2009/desafio-api/tree/express) | Implementação com Express.js |
| [`node-puro`](https://github.com/siqueira2009/desafio-api/tree/node-puro) | Implementação com Node.js puro |
 
Ambas expõem exatamente as mesmas rotas e comportamentos, diferindo apenas na forma de implementação interna.

---

## 🚀 Como executar

### Express

```bash
cd express
npm install
node server.js
# Servidor disponível em http://localhost:3001
```

### Node Puro

```bash
cd node-puro
npm start
# Servidor disponível em http://localhost:3000
```

---

## 🛣️ Rotas

As rotas são idênticas nas duas implementações:
- Express → `http://localhost:3001`
- Node Puro → `http://localhost:3000`

---

### `GET /`

Retorna uma mensagem de boas-vindas.

**Resposta:**
```json
"Olá, aluno!"
```

---

### `GET /sobre`

Retorna uma descrição pessoal do autor.

**Resposta:**
```json
"My name is Lucas and I love programming, gaming, listening to heavy metal and watching movies. I'm currently doing a technician about system development at ETEC Bento Quirino."
```

---

### `GET /api`

Retorna o nome do autor da API.

**Resposta:**
```json
"Lucas de Souza Siqueira"
```

---

### `GET /usuarios`

Retorna a lista completa de usuários cadastrados no arquivo JSON.

**Resposta:**
```json
[
  { "id": 1, "nome": "James Hetfield", "banda": "Metallica" },
  { "id": 2, "nome": "Lars Ulrich",    "banda": "Metallica" },
  ...
]
```

---

### `PUT /usuarios`

Adiciona um novo usuário à lista.

**Body (JSON):**
```json
{
  "name": "Nome do usuário",
  "band": "Nome da banda"
}
```

> ⚠️ Os campos `name` e `band` são obrigatórios. A ausência de qualquer um deles retorna erro.

**Resposta de sucesso (Express):**
```
Status 200
```

**Resposta de sucesso (Node Puro):**
```json
{ "success": true }
```

---

## 🔍 Diferenças de implementação

| Aspecto | Express | Node Puro |
|---|---|---|
| Framework | Express 5 | `http` nativo |
| Roteamento | `express.Router()` por arquivo | Função única com condicionais |
| Porta padrão | 3001 | 3000 |
| Leitura do body | `express.json()` (middleware) | Leitura manual do stream |

---

## 👤 Autor

<div align="center">

Atividade feita por **Lucas Siqueira** para a matéria de PWII do professor **Rafael Cruz**

[![GitHub](https://img.shields.io/badge/GitHub-siqueira2009-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/siqueira2009)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucasdesouzasiqueira-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasdesouzasiqueira/)
 
</div>
