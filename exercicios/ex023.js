const input = require('prompt-sync')({sigint: true})

class separandoDigitos {
    constructor(num) {
        this.num = num
        this.numString = this.transformaNumero(num)
        this.unidade = this.numString.slice(this.numString.length - 1)
        this.dezena = this.numString.slice(this.numString.length - 2, this.numString.length - 1)
        this.centena = this.numString.slice(this.numString.length - 3, this.numString.length - 2)
        this.milhar = this.numString.slice(0, this.numString.length - 3)
    }

    transformaNumero(num) { // Esse método não era necessário existir, coloquei apenas para treinar
        return String(num)
    }
}

const num = input('Informe um número: ')

const numero = new separandoDigitos(num)

console.log(`Analisando o número ${numero.num}`)
console.log(`Unidade: ${numero.unidade}`)
console.log(`Dezena: ${numero.dezena}`)
console.log(`Centena: ${numero.centena}`)
console.log(`Milhar: ${numero.milhar}`)