import axios from "axios"

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario,funcionarioAtual)=>{
    return funcionario.salario < funcionarioAtual.salario  ? funcionario : funcionarioAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    const resultado = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(resultado)
})