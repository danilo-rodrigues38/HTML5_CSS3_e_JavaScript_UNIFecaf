// Importe dos arquivos e funçãoes.
var readline = require('readline');
var matematica = require('./modulo/tabuada.js')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entradaDados.question('Digite um número para tabuada: ', function(numero) {
    let tabuada = numero;
    matematica.calcularTabuada(tabuada);
});
