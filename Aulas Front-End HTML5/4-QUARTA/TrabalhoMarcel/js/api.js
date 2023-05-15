/************************************************************************************************
 * Objetivo: Arquivo responsável por carregar os dados da API, fazendo a integração entre o Front e Back
 * Nome: Danilo Rodrigues de Oliveira
 *       Kaleo Vieira Leite
 * Data: 15/05/2023
 * Versão: 1.0.0
 ***********************************************************************************************/

// Recebe o botão pesquisar.
// var botaoPesquisar = document.getElementById("Pesquisar");

var nomeFilme = "Transformers"

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWRmNGJiYjI5OWIyMmE1NTIzNzJkZDNkMGI3OGM3ZSIsInN1YiI6IjY0NjI5NTYwMGYzNjU1MDE1M2M3NTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MD_g6jt1UlaspEC4MeM3NflGxEeUzi3ticp8cYq8J2M");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/search/movie?query=${nomeFilme}&include_adult=false&language=pt-BR`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result)))
  .catch(error => console.log('error', error));


