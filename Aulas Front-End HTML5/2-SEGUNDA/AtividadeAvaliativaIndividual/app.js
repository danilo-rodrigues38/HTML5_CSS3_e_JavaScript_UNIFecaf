// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/somar.js');

var teclado = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

teclado.question("Digite dois número: ", function(num1, num2){
    let numero1 = num1;
    let numero2 = num2
    console.log("A soma entre " + numero1 + " e " + numero2 + " è igual a " 
    + matematica.calcularSomatorio(numero1, numero2));
});
