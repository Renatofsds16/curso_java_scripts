//cria um funçao construtora e uma classe contrutora


function Pessoa(nome){
    this.nome = nome
    this.falar = ()=> console.log(`ola ${this.nome}`)
}

const p = new Pessoa('Renato Firmino')
p.falar()

class Pessoa2 {
    constructor(nome){
        this.nome = nome
        this.falar = ()=>console.log(`ola ${this.nome} da pessoa 2`)
    }
}

const p2 = new Pessoa2('Tatiana')
p2.falar()


const criarPessoa = (nome) => {
        return {nome:nome}
    }
console.log(criarPessoa('Renan Elias'))