const input = require('prompt-sync')({sigint: true})

console.log('Vou pensar em um número entre 0 e 5. Tente adivinhar...')

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const numComputador = rand(0, 5)
const numPessoa = Number(input('Em que número eu pensei? '))

setTimeout(() => {
    console.log('PROCESSANDO...')
    
    if(numComputador === numPessoa) {
        console.log('Parabéns, você acertou, eu penseu no número ' + numComputador)
    } else {
        console.log(`GANHEI! Eu pensei no número ${numComputador} e não no ${numPessoa}`)
    }
}, 1000)