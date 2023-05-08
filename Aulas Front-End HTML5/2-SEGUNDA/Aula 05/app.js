/****************************************************************************
 * Objetivo: Criar uma API para manipular o Banco de Dados
 * Data: 08/05/2023
 * Autor: Danilo Rodrigues de Oliveira
 * Versão: 1.0.0
 * 
 * Para criar a API devemos instalar os seguintes pacotes
 *      * npm install axpress --save
 *      * npm install cors --save
 *      * npm install body-parse --save
 * 
 * Para criar a conexão como Banco de Dados devemos instalar os seguintes pacotes
 *      * npm install prisma --save // Realiza a instalação do PRISMA ORM.
 *      * npx prisma // Permite verificar se o PRISMA ORM foi instalado.
 *      * npx prisma init // Permite inicializa a utilização do PRISMA na API.
 *              (Cria uma pasta chamada prisma, um arquivo chamado env, um arquivo chamado gitignore).
 *      * npm install @prisma/client --save // Instala o cliente ára manipular os scriptsSQL
 ***********************************************************************************************/

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
// Especifica as permissões para a requisição da API
app.use((request, response, next) => {
    // Atribui no cabeçalho da requisição a permição de quem poderá requisitar a APT (o "*" significa que qualquer requisição será aceita). Caso seja uma API privada, severá ser incerido o IP de quem vai requisitar.
    response.header("Access-Control-Allow-Origin", "*");

    // Atribui no cabeçado da requisição quais métodos serão aceitos na API (GET, POST, PUT, DELETE, OPTIONS) CRUD (Create, Read, UpDate and Delete).
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // Atribui as permissões ao CORS.
    app.use(cors());

    // Próximo, permite continuar a processar as PRÓXIMAS funções.
    next();
});

// End Points:
// POST - Requisição para criar algo no Banco de Dados.
app.post("/v1/unifecaf/aluno", cors(), async function(request, response){

});

// PUT - Requisição para atualizar algo existente no Banco de Dados.
app.put("/v1/unifecaf/aluno/:id", cors(), async function(request, response){

});

// DELETE - Requisição para deletar algo existente no Banco de Dados.
app.delete("/v1/unifecaf/aluno/:id", cors(), async function(request, response){

});

// GET - Requisição parabuscar algo existente no Banco de Dados.
    // Busca todos os dados da tabela.
app.get("/v1/unifecaf/aluno", cors(), async function(request, response){

});

    // Buscar pelo ID.
app.get("/v1/unifecaf/aluno/:id", cors(), async function(request, response){

});

app.listen(8080, function(){
    console.log("Servidor aguardando requisição na porta 8080.");
});
