const input = require('prompt-sync')({sigint: true})

const num = Number(input('Digite um número: '))
const antecessor = num - 1
const sucessor = num + 1

console.log(`Analisando o valor ${num}, seu antecessor é ${antecessor} e o sucessor é ${sucessor}`)