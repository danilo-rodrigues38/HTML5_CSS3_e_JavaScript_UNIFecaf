/**
 * Objetivo: API para retornar dados de livros
 * Data: 10/04/2023
 * Autor: Danilo Rodrigues de Oliveira
 * Versão: 0.0.1
 */

/**
 * Pacotes necessários para criar uma API no node.
 * npm install express --save
 * npm install cors --save
 * npm install body-parser --save
 * 
 * Para reinstalar todo o projeto rodar o comando: npm i
 */

// Import das dependências do projeto
// Dependência para cria a API.
const express = require("express");
// Dependência para criar as permissões de manipulações da API.
const cors = require("cors");
// Dependência para receber dados no body da requisição.
const bodyParser = require("body-parser");

// Cria o objeto app conforme a classe do express.
const app = express();

// Request - receber dados e encaminhar para API
// Response - retornar dados gerados pela API

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
});



