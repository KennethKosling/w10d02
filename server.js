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

// Pass it around

app.get('/', (req, res) => {
    res.send(`99 bottles of milk on the wall, 99 bottles of beer, <a href='/98'> take one down, pass it around</a>`)
})

app.get('/:number', (req, res) => {
    if(req.params.number != 0){
        res.send(`${req.params.number} bottles of milk on the wall, ${req.params.number--} bottles of milk, <a href='/${req.params.number}'> take one down, pass it around<a>`)
    } else {
        res.send(`None of the bottles of milk on the wall, none of the bottles of milk, <a href='/'>they\'re all gone now, put \'em back up</a>`)
    }
})

app.listen(3000)