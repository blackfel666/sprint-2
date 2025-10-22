"use strict"

/*Exercici 1.6 nivel 1*/

 let llistaNoms = ['Anna', 'Bernat', 'Clara']

 llistaNoms.forEach (nom => {console.log(nom)})

/*Exercici 1.6 nivel 1*/

 for (const person of llistaNoms) { console.log (person) }

/*Exercici 1.6 nivel 1*/

 let numerosPares = [1, 2, 3, 4, 5, 6]
 const pares = numerosPares.filter ( num => num % 2 === 0 )
 console.log(pares)

/*Exercici 1.6 nivel 2*/

let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona'
}

for (const clave in obj) {
    console.log(`${clave} : ${obj[clave]}`)
}

/*Exercici 1.6 nivel 2*/


 let forBreak = [1, 2, 3, 4, 5, 6]

 let encontrado = null

 for (const num of forBreak) {
    if (num === 5 ){
        encontrado = num
        break
    }
}

console.log(`numero encontrado : ${encontrado}`)

/*Exercici 1.6 nivel 3*/

let forIndex = ['Anna', 'Bernat', 'Clara']

for (const [index, nombre] of forIndex.entries()) {
    console.log(`Posicion ${index}: ${nombre}`)
}






 

