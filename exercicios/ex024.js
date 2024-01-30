const input = require('prompt-sync')({sigint: true})

function eSanto(cidade) {
    const palavras = cidade.split(' ')
    if(palavras[0] === 'santo') return true
    return false
}

const cidade = String(input('Em que cidade você nasceu? ').trim()).toLowerCase()

console.log(eSanto(cidade))