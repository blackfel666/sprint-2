"use strict"


const mapEjm = [1, 2, 3, 4]
const quadrat = mapEjm.map ( num => num * num )
console.log(quadrat)


const filterEjm = [1, 2, 3, 4]
const parells = filterEjm.filter ( num => num % 2 === 0 )
console.log(parells)


const findejEjm = [1, 10 , 8, 11]
const numMayor = findejEjm.find (num => num > 10)
console.log(numMayor)


const reduceEjm = [13, 7, 8, 21]
const sumTodo = reduceEjm.reduce((acc , num ) => { return acc + num;}, 0)
console.log(sumTodo)


const arr1 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]
const oneLine = arr1.filter (num => num >= 10) .map(num => num * 2 ) .reduce((acc, num)=>{return acc + num},0)
console.log(oneLine)

const everySome =  [11, 12, 13, 14]
const sonMajor =  everySome.every ( num => num >= 10 ) && everySome.some(num => num >= 10)
console.log(sonMajor)




