// Importa todos os services
import * as services from '../services/sobre.js';

// Função para GET em sobre
export function getSobre(req, res) {
    try { // Tenta chamar o service
        const response = services.getSobre();
    
        return response;
    } catch (error) { // Se der erro, printa e retorna falso
        console.error(`[GET /sobre] Error: ${error}`);

        return false;
    }
}