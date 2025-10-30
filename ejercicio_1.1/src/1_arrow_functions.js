"use strict"


const add = (sum1, sum2) => sum1 + sum2

console.log( add (5, 10))



const random = () => Math.floor(Math.random() * 101)

let numeroAleatorio = random(); 
console.log(numeroAleatorio);


class person { 
    constructor(name) {
        this.name = name;
    } 
    greet = () => { console.log (`hola, ${this.name}!`) }
}

const p = new person("Andrea")
p.greet()



function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const printNumber = (num) => { console.log(`el número es: ${num}`) }
        printNumber(number)
    }
}

const arr = [10, 20, 30, 40];
printNumbers(arr)



setTimeout(() => { console.log("Este mensaje se muestra despues de 3 segundos")}, 3000)