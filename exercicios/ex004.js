const input = require('prompt-sync')({sigint: true})

function isSpace(digitado) {
    let digitadoArray = digitado.split('')
    console.log(digitadoArray)
    const soEspaco =  digitadoArray.filter((valor) => {
        return valor === ' '
    })

    if(digitadoArray.length === soEspaco.length) return true
    return false
}

const digitado = input('Digite algo: ')

const soEspaco = isSpace(digitado)
console.log(`Só tem espaços? ${soEspaco}`)