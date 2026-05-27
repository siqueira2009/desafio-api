// Importações de dependências
import fs, { readFileSync } from 'fs';

// Importa todos os models
import * as models from '../models/models.js'

// Função para GET em homepage
export function getHome() {
    return "Olá, aluno!"; // Retorna a mensagem simples
}

// Função para GET em sobre
export function getSobre() {
    // Retorna a mensagem de sobre mim
    return "My name is Lucas and love programming, gaming, listening to heavy metal and watching movies. I'm currently doing a technician about system development at ETEC Bento Quirino."
}

// Função para GET em api
export function getApi() {
    return "Lucas Siqueira"; // Retorna meu nomne
}

// Função para GET em usuarios
export function getUsuarios() {
    try { // Primeiro tenta...
        // Ler o que está no arquivo JSON
        const data = fs.readFileSync('./src/data/usuarios.json', 'utf-8');

        // Depois transforma esse arquivo em objeto entendível para o JS
        const result = JSON.parse(data);

        return result; // Retorna esse resultado
    } catch (error) { // Em caso de erro, joga o mesmo para o controllers
        throw error;
    }
}

// Função para PUT em usuarios
export function putUsuarios(body) {
    try { // Primeiro tenta executar um código...
        //... que vê se o body é válido
        if (!body.name || !body.band) {
            // Se for errado, retorna error
            throw new Error('Missing name or band');
        }

        // Pega o JSON atual
        let data = getUsuarios();

        // Cria um novo usuário usando a função de modelo
        const user = models.userModel(data.length + 1,body.name, body.band);

        // Adiciona o novo usuário no Array
        data.push(user);

        // Edita o arquivo escrevendo o Array novo
        fs.writeFileSync('./src/data/usuarios.json', JSON.stringify(data, null, 2), 'utf-8');

        return true; // Retorna sucesso
    } catch (error) { // Em caso de erro, joga o mesmo para o controller
        throw error;
    }
}