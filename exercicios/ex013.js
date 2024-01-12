const input = require('prompt-sync')({sigint: true})

const salario = Number(input('Qual o salário do funcionário? R$'))

const salarioComAumento = salario + ((15 / 100) * salario)

console.log(`Um funcionário que ganhava R$${salario.toFixed(2)}, com 15% de aumento, passa a receber R$${salarioComAumento.toFixed(2)}`)