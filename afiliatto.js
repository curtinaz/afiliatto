// O código separa somente os parâmetros da URL
let search = location.search.substring(1); 

// O código transforma os parâmetros em um JSON. (levando em conta os caracteres especiais)
var param = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) }) 

if (param.sujeito == "") {
    let hasparam = false;
} else {
    var sujeito = param.sujeito;
    var sujeito_qtd = document.querySelectorAll(".sujeito").length;
    var changing = 0;
    
    for (changing = 0; changing <= sujeito_qtd; changing++) {

        document.querySelectorAll(".sujeito")[changing].innerHTML = sujeito;
        console.log("Nome do Sujeito foi alterado");

    }
}