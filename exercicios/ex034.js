const input = require('prompt-sync')({sigint: true})

class Funcionario {
    constructor(salario) {
      this._salario = salario;
      this._novoSalario;
    }
  
    get salario() {
      return this._salario;
    }
  
    aumento() {
      if (this._salario > 1250)
        this._novoSalario = this._salario + (10 / 100) * this._salario;
      else this._novoSalario = this._salario + (15 / 100) * this._salario;
    }
  }
  
const funcionario = Number(input('Qual é o salário do funcionáio? R$'))

const funcionario1 = new Funcionario(funcionario);

funcionario1.aumento();

console.log(`O funcionario que ganhava R$${funcionario1.salario.toFixed(2)} passa a ganhar R$${funcionario1._novoSalario.toFixed(2)} agora.`);
  