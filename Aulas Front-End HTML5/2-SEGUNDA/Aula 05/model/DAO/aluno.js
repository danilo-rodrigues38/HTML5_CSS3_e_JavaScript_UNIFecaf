/************************************************************************************************
 * Model / DAO: ALUNO
 * Objetivo: Arquivo responsável pela manipulação de dados com o Banco de Dados MySQL.
 * Nome: Danilo Rodrigues de Oliveira.
 * Data: 15/05/2023.
 * Versão: 1.0.0
 ***********************************************************************************************/

// Import da classe do prisma client
var { PrismaClient } = require ( '@prisma/client' );

// Instância da classe PrismaClient
var prisma = new PrismaClient();

// Função para incerir um novo aluno.
const insertAluno = function(dadosAluno){

    // Script SQL para inserir o aluno no Banco de Dados.
    let sql = `insert into tbl_aluno 
            (nome, cpf, email, telefone) 
            values 
            ('${dadosAluno.nome}', '${dadosAluno.cpf}', '${dadosAluno.email}', '${dadosAluno.telefone}')`
    
    // Executa o script SQL no Banco de Dados.
    let result = prisma.$excuteRawUnsafe(sql);

    if (result) {
        return true;
    } else {
        return false;
    };

};

// Função para atualizar um aluno.
const updateAluno = function(dadosAluno){

    // Script para atualizar os dados no Banco de Dados.
    let sql = `update tbl_aluno set nome='${dadosAluno.nome}', cpf='${dadosAluno.cpf}', email='${dadosAluno.email}', telefone='${dadosAluno.telefone}' where id = '${dadosAluno.id}'`

    // Executa o script SQL no Banco de DAdos.
    let result = prisma.$excuteRawUnsafe(sql);

    if (result) {
        return true;
    } else {
        return false;
    };
};

// Função para excluir um aluno.
const deleteAluno = function(id){

    // Script SQL para excluir um registro.
    let sql =  `delete form tbl_aluno where id = ${id}`;
    
    // Executa o script SQL no Banco de DAdos.
    let result = prisma.$excuteRawUnsafe(sql);

    if (result) {
        return true;
    } else {
        return false;
    };
};

// Função para listar todos os alunos.
const selectAllAluno = function(){

    // Script para listar todos os dados do Banco de Dados.
    let sql = `select * from tbl_aluno`

    // Executa o script SQL e recebe os dados de retorno do Banco de Dados.
    let result = prisma.$queryRawUnsafe(sql);

    if (result.length > 0) {
        return result;
    } else {
        return false;
    };
};

// Função para buscar um aluno pelo ID.
const selectByIdAluno = function(id){

    // Script SQL para buscar pelo ID.
    let sql = `select * from tbl_aluno where id = ${id}`;

    // Executa o script SQL no Banco de Dados.
    let result = prisma.$queryRawUnsafe(sql);

    if (result.length > 0) {
        return result;
    } else {
        return false;
    };
};
