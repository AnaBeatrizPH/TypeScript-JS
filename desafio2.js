function funcao() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    for (var i = 0; i < parametros.length; i++) {
        console.log("<div id=\"id" + (i + 1) + "\">" + parametros[i] + " </div>");
    }
}
console.log(funcao("primeiro", "segundo", "terceiro"));
