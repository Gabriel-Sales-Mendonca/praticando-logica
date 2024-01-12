const input = require('prompt-sync')({sigint: true})

function conversor(real) {
    return (real / 4.9).toFixed(2)
}

const real = Number(input('Quanto dinheiro você tem na carteira? R$'))
const dolar = conversor(real)

console.log(`Com R$${real.toFixed(2)} você pode comprar U$${dolar}`)