// Importa todos os services
import * as services from '../services/home.js';

// Função para GET em homepage
export function getHome(req, res) {
    try { // Tenta chamar o service
        const response = services.getHome();
    
        return response;
    } catch (error) { // Se der error, printa e retorna falso
        console.error(`[GET /] Error: ${error}`);

        return false;
    }
}