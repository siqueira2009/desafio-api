// Importações de dependências
import http from 'http';
import routes from './src/routes/routes.js';

// Criação do servidor
const server = http.createServer((req, res) => {
    // Configuração do header
    res.writeHead(200, {'Content-Type': 'application/text'});

    // Chama a função de rotas
    routes(req, res);
})

const PORT = 3000; // Configura a porta

// Coloca o servidor para escutar (ficar de pé)
server.listen(PORT, () => {
    console.log(`☑️  Servidor rodando em http://localhost:${PORT}`);
})