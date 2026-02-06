/**04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado
e o resto da divisão destes dois valores
 * 
 */

function divisor(dividendo,divisor){
    const resultado = dividendo / divisor
    const resto = dividendo % divisor

    console.log(resultado , resto)
}

 divisor(11,5)