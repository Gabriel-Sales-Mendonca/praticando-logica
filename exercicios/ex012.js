const input = require('prompt-sync')({sigint: true})

class Descontar {
    constructor(preco, desconto) {
        this.precoFinal = preco - ((desconto / 100) * preco)
    }
}

const preco = Number(input('Qual é o preço do produto? R$'))
const desconto = 5

const precoFinal = new Descontar(preco, desconto)
console.log(`O produto que custava R$${preco.toFixed(2)}, na promoção com desconto de ${desconto}% vai custar R$${precoFinal.precoFinal.toFixed(2)}`)