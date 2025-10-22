"use strict"

/*Exercici 1.5 nivel 1*/

const mapEjm = [1, 2, 3, 4]
const quadrat = mapEjm.map ( num => num * num )
console.log(quadrat)

/*Exercici 1.5 nivel 1*/

const filterEjm = [1, 2, 3, 4]
const parells = filterEjm.filter ( num => num % 2 === 0 )
console.log(parells)

/*Exercici 1.5 nivel 1*/

const findejEjm = [1, 10 , 8, 11]
const numMayor = findejEjm.find (num => num > 10)
console.log(numMayor)

/*Exercici 1.5 nivel 1*/

const reduceEjm = [13, 7, 8, 21]
const sumTodo = reduceEjm.reduce( num => num + num )
console.log(sumTodo)

/*Exercici 1.5 nivel 2*/

const arr1 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]
const oneLine = arr1.filter (num => num >= 10) .map(num => num * 2 ) .reduce( num => num + num )
console.log(oneLine)

/*Exercici 1.5 nivel 3*/

const everySome =  [11, 12, 13, 14]
const sonMajor =  everySome.every ( num => num >= 10 ) && everySome.some(num => num >= 10)
console.log(sonMajor)




