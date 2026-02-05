function soma(a,b){
    return a + b
}
function imprimirResultado(a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(5,4,(a,b) => a * b)
imprimirResultado(5,20,function (a,b){
    return b / a
})