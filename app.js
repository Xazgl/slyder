const express = require('express')
const app = express()

app.get('/api/test', (req,res) => {
    res.send('hello')
})
app.get('/api/test', (req,res) => {
    res.send('hello')
})
app.get('/api/test', (req,res) => {
    res.send('hello')
})
app.get('/api/test', (req,res) => {
    res.send('hello')
})

app.use(express.static('public'))

app.listen(3000)