const input = require('prompt-sync')({sigint: true})

class Numero {
    constructor(num) {
        this._num = num
    }

    get num() {
        return this._num
    }

    set num(valor) {
        if(typeof valor === 'number') this._num = valor
        else console.log('Valor inválido')
    }

    parOuImpar() {
        if(this._num % 4 === 0 && this._num % 100 !== 0 || this._num % 400 === 0) return 'par'
        return 'ímpar'
    }
}

const num = Number(input('Me diga um número qualquer: '))

const num1 = new Numero(num)
const num1ParOuImpar = num1.parOuImpar()

console.log(`O número ${num1.num} é ${num1ParOuImpar}`)