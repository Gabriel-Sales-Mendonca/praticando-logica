const input = require('prompt-sync')({sigint: true})

const largura = Number(input('Largura da parede: '))
const altura = Number(input('Altura da parede: '))

const area = largura * altura
const litros = area / 2

console.log(`Sua parede tem a dimensão de ${largura}x${altura} e sua área é de ${area.toFixed(3)}m².`)
console.log(`Para pintar essa parede, você precisará de ${litros.toFixed(4)}l de tinta.`)