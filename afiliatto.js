let param = location.search.slice(1);

JSON.parse('{"' + param.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })