const input = require('prompt-sync')({sigint: true})

const velocidade = Number(input('Qual é a velocidade atual do carro? '))

if(velocidade <= 80) console.log('Tenha um bom dia.')
else {
    const multa = 7 * (velocidade - 80)
    console.log(`Você foi multado, a multa irá custar R$${multa.toFixed(2)}`)
}