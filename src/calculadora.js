class calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    sumar(){
        return this.valor1 + this.valor2;
    };

    restar(){
        return this.valor1 - this.valor2;
    };

    Multiplicar(){
        return this.valor1 * this.valor2;
    };

    dividir(){
        return this.valor1 / this.valor2;
    };
}


let suma = new calculadora(20, 20);
console.log(suma.sumar());

let resta = new calculadora(1000, 20);
console.log(resta.restar());

let multi = new calculadora(20, 50);
console.log(multi.Multiplicar());

let div = new calculadora(100, 20);
console.log(div.dividir());


