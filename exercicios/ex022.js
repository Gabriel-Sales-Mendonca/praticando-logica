const input = require('prompt-sync')({sigint: true})

const nome = input('Digite seu nome completo: ').trim()

console.log('Analisando seu nome...')

let primeiroNome = ''
const nomeSemEspaco = nome.replace(/ /g, '')

for(let c = 0; c < nome.length; c++) {
    if(nome[c] === ' ') {
        primeiroNome = nome.slice(0, c)
        c = nome.length
    }
}

setTimeout(function() {
    console.log(`Seu nome em maiúsculas é ${nome.toUpperCase()}`)
    console.log(`Seu nome em minúsculas é ${nome.toLowerCase()}`)
    console.log(`Seu nome tem ao todo ${nomeSemEspaco.length} letras`)
    console.log(`Seu primeiro nome é ${primeiroNome} e tem ${primeiroNome.length} letras`)
}, 1000)