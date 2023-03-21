/****************************************************************************
 * Objetivo: Criar uma calculadora com apenas uma entrada para calculos
 * Data: 17/03/2023
 * Autor: Danilo Rodrigues de Oliveira
 * Versão: 0.0.1
 *******************************************************************************/

//Variaveis
let numero;
let calculo="";

//Funções que receber valor digitado e atribuir a uma letiavel
//Função limpar dados 
document.getElementById("somar").addEventListener("click",() => { 
    numero = Number(document.getElementById("valor").value);
    calculo = "somar";
    document.getElementById("valor").value="";
});

document.getElementById("subtrair").addEventListener("click",() => {
    numero = Number(document.getElementById("valor").value);
    calculo = "subtrair";
    document.getElementById("valor").value="";
});

document.getElementById("dividir").addEventListener("click",() => {
    numero = Number(document.getElementById("valor").value);
    calculo = "dividir";
    document.getElementById("valor").value="";
});

document.getElementById("multiplicar").addEventListener("click",() => {
    numero = Number(document.getElementById("valor").value);
    calculo = "multiplicar";
    document.getElementById("valor").value="";
});

document.getElementById('ce').addEventListener("click",() => {
    document.getElementById("valor").value="";
    document.getElementById('exibir').innerText="";
    numero=0;
    calculo="";
});

//Função calculo
document.getElementById("calcular").addEventListener("click",() => {
    if (calculo=="somar"){
        resultado=numero+Number(document.getElementById("valor").value);
    } else if (calculo=="subtrair"){
        resultado=numero-Number(document.getElementById("valor").value);
    } else if (calculo=="dividir"){
        resultado=numero/Number(document.getElementById("valor").value);
    } else if (calculo=="multiplicar"){
        resultado=numero*Number(document.getElementById("valor").value);
    }
    document.getElementById("resultado").innerText=resultado;
    document.getElementById("valor").value = "";
});