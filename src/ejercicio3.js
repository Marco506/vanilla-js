

//Clonar Arreglo
function clonarArreglo(arreglo) {
    return [...arreglo];
};
const arreglo = ["Marco Medina"];
const arregloClonado = clonarArreglo(arreglo);
console.log("arreglo clonado es",arregloClonado);



//Clonar objeto
function clonarObjeto(objeto) {
    return {...objeto}
}
const objeto = {
    nombre: "Antonio",
    edad: 22
}
const objetoClonado = clonarObjeto(objeto);
console.log("El objeto clonado es", objetoClonado);



//Funcion sumar
function sumar(...numeros){
return numeros.reduce((acomulador, numeroActual)=>acomulador + numeroActual, 0)
}

console.log("suma", sumar(10, 8, 3));
console.log("suma", sumar(4, 5, 9, 10, 166));



//Funcion saludar
function saludar(nombre = "desconocido") {
    return `hola ${nombre}`
}
console.log(saludar());
console.log(saludar("Marco"));






















































/*const names = ["Marco", "Juan", "Luis"];

function clonarArreglo(names){ 


clonar = names.map((x)=>x=x);
return clonar;


};

const obje = {
    nombre : "Marco"
}
function clonarObjeto(X){
    return X;
}

console.log(clonarArreglo(names));
console.log(clonarObjeto(obje));



// NO MODIFICAR
//export { clonarArreglo, clonarObjeto, sumar, saludar };
*/
