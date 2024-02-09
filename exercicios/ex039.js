const input = require('prompt-sync')({sigint: true})

class Alistamento {
    constructor(anoNascimento) {
        this._anoNascimento = anoNascimento
        this._idade = this.calculaIdade(this._anoNascimento)
    }

    get anoNascimento() {
        return this._anoNascimento
    }

    get idade() {
        return this._idade
    }

    set anoNascimento(anoNascimento) {
        if(typeof ano !== 'number') return
        else this._anoNascimento = anoNascimento
    }

    calculaIdade(anoNascimento) {
        const anoAtual = this.pegaAnoAtual()
        return anoAtual - anoNascimento
    }

    pegaAnoAtual() {
        const ano = new Date()
        return ano.getFullYear()
    }
}

const anoNascimento = Number(input('Ano de nascimento: '))

const pessoa1 = new Alistamento(anoNascimento)

console.log(`Quem nasceu em ${pessoa1.anoNascimento} tem ${pessoa1.idade} anos em ${pessoa1.pegaAnoAtual()}.`)

if(pessoa1.idade < 18) {
    console.log(`Ainda faltam ${18 - pessoa1.idade} anos para o alistamento.`)
    console.log(`Seu alistamento será em ${(18 - pessoa1.idade) + pessoa1.pegaAnoAtual()}`)
}
else if(pessoa1.idade === 18) console.log(`Você deve se alistar IMEDIATAMENTE.`)
else {
    console.log(`Você já deveria ter se alistado há ${pessoa1.idade - 18} anos.`)
    console.log(`Seu alistamento foi em ${pessoa1.pegaAnoAtual() - (pessoa1.idade - 18)}`)
}