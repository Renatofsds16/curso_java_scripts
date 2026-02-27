const alunos = [
    {nome:'pedro',nota: 9,bolsista: false},
    {nome:'maria',nota: 8,bolsista: false},
    {nome:'ana',nota: 7,bolsista: true},
    {nome:'renato',nota: 6,bolsista: false},
    {nome:'thiago',nota: 10,bolsista: true},
]


const todosBolsistas = (resultado,bolsista) => {
    return resultado && bolsista


}

const algumBolsistas = (resultado,bolsista) => {
    return resultado || bolsista
}
//1) todos os alunos sao bolsistas
console.log(alunos.map((e)=>e.bolsista).reduce(todosBolsistas))

//2) algum aluno bolsista
console.log(alunos.map((e)=>e.bolsista).reduce(algumBolsistas))
