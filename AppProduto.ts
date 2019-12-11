import {Produto} from "./Produto"; 

let pr1: Produto; 
let pr2: Produto;
pr1 = new Produto(1, "Pote", "Pote TupperWare com capacidade de 300g", 28.00, 32, "url//linkdafoto.com"); 
pr2 = new Produto(2, "Garrafa", "Garrafa termica de 2 Litros", 80.00, 56, "url//linkdagarrafa.com");

pr1.mostra(); 
pr2.mostra(); 

console.log(pr1); 
console.log(pr2);
