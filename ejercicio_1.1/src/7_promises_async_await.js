"use strict"

const holaMon = () => { return new Promise((resolve) => {
    
    const tempEspera = 2000
    
    setTimeout(() => { resolve('Hola, mon') }, tempEspera)
})}



holaMon () .then ( missatge => { console.log(`${missatge}`)})



const promiseReject = (input) => { return new Promise((resolve, reject) => {
    
    const tempEspera = 2000
    
    setTimeout(() => { 

        if (input === 'hola') { 
            resolve (`input correcte`)
        } else {
            reject ( new Error(`input incorrecte`))
        } 
    }, tempEspera )
    
    })}

const asyncAwait = async () => { 
    const mess = await holaMon();
    console.log(mess)
    return mess;
}


const asyncAwaitErrors = async(promessFn) =>{
    try {
        const mess = await promessFn()
        return mess
    } catch (error) {
        console.error("Error capturat")
        throw error
        }
}


const promessa = new Promise (resolve => setTimeout (() => resolve('resultat 1'), 2000))
const promessa2 = new Promise (resolve => setTimeout (() => resolve('resultat 2'), 3000))
Promise.all ([promessa, promessa2]) .then(resultats =>{console.log(`tot resolt`, resultats)})