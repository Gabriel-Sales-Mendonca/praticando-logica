const input = require('prompt-sync')({sigint: true})

const num = input('Digite um número: ')

const dobro = num * 2
const triplo = num * 3
const raiz = num ** 0.5

console.log(`O dobro de ${num} vale ${dobro}.`)
console.log(`O triplo de ${num} vale ${triplo}.`)
console.log(`A raiz quadrada de ${num} é igual ${raiz.toFixed(2)}.`)