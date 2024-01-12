const input = require('prompt-sync')({sigint: true})

const m = Number(input('Uma distância em metros: '))

const km = m / 1000
const hm = m / 100
const dam = m / 10
const dm = m * 10
const cm = m * 100
const mm = m * 1000

console.log(`A medida de ${m}m corresponde a`)
console.log(km + 'km')
console.log(hm + 'hm')
console.log(dam + 'dam')
console.log(dm + 'dm')
console.log(cm + 'cm')
console.log(mm + 'mm')