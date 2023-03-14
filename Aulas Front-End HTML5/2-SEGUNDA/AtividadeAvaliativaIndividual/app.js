// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/calcularArea.js');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("\n\nCALCULANDO A ÁREA DO CÍRCULO");
entradaDados.question('Digite um valor para ser calculada a área de um circulo: ', function(vlRaioCirculo) {
    let vlraio = vlRaioCirculo;
    matematica.getCalculoCirculo(vlraio)
});

// console.log("\n\nCALCULANDO A ÁREA DO QUADRADO");
// console.log("Base = 5");
// var entradaValorBase = 5;
// console.log("Altura = 3");
// var entradaValorAltura = 3;

// matematica.getCalculoQuadrado(entradaValorBase, entradaValorAltura);