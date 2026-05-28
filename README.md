# Desafio API - Express

Implementação da API REST utilizando **Express.js**.

> Veja também a implementação em [Node.js puro](https://github.com/siqueira2009/desafio-api/tree/node-puro) ou volte para a [branch principal](https://github.com/siqueira2009/desafio-api/tree/main).

---

## 🚀 Como executar

```bash
npm install
node server.js
# Servidor disponível em http://localhost:3001
```

---

## 🛣️ Rotas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Mensagem de boas-vindas |
| `GET` | `/sobre` | Descrição do autor |
| `GET` | `/api` | Nome do autor |
| `GET` | `/usuarios` | Lista todos os usuários |
| `PUT` | `/usuarios` | Adiciona um novo usuário |

### `PUT /usuarios` - Body esperado

```json
{
  "name": "Nome do usuário",
  "band": "Nome da banda"
}
```
> ⚠️ Os campos `name` e `band` são obrigatórios. A ausência de qualquer um deles retorna erro.

---

## 👤 Autor

<div align="center">

**Lucas de Souza Siqueira**

[![GitHub](https://img.shields.io/badge/GitHub-siqueira2009-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/siqueira2009)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucasdesouzasiqueira-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasdesouzasiqueira/)

</div>