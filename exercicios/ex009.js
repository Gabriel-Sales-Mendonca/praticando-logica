const input = require('prompt-sync')({sigint: true})

class Tabuada {
    constructor(num) {
        this.num = num
        this.mostraTabuada(this.num)
    }

    mostraTabuada(num) {
        for(let mult = 1; mult <= 10; mult++) {
            console.log(`${num} X ${mult} = ${num * mult}`)
        }
    }
}

const num = Number(input('Digite um número para ver sua tabuada: '))
const tabuada = new Tabuada(num)