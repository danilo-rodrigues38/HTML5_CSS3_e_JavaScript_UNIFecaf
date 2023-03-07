//import da biblioteca de entrada de dados via teclado
var readline = require('readline');

//Criamos uma interface de comunicação entre o terminal e o node
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// entradaDados.question('Digite seu nome: \n', function(nome){
//     let nomeUsuario = nome;
//     console.log('O nome do usuário é: ' + nomeUsuario);
// });

/*
    Tipos de criação de variáveis
        let - cria uma variavel local dentro de um processamento de 
            uma função (escopo local)
        var - cria uma variavel global no arquivo (escopo global)
        const - cria um espaço em memoria para armazenar um determinadado
            conteudo que nunca irá mudar 
            Obs: também utilizado para criar funções de Call Back
*/

//Entrada de dados referente a nota1
entradaDados.question('Digite a nota 1: \n', function(nota1){
    let valor1 = nota1;

    //Entrada de dados referente a nota2
    entradaDados.question('Digite a nota 2: \n', function(nota2){
        let valor2 = nota2;

        //Entrada de dados referente a nota3
        entradaDados.question('Digite a nota 3: \n', function(nota3){
            let valor3 = nota3;

            //Entrada de dados referente a nota4
            entradaDados.question('Digite a nota 4: \n', function(nota4){
                let valor4 = nota4;
                let media;

                /*
                    Tipos de dados primitivos (tradicionais)
                        String
                        Number (int e float)
                        Boolean
                        Object (function, array, json)

                        typeof() - permite verificar um tipo de dados de uma variavel

                        Conversão de dados de String para Numero
                            parseInt() - converte uma string para inteiro
                            parseFloat()- converte uma string para numero decimal (float)
                            Number() - converte uma string para numero (independente se será
                                    int ou float 
                                )
                */

                media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) /4;

                console.log(Number(media.toFixed(1)));
   
             
            });
        });
    });
});