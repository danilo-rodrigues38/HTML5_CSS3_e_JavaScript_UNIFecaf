/**
 * Objetivo: API para retornar dados dos Estados
 * Autor: Danilo Rodrigues de Oliveira
 *        Kaleo Vieira Leite
 * Data: 19/05/2023
 * Versão: 0.0.1
 */

/**
 * Pacotes necessários para criar uma API no node.
 * npm install express --save
 * npm install cors --save
 * npm install body-parser --save
 * 
 * Para reinstalar todo o projeto, rodar o comando: npm i
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    app.use(cors());

    next();
});

app.get("/uf", async function(request, response){
    let estados = require("./modulo/estados_cidades.js");
    let estadosCidades = estados.getEstadositem();

    if (estados) {
        response.status(200);
        response.json(estadosCidades);
    } else {
        response.status(404);
        response.json();
    }
});

app.get("/estados", async function(request, response){
    let siglaDoEstado = request.query.sigla;
    let estados = require("./modulo/estados_cidades.js");
    let estadosCidades = estados.getEstadosNome(siglaDoEstado);

    if (estados) {
        response.status(200);
        response.json(estadosCidades);
    } else {
        response.status(404);
        response.json();
    }
});


app.get("/capital", async function(request, response){
    let siglaDoEstado = request.query.sigla;
    let estados = require("./modulo/estados_cidades.js");
    let estadosCidades = estados.getCapital(siglaDoEstado);

    if (estados) {
        response.status(200);
        response.json(estadosCidades);
    } else {
        response.status(404);
        response.json();
    }
});

app.get("/regiao", async function(request, response){
    let 
});

app.listen(8080, function(){
    console.log("Servidor aguardando requisição na porta 8080.");
});