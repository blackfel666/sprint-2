"use strict"

/*Exercici 1.4 nivel 1*/


const number = [1, 2, 3]
const noms = ['pep', 'juan', 'kiko']
const final = [...number, ...noms]

console.log(final)

/*Exercici 1.4 nivel 1*/

function sumar(...nums){
    let total = 0

    for (const numero of nums){
        total = total + numero
    } return total
}

console.log(`suma de 8, 7, 6 : ${sumar(8, 7, 6)}`)

/*Exercici 1.4 nivel 2*/

const obj1 = {
    nombre : "yohann",
    edad : 34
}
const copia = {...obj1}

console.log(obj1)

copia.edad = 35;

console.log(copia)

/*Exercici 1.4 nivel 2*/

const numeros = [10, 20, 30, 40, 50];

const [primer, segundo, ...restoDeNumeros] = numeros;

const varSum = primer + segundo

console.log(primer)         
console.log(segundo)
console.log(varSum)       
console.log(restoDeNumeros)

/*Exercici 1.4 nivel 3*/



