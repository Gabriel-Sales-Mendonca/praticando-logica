const input = require('prompt-sync')({signint: true})

class atleta {
    constructor(anoNascimento) {
        this.anoNascimento = anoNascimento
        this.idade = this.calculaIdade()
        this.category = this.defineCategory()
    }

    calculaIdade() {
        const data = new Date()
        const anoAtual = data.getFullYear()

        return anoAtual - this.anoNascimento
    }

    defineCategory() {
        if(this.idade <= 9) return "MIRIM"
        else if(this.idade <= 14) return "INFANTIL"
        else if(this.idade <= 19) return "JUNIOR"
        else if(this.idade <= 25) return "SENIOR"
        else return "MASTER"
    }
}

const anoNasicmento = input('Ano de nascimento: ')
const atleta1 = new atleta(anoNasicmento)

console.log(`O atleta tem ${atleta1.idade} anos.`)
console.log(`Classificação: ${atleta1.category}`)