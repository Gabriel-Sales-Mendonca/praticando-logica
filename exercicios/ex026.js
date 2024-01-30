const input = require('prompt-sync')({sigint: true})

class AnaliseLetraA {
    constructor(frase) {
        this.frase = frase
        this.qtdA = 0
        this.primeiroA = 0
        this.ultimoA = 0
        this.analisandoLetraA()
    }

    analisandoLetraA() {
        let indicesA = []
        for(let letra in this.frase) {
            if(this.frase[letra].toLowerCase() === 'a') {
                this.qtdA += 1
                indicesA.push(Number(letra) + 1)
            }
        }

        this.primeiroA = indicesA[0]
        this.ultimoA = indicesA[indicesA.length - 1]
    }
}

const frase = input('Digite uma frase: ').trim()

const frase1 = new AnaliseLetraA(frase)

console.log(`A letra A aparece ${frase1.qtdA} vezes na frase.`)
console.log(`A primeira letra A apareceu na posição ${frase1.primeiroA}.`)
console.log(`A última letra A apareceu na posição ${frase1.ultimoA}.`)