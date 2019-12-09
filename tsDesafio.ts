function exibe(titulo, parag)
{
console.log("<html><head><title>" +titulo+ "</title></head><body><h1>"+parag+"</h1> <p></p></body></html>");
}
import teclado = require("readline-sync");

var titulo:string = teclado.question("Digite o título")
var parag:string = teclado.question("Digite a desrição")




 exibe(titulo, parag);
