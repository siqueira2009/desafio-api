import * as services from '../services/usuarios.js';

// Função para GET em usuarios
export async function getUsuarios(req, res) {    
    try { // Tenta chamar o service
        const response = await services.getUsuarios(); // Tenta pegar a resposta
        
        return res.status(200).json({"success": true, "response": response}); // Retorna a resposta
    } catch (error) { // Se der error, printa e retorna falso
        console.error(`[GET /usuarios] Error: ${error}`);

        return res.status(500).json({"success": false, "error": String(error)}); // Retorna erro
    }
}

// Função para PUT em usuarios
export async function putUsuarios(req, res) {
    try {
        const body = req.body;
        const respose = await services.putUsuarios(body);

        return res.status(200).json({"success": true});
    } catch (error) {
        console.error(`[PUT /usuarios] Error: ${error}`);

        return res.status(500).json({"success": false, "error": String(error)});
    }
}