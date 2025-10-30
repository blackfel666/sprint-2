"use strict"


function procesar(nombre, callback) {
	return callback(nombre);
}
function printNombre(nombre) {
	return `El nombre es ${nombre}`;
}
console.log(procesar(25, printNombre));


const suma = ( a, b ) => { return a + b }
function calculadora (num1, num2, callback2){
    return callback2 (num1, num2)
}

let resultatSuma = calculadora(5, 7, suma)
console.log (`la suma de 5 y 7 es: ${resultatSuma}`)



function esperarSaludar (nom, retraso) {
    setTimeout(() => { console.log(`¡Hola, ${nom}!`)}, retraso)
}

const nombreUsuario = "Juanito";
const tiempoEspera = 2000;

esperarSaludar(nombreUsuario, tiempoEspera)

console.log()


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


const mostrarResultat = (resultat) => {
    console.log(`cadena procesada: ${resultat}`);
}

function processarCadena (cadena, callback3) {
    const cadenaTransformada = cadena.toUpperCase()
    callback3(cadenaTransformada)
}

const textOriginal = "esta es una prueba";
processarCadena(textOriginal, mostrarResultat);

