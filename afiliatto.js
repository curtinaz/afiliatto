// O código separa somente os parâmetros da URL
let search = location.search.substring(1); 

// O código transforma os parâmetros em um JSON. (levando em conta os caracteres especiais)
var param = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }) 

if (param.sujeito == "") {
    let hasparam = false; // O código verifica se existe o parâmetro "sujeito"
} else {
    var sujeito = param.sujeito; // O código cria a variável sujeito, que vai mudar o valor das classes sujeito.
    var sujeito_qtd = document.querySelectorAll(".sujeito").length; // O código question a quantidade de classes ".sujeito" que existem no site.
    var changing = 0;
    
    for (changing = 0; changing <= sujeito_qtd; changing++) {

        document.querySelectorAll(".sujeito")[changing].innerHTML = sujeito;
        console.log("Nome do Sujeito foi alterado");

    }
}