import moduloA from '../../moduloA.js';
import http from 'http';
console.log(moduloA.ola)
http.createServer((req,response)=>{
    response.write('bom dia')
    response.end()
}).listen(8080)

