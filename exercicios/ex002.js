const input = require('prompt-sync')({sigint: true});

const nome = input('Digite seu nome: ')
console.log(`É um prazer te conhecer, ${nome}!`)