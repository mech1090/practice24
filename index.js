const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('Testint')
})

app.get('*',(req,res)=>{
    res.send('Bad_request')
})

app.listen(config.get('port'),()=>{
    console.log(`Server is running on port ${config.get('port')}`)
})