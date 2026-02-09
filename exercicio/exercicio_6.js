/*06)
Elabore duas funções que recebem três parâmetros: capital inicial, 
taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime 
de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.  
*/

function taxaJurosSimples(capitalInicial,taxaJuro,tempoAplicacao){
    const juros = (capitalInicial * taxaJuro) * tempoAplicacao
    return capitalInicial + juros
}

function taxaJurosCompostos(capitalInicial,taxaJuro,tempoAplicacao){
    const montante = capitalInicial * Math.pow((1 + taxaJuro),tempoAplicacao)
    return montante
}


console.log( 'taxa de juros simples ' + taxaJurosSimples(100,0.5,2))
console.log( 'taxa de juros compostos ' + taxaJurosCompostos(100,0.5,2))