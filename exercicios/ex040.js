const input = require('prompt-sync')({sigint: true})

const n1 = Number(input('Nota 1: '))
const n2 = Number(input('Nota 2: '))
const media = (n1 + n2) / 2

if(media < 5) console.log('REPROVADO')
else if(media >= 5 && media < 7) console.log('RECUPERAÇÃO')
else console.log('APROVADO')