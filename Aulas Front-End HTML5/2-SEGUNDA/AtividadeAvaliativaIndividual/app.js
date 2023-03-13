// Importe dos arquivos e funções.
var readline = require('readline');
var somatorio = require('./modulo/somar.js');

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

document.write("A soma entre " + numero1 + " e " + numero2 + " è igual a " + somatorio.somar(numero1, numero2));
