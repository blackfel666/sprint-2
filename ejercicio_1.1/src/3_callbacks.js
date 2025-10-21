"use strict"

/*Exercici 1.3 nivel 1*/

function procesar (nombre, callback) {
    if (typeof callback === 'function'){
        callback(nombre);
    } else {
        console.error("Error: El segon paràmetre no és una funció de callback.")
    }
}
procesar("irene","pedro")

/*Exercici 1.3 nivel 1*/

const suma = ( a, b ) => { return a + b }

function calculadora (num1, num2, callback2){
    return callback2 (num1, num2)
}

let resultatSuma = calculadora(5, 7, suma)
console.log (`la suma de 5 y 7 es: ${resultatSuma}`)


/*Exercici 1.3 nivel 2*/

function esperarSaludar (nom, retraso) {
    setTimeout(() => { console.log(`¡Hola, ${nom}!`)}, retraso)
}

const nombreUsuario = "Juanito";
const tiempoEspera = 2000;

esperarSaludar(nombreUsuario, tiempoEspera)

console.log()

/*Exercici 1.3 nivel 2*/

const transformador = (nom) => { return nom.toUpperCase() };

function procesarElements(nombresArr, funcionTransformadora) {
    const nombresTransformados = [];

    for (const nom of nombresArr) {
        const nombreTransformado = funcionTransformadora(nom); 
        nombresTransformados.push(nombreTransformado);
    }

    return nombresTransformados;
}

const listaNombres = ["ana", "pablo", "maria", "juan"];
const nombresFinales = procesarElements(listaNombres, transformador);

console.log(nombresFinales)

/*Exercici 1.3 nivel 3*/

const mostrarResultat = (resultat) => {
    console.log(`cadena procesada: ${resultat}`);
}

function processarCadena (cadena, callback3) {
    const cadenaTransformada = cadena.toUpperCase()
    callback3(cadenaTransformada)
}

const textOriginal = "esta es una prueba";
processarCadena(textOriginal, mostrarResultat);

