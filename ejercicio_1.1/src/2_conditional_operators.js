"use strict"


function potConduir (edat){ return edat >= 18 ? "Pots conduir" : "No pots conduir"}

let estatFinal = potConduir(23)

console.log(estatFinal)




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


let num = -9

let result = num > 0 ? "positiu" : ( num < 0 ?"negatiu" : "cero" )

console.log(`El número ${num} es: ${result}`)

function trobarMaxim(a, b, c){

    let maximAB = a > b ? a : b

    let maximFinal = maximAB > c ? maximAB : c

    return maximFinal

}

console.log(`Màxim de (10, 5, 20): ${trobarMaxim(10, 5, 20)}`)


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