// Recebe o elemento botão
var botao = document.getElementById("criar");

var estados =  
         [  'SP', 'AC', 'RJ', 'BA', 'CE', 'MG', 'GO', 'SC', 'SE', 'TO', 'RR',
            'RO', 'RS', 'RN', 'PI', 'PE', 'PR', 'PB', 'PA', 'MT', 'MS', 'MA',
            'ES', 'DF', 'AM', 'AP', 'AL' 
         ];

const getEstados = function(){
   // Recebe o elemento select do HTML
   let selectEstado = document.getElementById("uf")
   // Repetição para percorrer o array de estados
   estados.forEach(function(item){
      // Cria a TAG option
      let option = document.createElement("option");
      // Cria o elemento de texto com as siglas dos estados
      let textEstado = document.createTextNode(item);

      // Associando os elementos HTML um dentro do outro.
      selectEstado.appendChild(option);
      option.appendChild(textEstado);
   });
};

// Cria o elemento de click no botão, para chamar a função dos estados
botao.addEventListener("click", function(){getEstados()});