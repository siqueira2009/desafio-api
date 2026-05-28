// Importação de dependências
import express from 'express';

// Importações de Routers
import routerHome from './src/routers/home.js';
import routerSobre from './src/routers/sobre.js';
import routerApi from './src/routers/api.js';
import routerUsuarios from './src/routers/usuarios.js';

// Criação do servidor
const app = express();
app.use(express.json()); // Lê somente os corpos de tipo 'application/json'

// Redireciona as rotas para os Routers
app.use('/', routerHome);
app.use('/sobre', routerSobre);
app.use('/api', routerApi);
app.use('/usuarios', routerUsuarios);

// Coloca o servidor de pé (para ouvir)
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`☑️  Servidor rodando em http://localhost:${PORT}`);
})