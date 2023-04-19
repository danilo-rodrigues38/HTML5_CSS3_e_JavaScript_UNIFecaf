/******************************************************************************************************************
 * Objetivo: Carregar dados de endereço attravés de CEP informado (Buscando em JSON local e usando uma API pública)
 * Data: 12/04/2023
 * Autor: Danilo Rodrigues de Oliveira
 * Versão: 0.0.1
*******************************************************************************************************************/

// Import da variável dadosCEP existente no arquivo dados.js.
import {dadosCep} from "./dados.js";

// Cria um objeto do botão conforme a imput no HTML.
var botao = document.getElementById("pesquisar");
var form = document.getElementById("formulario");
var caixaCep = document.getElementById("input-cep");

// Função para receber o CEP e buscar os dados de endereço.
const getDadosCep = function(){
    // Recebe o número do CEP digitado no formulário
    let numeroCEP = document.getElementById("input-cep").value;

    // Percorre o array dadosCep para filtrar o CEP informado
    dadosCep.dados.forEach(function(item){
        // Busca o cep digitado dentro do JSON
        if(item.cep.indexOf(numeroCEP) != -1) {
            setDadosCep(item)
        }
    });
};

// Função para receber o CEP e buscar os dados na API do ViaCep.
const getDadosCepAPI = function() {
    // Recebe o CEP digitado pelo usuário
    let numeroCEP = document.getElementById("input-cep").value;
    let url = `https://viacep.com.br/ws/${numeroCEP}/json/`;

    // Realiza uma requisição na URL especificada
    fetch (url)
        // Recebe os dados de retorno da API e converte em JSON.
        .then (function(response){
            return response.json();
        })
        // Recebe os dados convertidos em JSON e chama a função pra carregar os dados na tela
        .then (function(dados){
            setDadosCep(dados);
        })
};

// Função para carregar os dados nas caixas do formulário.
const setDadosCep = function(item){
    // Carrega os dados encontrado no formulário
    form.logradouro.value = item.logradouro;
    form.bairro.value = item.bairro;
    form.cidade.value = item.localidade;
    form.estado.value = item.uf;
}

// Função para validar a entrada de dados e fazer a máscara do CEP.
const validacaoMascara = function(teclaDigitada){
    let ascii = teclaDigitada.charCode;
    // document.getElementById("input-cep").style.backgroundColor = "white";

    if (ascii < 48 || ascii > 57){
        // document.getElementById("input-cep").style.backgroundColor = "red";
        teclaDigitada.preventDefault();
    } else {
        let conteudoCep = String(document.getElementById("input-cep").value);
        if (conteudoCep.length == 5){
            document.getElementById("input-cep").value = conteudoCep + "-";
        } else if (conteudoCep.length >= 9) {
            teclaDigitada.preventDefault();
        }
    }
};

// Adiciona o evento de escutar o click do botão de pesquisar.
botao.addEventListener("click", function(){getDadosCepAPI();});

// Adiciona o evento de escutar a ação de digitar na caixa.
caixaCep.addEventListener("keypress", function(tecla){
    validacaoMascara(tecla);
});