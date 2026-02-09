const pessoa = {
  nome: "Renato",
  idade: 25,
  falar() {
    console.log("Olá, meu nome é " + this.nome)
  }
}

pessoa.falar()

const pessoa2 = new Object()
pessoa.nome = "Renato"
pessoa.idade = 25

console.log(pessoa)

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

        this.falar = function () {
            console.log("Meu nome é " + this.nome)
        }
    }
}

const p1 = new Pessoa("Renato", 25)
const p2 = new Pessoa("Ana", 30)

p1.falar()