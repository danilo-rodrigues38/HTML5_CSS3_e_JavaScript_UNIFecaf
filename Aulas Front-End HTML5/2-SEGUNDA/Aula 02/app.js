// Importe dos arquivos e funçãoes.
var readline = require('readline');
var tabuada = require('./modulo/tabuada.js')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entradaDados.question('Digite um número para tabuada: ', function(numero) {
    let tabuada = numero;
    tabuada.calcularTabuada(tabuada);
});
