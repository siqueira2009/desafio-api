import fs from 'fs';
import * as services from '../models/userModel.js';

const jsonPath = './src/data/usuarios.json'

// Função para GET em usuarios
export function getUsuarios() {
    try { // Primeiro tenta...
        // Ler o que está no arquivo JSON
        const data = fs.readFileSync(jsonPath, 'utf-8');

        // Depois transforma esse arquivo em objeto entendível para o JS
        const result = JSON.parse(data);

        return result; // Retorna esse resultado
    } catch (error) { // Em caso de erro, joga o mesmo para o controllers
        throw error;
    }
}

// Função para PUT em usuarios
export function putUsuarios(body) {
    try { // Primeiro tenta...
        if (!body.name || !body.band) {
            // Se for errado, retorna error
            throw new Error('Missing name or band');
        }

        let data = getUsuarios(); // Pegar todos os dados atuais
        const user = services.userModel(data.length + 1, body.name, body.band); // Criar novo usuário usando o modelo
        data.push(user); // Adicionar esse usuário junto aos existentes

        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8'); // Reescrever o arquivo todo com os dados atualizados

        return true; // Retorna true (sucesso)
    } catch (error) { // Em caso de erro...
        throw error; // Joga o erro para o controller
    }
}