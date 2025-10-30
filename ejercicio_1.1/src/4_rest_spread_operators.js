"use strict"



const number = [1, 2, 3]
const noms = ['pep', 'juan', 'kiko']
const final = [...number, ...noms]

console.log(final)


function sumar(...nums){
    let total = 0

    for (const numero of nums){
        total = total + numero
    } return total
}

console.log(`suma de 8, 7, 6 : ${sumar(8, 7, 6)}`)


const obj1 = {
    nombre : "yohann",
    edad : 34
}
const copia = {...obj1}

console.log(obj1)

copia.edad = 35;

console.log(copia)


const numeros = [10, 20, 30, 40, 50];

const [primer, segundo, ...restoDeNumeros] = numeros;

const varSum = primer + segundo

console.log(primer)         
console.log(segundo)
console.log(varSum)       
console.log(restoDeNumeros)



function miFuncion(a, b, c) {
    console.log (a + b + c)
}

const num1 = [6, 8, 5]

miFuncion(...num1);


const uno = { 
    perro: "luna",
    gato: "kuro",
}
const dos = { 
    juguete: "pelota",
 }
const tres = {...uno, ...dos} 
console.log(tres)
