const input = require('prompt-sync')({sigint: true})

class Carro {
    constructor(placa) {
        this.placa = placa
    }
    valorTotal(dia, km) {
        return ((dia * 60) + (km * 0.15)).toFixed(2)
    }
}

const dia = parseInt(input('Quantos dias alugados? '))
const km = Number(input('Quantos km rodados? '))

const carro1 = new Carro('abc1234')
const total = carro1.valorTotal(dia, km)
console.log(`O total a pagar é de R$${total}`)