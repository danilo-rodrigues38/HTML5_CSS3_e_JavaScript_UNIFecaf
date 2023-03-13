// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/calcularArea.js');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

entradaDados.question("Digite um valor para calcular a área de um circulo: ", function(num){
    let calculoCirculo = num;
    matematica.getCalculoCirculo(calculoCirculo);
});
