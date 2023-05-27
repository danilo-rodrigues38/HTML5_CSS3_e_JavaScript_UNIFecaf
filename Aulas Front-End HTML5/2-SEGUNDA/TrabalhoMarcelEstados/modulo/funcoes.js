const getEstadositem = function() {
    let status = false;
    let arrayEstadositem = [];
    let jsonEstadositem = {};
 
    estadosCidades.estados.forEach(function(item){
       arrayEstadositem.push(item.sigla);
       status = true;
    });
    if (status) {
       jsonEstadositem.item = arrayEstadositem;
       jsonEstadositem.quantidade = arrayEstadositem.length;
       return jsonEstadositem;
    } else {
       return status;
    }
 };
 
 const getEstadosNome = function(siglaDoEstado) {
    let siglaEstado = String(siglaDoEstado).toUpperCase();
    let status = false;
    let jsonEstadosNome = {};
 
    estadosCidades.estados.forEach(function(first){
       if (first.sigla.toUpperCase().includes(siglaEstado)) {
          jsonEstadosNome = {
             "UF" : first.sigla,
             "Estado" : first.nome,
             "Capital" : first.capital,
             "Regiao" : first.regiao
          };
          status = true;
       };
    });
    if (status) {
       return jsonEstadosNome
    } else {
       return status;
    }
 }
 
 const getCapital = function(siglaDoEstado) {
    let siglaEstado = String(siglaDoEstado).toUpperCase();
    let status = false;
    let jsonCapital = {};
 
    estadosCidades.estados.forEach(function(first){
       if (first.sigla.toUpperCase().includes(siglaEstado)) {
          jsonCapital = {
             "UF" : first.sigla,
             "Estado" : first.nome,
             "Capital" : first.capital
          };
          status = true;
       };
    });
    if (status) {
       return jsonCapital
    } else {
       return status;
    }
 }
 
 const getRegiao = function(regiaoPais) {
    let nome = String(regiaoPais).toUpperCase();
    let status = false;
    let arrayEstados = [];
    let jsonRegiao = {};
 
    estadosCidades.estados.forEach(function(first){
       if (first.regiao.toUpperCase().includes(nome)) {
          arrayEstados.push({
             "UF" : first.sigla,
             "Estado" : first.nome,
             "Capital" : first.capital,
          })
          jsonRegiao = {
             "Regiao" : first.sigla,
             "Estados" : arrayEstados
          };
          status = true;
       };
    });
    if (status) {
       return jsonRegiao;
    } else {
       return status;
    }
 };
 
 const getCidades = function(cidadesEstado) {
    let uf = String(cidadesEstado).toUpperCase();
    let status = false;
    let arrayCidades = [];
    let jsonCidades = {};
 
    estadosCidades.estados.forEach(function(first){
       first.cidades.forEach(function(second){
          if (first.sigla.toUpperCase().includes(uf)) {
             arrayCidades.push(second.nome)
             jsonCidades = {
                "UF" : first.sigla,
                "Estado" : first.nome,
                "Quantidade_cidades" : arrayCidades.length,
                "Cidades" : arrayCidades
             };
             status = true;
          };
       });
    });
    if (status) {
       return jsonCidades;
    } else {
       return status;
    }
 };
 
 module.exports = {
    getEstadositem,
    getEstadosNome,
    getCapital,
    getRegiao,
    getCidades   
 };