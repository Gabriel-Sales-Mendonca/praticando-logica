const input = require('prompt-sync')({sigint: true})

const valor = Number(input('Digite um valor: '))

const inteiro = parseInt(valor)
console.log(`O valor digitado foi ${valor} e a sua porção inteira é ${inteiro}`)