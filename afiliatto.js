// O código separa somente os parâmetros da URL
let search = location.search.substring(1); 


if (search == "") {

    var changing = 0;

    var withparam_qtd = document.querySelectorAll(".withparam").length;

    for (changing = 0; changing < withparam_qtd; changing++) {

        document.querySelectorAll(".withparam")[changing].style.display = "none";
        console.log("Div personalizada removida");

    }

} else {

    var param = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });


    var ndl = param.ndl; // O código cria a variável ndl (Nome do Lead), que vai mudar o valor das classes ndl.
    var ndl_qtd = document.querySelectorAll(".ndl").length; // O código question a quantidade de classes ".ndl" que existem no site.
    var changing = 0; // O código define um valor "i" para o laço 'for'.
    
    for (changing = 0; changing < ndl_qtd; changing++) {

        document.querySelectorAll(".ndl")[changing].innerHTML = ndl;
        console.log("Nome do lead foi alterado");

    }

    changing = 0
    
    var without_qtd = document.querySelectorAll(".withoutparam").length;

    for (changing = 0; changing <= without_qtd; changing++) {

        document.querySelectorAll(".withoutparam")[changing].style.display = "none";

    }
}