// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/somar.js');

var teclado = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

teclado.question("Digite um número: ", function(num1){
    var numero1 = num1;
});

teclado.question("Digite outro número: ",function(num2){
    var numero2 = num2;
})

console.log("A soma entre " + numero1 + " e " + numero2 + " è igual a " + matematica.somar(numero1, numero2));
