const input = require('prompt-sync')({sigint: true})

const nomeCompleto = input('Digite seu nome completo: ').trim()

const nomeArray = nomeCompleto.split(' ')

console.log('Muito prazer em te conhecer!')
console.log(`Seu primeiro nome é ${nomeArray[0]}`)
console.log(`Seu último nome é ${nomeArray[nomeArray.length - 1]}`)