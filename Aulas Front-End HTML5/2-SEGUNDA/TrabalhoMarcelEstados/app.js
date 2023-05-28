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

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    app.use(cors());

    next();
});

app.get("/uf", cors(), async function(request, response){
    let siglaDoEstado = request.query.sigla;
    let estadosCidades;
    let estados = require("./modulo/estados_cidades.js");

    if (siglaDoEstado != "" && siglaDoEstado != undefined){
        estadosCidades = estados.getEstadosNome(siglaDoEstado);
    } else {
        estadosCidades = estados.getEstadositem();
    }

    if (estados) {
        response.status(200);
        response.json(estadosCidades);
    } else {
        response.status(404);
        response.json();
    }
});








app.listen(8080, function(){
    console.log("Servidor aguardando requisição na porta 8080.");
});