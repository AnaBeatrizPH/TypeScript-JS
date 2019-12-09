"use strict";
exports.__esModule = true;
function exibe(titulo, parag) {
    console.log("<html><head><title>" + titulo + "</title></head><body><h1>" + parag + "</h1> <p></p></body></html>");
}
var teclado = require("readline-sync");
var titulo = teclado.question("Digite o título");
var parag = teclado.question("Digite a desrição");
exibe(titulo, parag);
