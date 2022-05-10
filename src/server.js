const { response } = require('express')
const cors = require('cors')
const express = require('express')
const knex = require('./database')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/logs', (req, res) => {
    knex('logs').then(result => {
        return res.json(result)
    }).catch(error => {
        console.log(error)
    })
})

app.post('/calculate', (req, res)=> {
    const result = eval(req.body.calculation)
    console.log('result', result)
    knex('logs').insert({
        username: req.body.username,
        calculation: req.body.calculation,
        result: result.toString()
    }).then(response => {
        res.status(202).json({'success' : true, 'result': result})
    }).catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
})

app.listen(7777, () => {
    console.log("Server is running")
})