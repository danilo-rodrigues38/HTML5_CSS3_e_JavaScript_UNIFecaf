// Importe dos arquivos e funções.
var readline = require('readline');
var matematica = require('./modulo/calcularArea.js');

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("\n\nCALCULANDO A ÁREA DO CÍRCULO");
entradaDados.question('Digite um valor para ser calculada a área de um circulo: ', function(raio) {
    console.log(matematica.getCalculoCirculo(raio));
});

console.log("\n\nCALCULANDO A ÁREA DO QUADRADO");
entradaDados.question("Digite o valor da base do quadrado: ", function(num1){
    //let vlbase = num1;
    entradaDados.question("Digite o valor da altura do quadrado: ", function(num2){
        //let vlaltura = num2;
        console.log(matematica.getCalculoQuadrado(num1, num2));
    });
});
