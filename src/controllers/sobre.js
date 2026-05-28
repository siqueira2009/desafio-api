import * as services from '../services/sobre.js';

// Função de GET em sobre
export async function getSobre(req, res) {
    try { // Primeiro tenta
        const response = await services.getSobre(); // Pegar a resposta usando o service

        return res.status(200).json({"success": true, "response": response}); // Devolver essa resposta
    } catch (error) { // Caso dê erro...
        console.error(`[GET /sobre] Error: ${error}`); // Mostra o erro

        return res.status(500).json({"success": false, "error": String(error)}); // Retorna erro
    }
}