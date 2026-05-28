// Importa todos os services
import * as services from '../services/api.js';

// Função para GET em api
export function getApi(req, res) {
    try { // Tenta chamar o service
        const response = services.getApi();
    
        return response;
    } catch (error) { // Se der erro, printa e retorna falso
        console.error(`[GET /api] Error: ${error}`);

        return false;
    }
}