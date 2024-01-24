const input = require('prompt-sync')({sigint: true})

function rand() {
    const sorteado = parseInt(Math.random() * 4 + 0.5)
    if (sorteado === 0) return 1
    return sorteado
}

const primeiro = input('Primeiro aluno: ')
const segundo = input('Segundo aluno: ')
const terceiro = input('Terceiro aluno: ')
const quarto = input('Quarto aluno: ')

const sorteado = rand()

if(sorteado === 1) console.log('O aluno escolhido foi ' + primeiro)
if(sorteado === 1) console.log('O aluno escolhido foi ' + segundo)
if(sorteado === 1) console.log('O aluno escolhido foi ' + terceiro)
if(sorteado === 1) console.log('O aluno escolhido foi ' + quarto)