let search = location.search.substring(1);

search = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })

if (param == "") {
    let hasparam = false;
} else {
    var qtd_links = document.querySelectorAll("a").length;
    var changing = 0;
    
    for (changing = 0; changing <= qtd_links; changing++) {

        var checkout_url = document.querySelectorAll("a")[changing].href;


    }
}