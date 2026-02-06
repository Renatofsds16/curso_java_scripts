/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacao(num1,num2){
    return `somar: ${num1 + num2} sub: ${num1 - num2} multi: ${num1 * num2} div: ${num1 / num2}`
}

console.log(operacao(10,20))