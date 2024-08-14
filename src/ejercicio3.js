function clonarArreglo(arreglo) {
    return [...arreglo];
};
const arreglo = ["Marco Medina"];
const arregloClonado = clonarArreglo(arreglo);
console.log("arreglo clonado es",arregloClonado);




function clonarObjeto(objeto) {
    return {...objeto}
}
const objeto = {
    nombre: "Antonio",
    edad: 22
}
const objetoClonado = clonarObjeto(objeto);
console.log("El objeto clonado es", objetoClonado);




function sumar(...numeros){
return numeros.reduce
}





















































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
