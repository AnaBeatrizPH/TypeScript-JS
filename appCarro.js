"use strict";
exports.__esModule = true;
var carro_1 = require("./carro"); // importamos a classe carro do outro arquivo 
var c1; // poderia ser let em vez de var - Isso é somente referência. É preciso criar o objeto
var c2;
c1 = new carro_1.Carro(); // criando o objeto 
c2 = new carro_1.Carro();
//para preencher os dados
c1.setAno(1980);
c1.setModelo("Fusca");
c1.setPlaca("DAY 0609");
c1.setLigado(true);
// para chamar as funcionalidades do carro 
c1.andar();
c1.parar();
c1.ligar();
c1.desligar();
c2.setAno(2019);
c2.setModelo("Tesla");
c2.setPlaca("EUA 0609");
c2.setLigado(true);
c2.andar();
c2.parar();
c2.ligar();
c2.desligar();
