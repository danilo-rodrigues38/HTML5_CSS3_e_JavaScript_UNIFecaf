/************************************************************************************************
 * Controller: ALUNO
 * Objetivo: Arquivo responsável pela criação da regra de negócio da aplicação.
 * Nome: Danilo Rodrigues de Oliveira.
 * Data: 08/05/2023.
 * Versão: 1.0.0
 ***********************************************************************************************/

var alunoDAO = require("../model/DAO/aluno");

// Função para incerir um novo aluno.
const inserirAluno = async function(dadosAluno){
    // Validação de contrúdo obrigatório
    if (dadosAluno.nome     == '' || dadosAluno          == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf      == '' || dadosAluno.cpf      == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.email    == '' || dadosAluno.email    == undefined || dadosAluno.email.length    > 256 ||
        dadosAluno.telefone == '' || dadosAluno.telefone == undefined || dadosAluno.telefone.length > 20){
            return {statusCode: 400, message: "Dados obrigatórios não foram preenchidos."}
    } else {
        let result = await alunoDAO.insertAluno(dadosAluno);
        if (result) {
            return {statusCode: 201, message: "Item inserido com sucesso!"};
        } else {
            return {statusCode: 500, message: "Erro interno do servidor!"}
        }
    }
};

// Função para atualizar um aluno.
const atualizarAluno = async function(dadosAluno, id){
    if (dadosAluno.nome     == '' || dadosAluno          == undefined || dadosAluno.nome.length     > 100 ||
        dadosAluno.cpf      == '' || dadosAluno.cpf      == undefined || dadosAluno.cpf.length      > 18  ||
        dadosAluno.email    == '' || dadosAluno.email    == undefined || dadosAluno.email.length    > 256 ||
        dadosAluno.telefone == '' || dadosAluno.telefone == undefined || dadosAluno.telefone.length > 20){
            return {statusCode: 400, message: "Dados obrigatórios não foram preenchidos."}
    } else {
        // Validação do ID inválido
        if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
            return {statusCode: 404, message: "O ID não foi encontrado ou ID inválido."}
        } else {
            // Adiciona um novo atriburo no JSON (id)
            dadosAluno.id = idAluno;
            let result = await alunoDAO.updateAluno(dadosAluno);
            if (result) {
                return {statusCode: 201, message: "Item inserido com sucesso!"};
            } else {
                return {statusCode: 500, message: "Erro interno do servidor!"}
            }
        }
    }
};

// Função para excluir um aluno.
const excluirAluno = async function(id){
    if (id == "" || id == undefined || isNaN(id)){
        return {statusCode: 404, message: "O ID não foi informado ou é inválido."}
    } else {
        let result = await alunoDAO.deleteAluno(id);
        if (result) {
            return {statusCode: 200, message: "Item removido com sucesso."}
        } else {
            return {statusCode: 500, message: "Erro interno na API ou no Servidor do Banco de Dados."}
        }
    }
};

// Função para listar todos os alunos.
const listarAluno = async function(){
    // Chama a função que vai buscar no BD os registros
    let result = await alunoDAO.selectAllAluno();

    // Se houver dados no banco
    if (result.length > 0) {
        // Retorna um JSON com os statusCode e o Array de itens.
        return {statusCode: 200, alunos: result};
    } else {
        return {statusCode: 404, message: "Dados não localizados."};
    }
};


// Função para buscar um aluno pelo ID.
const buscarAluno = async function(id){
    // Validação do ID
    if (id == "" || id == undefined || isNaN(id)){
        return {statusCode: 404, message: "O ID não foi informado ou é inválido."}
    } else {
        // Chama a função para filtrar no BD pelo ID
        let result = await alunoDAO.selectByIdAluno(id);
        if (result.length > 0) {
            return {statusCode: 200, aluno: result}
        } else {
            return {statusCode: 404, message: "Nenhum registro encontrado."}
        }
    }
};

mudule.exports {
    inserirAluno,
    atualizarAluno,
    excluirAluno,
    listarAluno,
    buscarAluno
}