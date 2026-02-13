/*16)
Utilizando a estrutura do Switch faça um programa 
que simule uma calculadora 
básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação 
e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: 
calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  
Crie um caso default para operações inválidas*/

function operacao(a,b,c){
    switch(b){
        case '+':
            console.log(a + c)
            break
        case '-':
            console.log(a - c)
            break
        case '/':
            if(a == 0){
                console.log('operação invalida')
                break
            }else{
                console.log(a / c)
                break
            }
        case '*':
            console.log(a * c)
            break
        default:
            console.log('operação invalida')
            break
    }
}
operacao(50,'/',2)
operacao(50,'+',2)
operacao(50,'*',2)
operacao(50,'-',2)
operacao(0,'/',2)
operacao(50,'g',2)

console.log(2 / 0)
