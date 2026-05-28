// Importa todos os controllers
import * as controllersHome from '../controllers/home.js';
import * as controllersSobre from '../controllers/sobre.js';
import * as controllersApi from '../controllers/api.js';
import * as controllersUsuarios from '../controllers/usuarios.js';

// Função com todas as condições
export default async function routes(req, res) {
    const url = req.url; // Pega a URL
    const method = req.method; // Pega o método

    // Se for GET na homepage...
    if (url == '/' && method == 'GET') {
        // Chama o service de GET na homepage
        const response = controllersHome.getHome(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'success': false, 'error': 'Error when trying to GET /'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': true, 'response': response}));
        }
    }

    // Se for GET em sobre...
    if (url == '/sobre' && method == 'GET') {
        // Chama o service de GET em sobre
        const response = controllersSobre.getSobre(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'success': false, 'error': 'Error when trying to GET /sobre'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': true, 'response': response}));
        }
    }

    // Se for GET em api...
    if (url == '/api' && method == 'GET') {
        // Chama o service de GET em api
        const response = controllersApi.getApi(req, res);

        // Dependendo do resultado... 
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'success': false, 'error': 'Error when trying to GET /api'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': true, 'response': response}));
        }
    }

    // Se for PUT em usuarios
    if (url == '/usuarios' && method == 'PUT') {
        // Chama o service de PUT em usuarios
        const response = await controllersUsuarios.putUsuarios(req, res);

        // Dependendo da resposta
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'success': false, 'error': 'Error when trying to PUT /usuarios'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': true}));
        }
    }

    // Se for GET em usuarios
    if (url == '/usuarios' && method == 'GET') {
        // Chama o service de GET em usuarios
        const response = controllersUsuarios.getUsuarios(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'success': false, 'error': 'Error when trying to GET /usuarios'}));
        } else {
            // Retorna sucesso
            res.statusCode = 200;
            res.end(JSON.stringify({'success': true, 'response': response}));
        }
    }
} 