// Importação de dependências
import express from 'express';
import * as controllers from '../controllers/api.js'; // Pega todos os controllers

const router = express.Router(); // Cria um Router

// Cria as URIs dos routers, chamando funções para cada um
router.get('/', controllers.getApi);

// Exporta esse Router para ser usado no arquivo do servidor
export default router;