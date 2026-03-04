import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // caso envie JSON também

app.post('/usuarios', (request, response) => {
    console.log(request.body)
    response.send('<h1>Parabéns. Usuario incluido</h1>')
})

app.post('/usuarios/:id', (request, response) => {
    console.log(request.params.id)
    console.log(request.body)
    response.send('<h1>Parabéns. Usuario alterado</h1>')
})

app.listen(3003, () => {
    console.log('Servidor rodando na porta 8080')
})