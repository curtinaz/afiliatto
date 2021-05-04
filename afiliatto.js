let search = location.search.substring(1);

var param = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })

if (param.sujeito == "") {
    let hasparam = false;
} else {
    var sujeito = param.sujeito;
    var sujeito_qtd = document.querySelectorAll(".sujeito");
    var changing = 0;
    
    for (changing = 0; changing <= sujeito_qtd; changing++) {

        console.log("temporario")

    }
}