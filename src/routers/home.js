// Importação de dependências
import express from 'express';
import * as controllers from '../controllers/home.js'; // Pega todos os controllers

const router = express.Router(); // Cria um Router

// Cria as URIs dos routers, chamando funções para cada um
router.get('/', controllers.getHome);

// Exporta esse Router para ser usado no arquivo do servidor
export default router;