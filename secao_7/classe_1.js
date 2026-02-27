class Lancamento {
    constructor(nome = 'generico',valor = 0){
        this.nome = nome
        this.valor = valor
    }
}


class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []

    }
    addLancamento(...lanc){
        lanc.forEach(l => this.lancamento.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('salario',4500)
const contaLuz = new Lancamento('luz',-200)
const conta = new CicloFinanceiro(6,2018)
conta.addLancamento(salario,contaLuz)
console.log(conta.sumario())
