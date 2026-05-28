// Importa todos os services
import * as services from '../services/usuarios.js';

// Função para ler o body da requisição
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Se body estiver vazio, retorna um objeto vazio para evitar JSON.parse error
                const parsed = body ? JSON.parse(body) : {};
                resolve(parsed);
            } catch (err) {
                reject(err);
            }
        });
    });
};


// Função para GET em usuarios
export function getUsuarios(req, res) {
    try { // Tenta chamar o service
        const response = services.getUsuarios();
    
        return response;
    } catch (error) { // Se der erro, printa e retorna falso
        console.error(`[GET /usuarios] Error: ${error}`);

        return false;
    }
}

// Função para PUT em usuarios
export async function putUsuarios(req, res) {
    try { // Tenta...
        // Ler o body
        const body = await getRequestBody(req);

        // Depois chamar o service mandando esse body como parâmetro
        const response = services.putUsuarios(body);
    
        return response;
    } catch (error) { // Se der erro, printa e retorna falso
        console.error(`[PUT /usuarios] Error: ${error}`);

        return false;
    }
}