/**
 * Objetivo: API para retornar dados dos Estados
 * Autor: Danilo Rodrigues de Oliveira
 *        Kaleo Vieira Leite
 * Data: 19/05/2023
 * Versão: 0.0.1
 */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET");

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
    let regiaoPais = request.query.regiao;
    let estados = require("./modulo/estados_cidades.js");
    let estadosCidades = estados.getRegiao(regiaoPais);

    if (estados) {
        response.status(200);
        response.json(estadosCidades);
    } else {
        response.status(404);
        response.json();
    }
});

app.get("/cidades", async function(request, response){
    let siglaDoEstado = request.query.sigla;
    let estados = require("./modulo/estados_cidades.js");
    let estadosCidades = estados.getCidades(siglaDoEstado);

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