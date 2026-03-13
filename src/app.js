const express = require('express')

const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})

const produtosRoutes = require('./routes/produtos')

app.use('/api/v1/produtos', produtosRoutes)