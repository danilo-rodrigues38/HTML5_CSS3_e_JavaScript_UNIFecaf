// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/calcularArea.js');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("\n\nCALCULANDO A ÁREA DO CÍRCULO");
console.log("Raio = 1.25");
var valorRaio = 1.25;
matematica.getCalculoCirculo(valorRaio);

console.log("\n\nCALCULANDO A ÁREA DO QUADRADO");
console.log("Base = 5");
var entradaValorBase = 5;
console.log("Altura = 3");
var entradaValorAltura = 3;

matematica.getCalculoQuadrado(entradaValorBase, entradaValorAltura);