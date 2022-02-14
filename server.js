const express = require('express')
const app = express()

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Yo! Welcome to the spot, ${req.params.name}</h1>`)
})

app.listen(3000)