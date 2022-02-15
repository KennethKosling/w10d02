const express = require('express')
const app = express()
const tipCalc = require('./tip')

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Yo! Welcome to the spot, ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>${tipCalc(req.params.total, req.params.tipPercentage)}</h1>`)
})

app.listen(3000)