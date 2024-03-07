"use strict";
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
// saludar('Mundo')
// ---------------------------
// 1. Variables y Tipos de datos:
let nombre = "Juan";
let edad = 25;
let esAdmin = true;
// 2. Funciones:
function saludar1(nombre) {
    return `Hola, ${nombre}`;
}
const saludo = saludar1("Lucas");
const producto = {
    nombre: 'Monitor',
    precio: 300
};
// console.log(producto.nombre + ', $' + producto.precio)
// 4. Clases:
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Lucas", 30);
// console.log(`Nombre: ${persona1.nombre}, Edad:  ${persona1.edad}`)
// 5. Array:
let numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    // console.log(numero)
}
let valor = "Cursando";
valor = 42;
// 7. Enumeraciones:
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
let diaLaboral = Dias.Martes;
console.log(diaLaboral);
