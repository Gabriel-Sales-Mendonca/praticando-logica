const input = require('prompt-sync')({sigint: true})

function calculaHipotenusa(co, ca) {
    let hipotenusa = co**2 + ca**2
    hipotenusa **= 0.5
    return hipotenusa
}

const co = parseFloat(input('Comprimento do cateto oposto: '))
const ca = parseFloat(input('Comprimento do cateto adjacente: '))

const hipotenusa = calculaHipotenusa(co, ca)
console.log(`A hipotenusa vai medir ${hipotenusa.toFixed(2)}`)