"use strict"

/*Exercici 1.1 nivel 1*/

const add = (sum1, sum2) => sum1 + sum2

console.log( add (5, 10))


/*Exercici 1.1 nivel 1*/

const random = () => Math.floor(Math.random() * 101)

let numeroAleatorio = random(); 
console.log(numeroAleatorio);

/*Exercici 1.1 nivel 1*/

class person { 
    constructor(name) {
        this.name = name;
    } 
    greet = () => { console.log (`hola, ${this.name}!`) }
}

const p = new person("Andrea")
p.greet()


/*Exercici 1.1 nivel 2*/

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const printNumber = (num) => { console.log(`el número es: ${num}`) }
        printNumber(number)
    }
}

const arr = [10, 20, 30, 40];
printNumbers(arr)


/*Exercici 1.1*nivel 3*/

setTimeout(() => { console.log("Este mensaje se muestra despues de 3 segundos")}, 3000)


/*Exercici 1.2 nivel 1*/

function potConduir (edat){ return edat >= 18 ? "Pots conduir" : "No pots conduir"}

let estatFinal = potConduir(23)

console.log(estatFinal)


/*Exercici 1.2 nivel 1*/


function comparacio (){

    const nom1= "yohann"
    const nom2= "valentina"

    let long1 = nom1.length
    let long2 = nom2.length

    if ( long1 > long2 ) {
        console.log(`${nom1} es mes llarg que ${nom2}.`)
    } else if ( long2 > long1 ) {
        console.log(`${nom2} es mes llarg que ${nom1}.`)
    } else {
        console.log("són igual de llargs")
    }
}

comparacio();

/*Exercici 1.2 nivel 2*/

let num = -9

let result = num > 0 ? "positiu" : ( num < 0 ?"negatiu" : "cero" )

console.log(`El número ${num} es: ${result}`)

function trobarMaxim(a, b, c){

    let maximAB = a > b ? a : b

    let maximFinal = maximAB > c ? maximAB : c

    return maximFinal

}

console.log(`Màxim de (10, 5, 20): ${trobarMaxim(10, 5, 20)}`)

/*Exercici 1.2 nivel 3*/

const nums = [2, 7, 10, 15, 4, 11]

function parOimpar (arr){

    const result = []

    for (const num of arr){
        const type = (num % 2 === 0) ? "par" : "impar"
        result.push(`El ${num} es ${type}`)
    }

return result

}

const clacificacio = parOimpar(nums)
console.log(clacificacio)

/*Exercici 1.3 nivel 1*/