const input = require('prompt-sync')({sigint: true})

const nota1 = Number(input('Primeira nota do aluno: '))
const nota2 = Number(input('Segunda nota: '))

const media = (nota1 + nota2) / 2

console.log(`A média entre ${nota1} e ${nota2} é igual a ${media.toFixed(1)}`)