const input = require('prompt-sync')({sigint: true})

class Casa {
    constructor(valor) {
      this._valor = Number(valor);
    }
  
    get valor() {
      return this._valor;
    }
  }
  
class Financiamento extends Casa {
    constructor(valor, salario, anos) {
        super(valor);
        this._salario = salario;
        this._anos = anos;
        this._prestacao = this.calculaPrestacao();
    }

    get anos() {
        return this._anos;
    }

    get prestacao() {
        return this._prestacao;
    }

    calculaPrestacao() {
        return this.valor / this._anos / 12;
    }

    concederEmprestimo() {
        if (this._prestacao > (30 / 100) * this._salario) return false;
        return true;
    }
    }

class Comprador {
    constructor(salario) {
        this._salario = salario;
    }

    get salario() {
        return this._salario;
    }
    }

const valorCasa = Number(input('Valor da casa: R$'))
const salario = Number(input('Salário do comprador: R$'))
const anosFinanciamento = Number(input('Quantos anos de financiamento? '))

const casa1 = new Casa(valorCasa);
const comprador1 = new Comprador(salario);
const financiamento1 = new Financiamento(casa1.valor, comprador1.salario, anosFinanciamento);

console.log(`Para pagar uma casa de R$${casa1.valor.toFixed(2)} em ${financiamento1.anos} anos a prestação será de R$${financiamento1.prestacao.toFixed(2)}.`);

if (financiamento1.concederEmprestimo()) console.log('Empréstimo pode ser CONCEDIDO!');
else console.log('Empréstimo NEGADO!');
