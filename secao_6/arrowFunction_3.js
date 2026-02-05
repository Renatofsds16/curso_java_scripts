let comparaComThis = function (param){
    console.log(param === this)
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(param === this)
console.log('************************************************************')
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

console.log('************************************************************')
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)