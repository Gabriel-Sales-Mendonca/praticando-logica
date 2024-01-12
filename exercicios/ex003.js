const input = require('prompt-sync')({sigint: true})

const num1 = Number(input('Digite um valor: '))
const num2 = Number(input('Digite outro valor: '))
const res = num1 + num2

console.log(`A soma entre ${num1} e ${num2} é igual a ${res}!`)