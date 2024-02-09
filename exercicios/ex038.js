const input = require('prompt-sync')({sigint: true})

class Maior {
    constructor(num1, num2) {
      this._num1 = num1;
      this._num2 = num2;
      this._maiorNumero = this.maiorNumero();
    }

    get maiorNumero() {
        return this._maiorNumero
    }
  
    maiorNumero() {
      let arrayNumeros = [this._num1, this._num2];
      arrayNumeros.sort(function (a, b) {
        return a - b;
      });
  
      return arrayNumeros[arrayNumeros.length - 1];
    }
  }

const num1 = Number(input('Primeiro número: '))
const num2 = Number(input('Segundo número: '))
  
const numeros = new Maior(num1, num2);

console.log(`O maior número é o ${numeros.maiorNumero}`);
  