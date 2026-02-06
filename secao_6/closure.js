function contador(){
    let num = 0
    return function Soma(){
        num++
        return num
    }
}

const myFunction = contador()
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())