const input = require('prompt-sync')({sigint: true})

// (0 °C × 9/5) + 32
const celsius = Number(input('Informe a temperatura em °C: '))

const fahrenheit = (celsius * (9 / 5)) + 32

console.log(`A temperatura de ${celsius.toFixed(1)}°C corresponde a ${fahrenheit.toFixed(1)}°F!`)