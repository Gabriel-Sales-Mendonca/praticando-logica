const input = require('prompt-sync')({sigint: true})

function temSilva(frase) {    
    const fraseArray = frase.split(' ')

    for(let palavra of fraseArray) {
        if(palavra.toLowerCase() === 'silva') return true
        return false
    }
}

const nomeCompleto = input('Qual é seu nome completo? ').trim()

console.log(`Seu nome tem Silva? ${temSilva(nomeCompleto)}`)