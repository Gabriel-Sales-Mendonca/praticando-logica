const input = require('prompt-sync')({sigint: true})

class MenorEMaior {
    constructor(v1, v2, v3) {
      this._valores = [v1, v2, v3];
      this._menor;
      this._maior;
    }
  
    get menor() {
      return this._menor;
    }
    get maior() {
      return this._maior;
    }
  
    menorEMaior() {
      this._valores.sort(function (a, b) {
        return a - b;
      });
  
      this._menor = this._valores[0];
      this._maior = this._valores[this._valores.length - 1];
    }
  }

  const num1 = input('Primeiro valor: ')
  const num2 = input('Segundo valor: ')
  const num3 = input('Terceiro valor: ')
  
  const numeros = new MenorEMaior(num1, num2, num3);
  numeros.menorEMaior();
  
  console.log('O menor valor digitado foi ' + numeros.menor);
  console.log('O maior valor digitado foi ' + numeros.maior);
  