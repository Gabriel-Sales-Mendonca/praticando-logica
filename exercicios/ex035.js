const input = require('prompt-sync')({sigint: true})

class Triangulo {
    constructor(reta1, reta2, reta3) {
      this._reta1 = Number(reta1);
      this._reta2 = Number(reta2);
      this._reta3 = Number(reta3);
    }
  
    formaTrinagulo() {
      if (this._reta1 + this._reta2 > this._reta3 && this._reta1 + this._reta3 > this._reta2 && this._reta2 + this._reta3 > this._reta1) {
        return true;
      } else return false;
    }
  }

const seg1 = Number(input('Primeiro seguimento: '))
const seg2 = Number(input('Segundo seguimento: '))
const seg3 = Number(input('Terceiro seguimento: '))

const triangulo1 = new Triangulo(seg1, seg2, seg3);
const eTriangulo = triangulo1.formaTrinagulo();

if (triangulo1.formaTrinagulo()) console.log('Os segmentos acima PODEM formar triângulo');
else console.log('Os segmentos acima NÃO PODEM formar triângulo');
  