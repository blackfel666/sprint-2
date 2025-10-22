"use strict"

/*Exercici 1.7 nivel 1*/

const holaMon = () => { return new Promise((resolve, reject) => {
    
    const tempEspera = 2000
    
    setTimeout(() => { resolve('Hola, mon') }, tempEspera);
})
}

holaMon()
    .then( missatge => { console.log(`${missatge}`)})