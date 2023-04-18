const express = require('express')
const app = express()
require('dotenv').config()
const rotas = require('./rotas')


app.use(express.json())
app.use(rotas)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})