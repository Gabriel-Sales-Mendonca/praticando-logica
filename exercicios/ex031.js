const input = require('prompt-sync')({sigint: true})

class Viagem {
    constructor(distancia) {
        this._distancia = distancia
        this._preco
    }

    get distancia() {
        return this._distancia
    }

    get preco() {
        return this._preco
    }

    set distancia(valor) {
        if(typeof valor !== 'Number') console.error('Valor inválido')
        else this._distancia = valor
    }

    calculaPreco() {
        if(this._distancia <= 200) this._preco = 0.50 * this._distancia
        else this._preco = 0.45 * this._distancia
    }
}


const distancia = Number(input('Qual é a distância da sua viagem? '))
const primeiraViagem = new Viagem(distancia)

primeiraViagem.calculaPreco()

console.log(`Você está prestes a começar uma viagem de ${primeiraViagem.distancia.toFixed(1)}km.`)
console.log(`E o preço da sua passagem será de R$${primeiraViagem.preco.toFixed(2)}`)