function Aula(nome,videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('bem vindo',123)
const aula2 = new Aula('Ate breve',12553)
console.log(aula1,aula2)

//simulando new
function novo(func,...params){
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj,params)
    return obj
}

const aula4 = novo(Aula,'ola mundo',78996)
console.log(aula4)