// Importação de dependências
import express from 'express';
import * as controllers from '../controllers/sobre.js'

const router = express.Router(); // Cria um Router

// Cria as URIs dos routers, chamando funções para cada um
router.get('/', controllers.getSobre);

// Exporta esse Router para ser usado no arquivo do servidor
export default router;