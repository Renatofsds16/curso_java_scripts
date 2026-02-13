/*13)  
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia 
inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a 
estrutura Switch. */

function diaUltil(dia){
    switch(dia){
        case 1:
            console.log('domingo dia nao ultil')
            break
        case 7:
            console.log('sabado dia nao ultil')
            break
        case numero(dia):
            console.log('dia ultil')
            break
        default:
            console.log('dia invalido')
            break
    }
}
function numero(num){
    if(num > 1 && num < 7){
        return num
    }

}


diaUltil(1)
diaUltil(2)
diaUltil(3)
diaUltil(4)
diaUltil(5)
diaUltil(6)
diaUltil(7)
diaUltil(0)
diaUltil(9)
diaUltil(100)
diaUltil(1)