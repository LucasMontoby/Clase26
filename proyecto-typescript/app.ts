function saludar(nombre: string){
    console.log(`Hola, ${nombre}`)
}

// saludar('Mundo')

// ---------------------------

// 1. Variables y Tipos de datos:

let nombre: string = "Juan" 
let edad: number = 25
let esAdmin: boolean = true

// 2. Funciones:
function saludar1(nombre:string): string {
    return`Hola, ${nombre}`
}

const saludo: string = saludar1("Lucas")
// console.log(saludo)

// 3. Interfaces:

interface Producto {
    nombre: string;
    precio: number
}

const producto: Producto = {
    nombre: 'Monitor',
    precio: 300
}

// console.log(producto.nombre + ', $' + producto.precio)

// 4. Clases:

class Persona{
    constructor(public nombre: string, public edad: number){}
}

const persona1 = new Persona("Lucas", 30)

// console.log(`Nombre: ${persona1.nombre}, Edad:  ${persona1.edad}`)

// 5. Array:

let numeros: number[] = [1, 2, 3, 4, 5]

for(const numero of numeros){
    // console.log(numero)
}

// 6. Tipos de uniones:

type Resultado = string | number;

let  valor: Resultado = "Cursando";
valor = 42

// 7. Enumeraciones:

enum Dias {
    Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo

}

let diaLaboral: Dias = Dias.Martes
console.log(diaLaboral)