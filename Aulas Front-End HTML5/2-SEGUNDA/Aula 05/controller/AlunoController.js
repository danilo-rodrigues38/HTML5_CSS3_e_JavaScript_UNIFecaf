/************************************************************************************************
 * Controller: ALUNO
 * Objetivo: Arquivo responsável pela criação da regra de negócio da aplicação.
 * Nome: Danilo Rodrigues de Oliveira.
 * Data: 08/05/2023.
 * Versão: 1.0.0
 ***********************************************************************************************/

// Função para incerir um novo aluno.
const inserirAluno = function(dadosAluno){
    if (dadosAluno.nome     == '' || dadosAluno          == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf      == '' || dadosAluno.cpf      == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.email    == '' || dadosAluno.email    == undefined || dadosAluno.email.length    > 256 ||
        dadosAluno.telefone == '' || dadosAluno.telefone == undefined || dadosAluno.telefone.length > 20){
            return {statusCode: 400, message: "Dados obrigatórios não foram preenchidos."}
        } else {
            let alunoDAO = require("../model/DAO/aluno");
            let result = alunoDAO.insertAluno(dadosAluno);
            if (result) {
                return {statusCode: 201, message: "Item inserido com sucesso!"};
            } else {
                return {statusCode: 500, message: "Erro interno do servidor!"}
            }
        }
};

// Função para atualizar um aluno.
const atualizarAluno = function(dadosAluno, id){

};

// Função para excluir um aluno.
const excluirAluno = function(id){

};

// Função para listar todos os alunos.
const listarAluno = function(){

};


// Função para buscar um aluno pelo ID.
const buscarAluno = function(id){

};