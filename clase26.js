// Escribe una función que tome un número como parámetro y devuelva el doble de ese número. 
// Por ejemplo, si la función recibe el número 5, debe devolver 10.

function multiplicar (num){
    return num * 2;
}

// console.log(multiplicar(5));

// ---------------------------------------------

// Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los 
// números en el array. 
// Por ejemplo, si la función recibe el array [1, 2, 3, 4], debe devolver 10.

let array = [2, 4, 6, 8]
function sumaArray (array){
    let acumulador = 0
    for (let i= 0;  i < array.length; i++){
        acumulador += array[i];
}
    return acumulador;
}

// console.log(sumaArray(array))

// ----------------------------------------------------

// Escribe una función que tome un string como parámetro y devuelva el mismo string pero 
// con todas las letras en mayúscula. 
// Por ejemplo, si la función recibe el string "hola mundo", debe devolver "HOLA MUNDO".

function mayuscula(string){
    return string.toUpperCase();
}

let string = "hola mundo"

console.log(mayuscula(string))

// -------------------------------------------------------

// Escribe una función que tome un objeto como parámetro y devuelva el número de propiedades que tiene el objeto. 
// Por ejemplo, si la función recibe el objeto
//  {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}, debe devolver 3.

const objeto = {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}

function obj(objeto){
    let propiedades = Object.keys(objeto)
    return propiedades.length
}

// console.log(obj(objeto))

// ---------------------------------------------------------------

// Escribe una función que tome un número como parámetro y devuelva un array con todos los números 
// enteros desde 1 hasta el número pasado como parámetro. Por ejemplo, si la función recibe 
// el número 5, debe devolver el array [1, 2, 3, 4, 5].


function numeroMax(num){
    let numero =  [];

    for(let i=1; i<= num; i++){
        numero.push(i);
    }
    return numero
}

// function numeroMax(num){
//     let numero = [];
//     for(i=0; i<=num-1;i++){
//         numero[i] = i + 1;
//     }
//     return numero;
// }

let num1 = 5

// console.log(numeroMax(num1))