/******************************************************
 * Objetivo: Manipular Arrays e JSON
 * Autor: Danilo Rodrigues de Oliveira
 * Data: 20/03/2023
 * Versão: 0.0.1
 ******************************************************/

// [] - Significa que esse objeto é um array
// {} - Significa que esse objeto é um JSON

var nomes = ["Danilo Oliveira", "Vinicius Bidoia", "Jessica Bidoia", "Manuelle Moraes", "Ana Beatriz", "Bruna Esteves"];

/* console.log(typeof(nomes));     // O 'typeof', informa o tipo da variável, neste caso, um 'objeto'.
console.log(typeof(nomes[0]));  // O 'typeof', neste caso, a variável no índice '0', mostra o tipo do conteúdo, uma 'String'.
console.log(nomes);             // Imprime todo o conteudo da variável 'Array" na tela.
console.log(nomes[0]);          // Neste caso, imprime o conteudo do 'Array" na posição zero.
console.table(nomes);           // Neste caso, cria e imprime, uma tabela com dois campos, 'INDEX' e 'VALUES'. */

// Percorrendo Arrays
// Modelo 1 - Usando o while

let cont = 0;
// Para retornar a quantidade de elementos de um ARRAY, usamos o length.
let qtdItens = nomes.length;

console.log(qtdItens)

// Percorrendo o array de nomes, utilizamos a variável cont, essa variável moda o seu valor a cada looping realizado, sempre somando mai 1.
while(cont < qtdItens){
    console.log(nomes[cont])
    cont++
}

// Exemplo usando o "FOR".
for(let cont = 0; cont > qtdItens; cont++){
    console.log(`O fulano ${nomes[cont]}`)
}

// Exemplo usando o ForEach.
nomes.forEach(function(item){
    console.log(`O fulano ${item}`)
})

// Manipulando dados no ARRAY
// Acrescenta elementos ao final do ARRAY
nomes.push("Gabriel Xavier", "Kaleo Vieira", "Creuza Maria");

// Acrescenta elementos ao início do ARRAY
nomes.unshift("Mariana Bidoia")
console.table(nomes);

// POP - Remove o último elemento do ARRAY
nomes.pop();

// SHIFT - Remove o primeiro elemento do ARRAY
nomes.shift();
console.table(nomes);