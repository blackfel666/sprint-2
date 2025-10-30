"use strict"


 let llistaNoms = ['Anna', 'Bernat', 'Clara']
 llistaNoms.forEach (nom => {console.log(nom)})


 for (const person of llistaNoms) { console.log (person) }


 let numerosPares = [1, 2, 3, 4, 5, 6]
 const pares = numerosPares.filter ( num => num % 2 === 0 )
 console.log(pares)


let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona'
}

for (const clave in obj) {
    console.log(`${clave} : ${obj[clave]}`)
}



 let forBreak = [1, 2, 3, 4, 5, 6]

 let encontrado = null

 for (const num of forBreak) {
    if (num === 5 ){
        encontrado = num
        break
    }
}

console.log(`numero encontrado : ${encontrado}`)


let forIndex = ['Anna', 'Bernat', 'Clara']

for (const [index, nombre] of forIndex.entries()) {
    console.log(`Posicion ${index}: ${nombre}`)
}






 

