/*08) 
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo). */

function analise(listaPontos){
    let maisPontos = 0
    let menosPontos = 0
    let recorde = 0
    let index = 0
    const novaLista = listaPontos.map((e)=>parseInt(e))
    for(let i in novaLista){
        if(novaLista[i] >= maisPontos){
            recorde++
            maisPontos = novaLista[i]
        }
        if(novaLista[i]<= novaLista[0]){
            menosPontos = novaLista[i]
            index = novaLista.indexOf(menosPontos)
        }
    }
    return `mais pontos ${maisPontos} e menos pontos ${menosPontos} bateu seu recorde ${recorde} vezes e seu pior jogo foi n:${index}`

}
const  lista  = ['9','5','6','89','30','12']
console.log(analise(lista))
