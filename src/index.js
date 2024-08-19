// Inserte el código aquí
import { calculadora } from "./src/calculadora.js";

async function calcular(operacion, numero1, numero2) {

    return calculadora[operacion](numero1, numero2);
    
};

(async  ()=> {
    console.log(await calcular("Suma", 10, 21));
    console.log(await calcular("Resta", 40, 33));
    console.log(await calcular("Multiplicacion", 10, 7));
   console.log(await calcular("Division", 10, 2));
   
})();


