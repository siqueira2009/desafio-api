// Importa todos os controllers
import * as controllers from '../controllers/controllers.js';

// Função com todas as condições
export default async function routes(req, res) {
    const url = req.url; // Pega a URL
    const method = req.method; // Pega o método

    // Se for GET na homepage...
    if (url == '/' && method == 'GET') {
        // Chama o service de GET na homepage
        const response = controllers.getHome(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 404;
            res.end(JSON.stringify({'error': 'Error when trying to GET /'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': 'Success when trying to GET /', 'response': response}));
        }
    }

    // Se for GET em sobre...
    if (url == '/sobre' && method == 'GET') {
        // Chama o service de GET em sobre
        const response = controllers.getSobre(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 404;
            res.end(JSON.stringify({'error': 'Error when trying to GET /sobre'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': 'Success when trying to GET /sobre', 'response': response}));
        }
    }

    // Se for GET em api...
    if (url == '/api' && method == 'GET') {
        // Chama o service de GET em api
        const response = controllers.getApi(req, res);

        // Dependendo do resultado... 
        if (!response) {
            // Retorna erro
            res.statusCode = 404;
            res.end(JSON.stringify({'error': 'Error when trying to GET /api'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': 'Success when trying to GET /api', 'response': response}));
        }
    }

    // Se for PUT em usuarios
    if (url == '/usuarios' && method == 'PUT') {
        // Chama o service de PUT em usuarios
        const response = await controllers.putUsuarios(req, res);

        // Dependendo da resposta
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'error': 'Error when trying to PUT /usuarios'}));
        } else {
            // Retorna sucesso com a resposta
            res.statusCode = 200;
            res.end(JSON.stringify({'success': 'Success when trying to PUT /usuarios', 'done': response}));
        }
    }

    // Se for GET em usuarios
    if (url == '/usuarios' && method == 'GET') {
        // Chama o service de GET em usuarios
        const response = controllers.getUsuarios(req, res);

        // Dependendo do resultado...
        if (!response) {
            // Retorna erro
            res.statusCode = 500;
            res.end(JSON.stringify({'error': 'Error when trying to GET /usuarios'}));
        } else {
            // Retorna sucesso
            res.statusCode = 200;
            res.end(JSON.stringify({'success': 'Success when trying to GET /usuarios', 'response': response}));
        }
    }
} 