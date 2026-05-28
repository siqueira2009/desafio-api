import * as services from '../services/api.js';

// Função para GET em api
export async function getApi(req, res) {    
    try { // Tenta chamar o service
        const response = await services.getApi(); // Tenta pegar a resposta
        
        return res.status(200).json({"success": true, "response": response}); // Retorna a resposta
    } catch (error) { // Se der error, printa e retorna falso
        console.error(`[GET /] Error: ${error}`);

        return res.status(500).json({"success": false, "error": String(error)}); // Retorna erro
    }
}