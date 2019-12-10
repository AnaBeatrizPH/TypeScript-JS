"use strict";
exports.__esModule = true;
var Carro // export para tornar a classe pública e usá-la em outros arquivos
 = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1900 || _ano > 2020) {
            console.log("Não há registro");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (_ligado) {
        this.ligado = _ligado;
    };
    Carro.prototype.andar = function () {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + "" + this.placa + " do ano" + this.ano + "está andando...");
        } //operador this é de pertencimento(membresia}
        else {
            console.log("É preciso ligar o carro primeiro");
        }
    };
    Carro.prototype.parar = function () {
        console.log("O carro " + this.modelo + " " + this.placa + " do ano " + this.ano + " acabou de parar");
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("O carro está ligado");
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("O carro está desligado");
    };
    return Carro;
}());
exports.Carro = Carro;
