const express = require('express')
const app = express()
const tipCalc = require('./tip')
const eightBall = require('./magic')

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Yo! Welcome to the spot, ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>${tipCalc(req.params.total, req.params.tipPercentage)}</h1>`)
})

app.get('/magic/:question', (req, res) => {
    res.send(`
    ${req.params.question}?
    <h1>${eightBall.random}</h1>
    Disclaimer: The only way to change the message is to restart the server.
    `)
})

app.listen(3000)