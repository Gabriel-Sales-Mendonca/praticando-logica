const input = require('prompt-sync')({sigint: true})

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let alunos = []

for(let c = 1; c <= 4; c++) {
    let aluno = input(`${c}º aluno: `)
    alunos.push(aluno)
}

for(let c = 0; c < alunos.length; c++) {
    let sorteado = rand(0, alunos.length)
    let valorIndiceC = alunos[c] // armazena o valor que está no índice alunos[c] antes que esse valor seja substituído pelo valor do índice alunos[sorteado]

    alunos[c] = alunos[sorteado]
    alunos[sorteado] = valorIndiceC
}

console.log(`A ordem de apresentação será:`)
console.log(alunos)