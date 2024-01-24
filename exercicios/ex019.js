const input = require('prompt-sync')({sigint: true})

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let alunos = []

for(let c = 1; c <= 4; c++) {
    let nome = input(`${c}° aluno: `)
    alunos.push(nome)
}

const sorteado = rand(0, alunos.length)
console.log(alunos[sorteado])