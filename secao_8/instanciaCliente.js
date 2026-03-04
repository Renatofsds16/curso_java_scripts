import contadorA from './intanciaNovaVsIntanciaUnica.js'
import contadorB from './intanciaNovaVsIntanciaUnica.js'

import cont from './intanciaNova.js'

const contadorC = cont()

contadorA().inc()
contadorA().inc()
console.log(contadorB.valor)