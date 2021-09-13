const { response, Router } = require('express')
const router = require('express').Router()
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const users = require ('./controller/users')
const port = 3000

var data1 = [{aswar:"harman"},{tiara:"harmany"},{harman:21}]

var myLogger = function (req, res, next){
  next()
}
app.use(myLogger)

app.post('/input', users.input) 

app.get('/', (req, res) => {
    console.log('berhasl')
  res.send('Hello World!')
})

app.get('/aswar',(req, res)=> {
    res.json({
      status: true,
      messsage: "berhasil di input ",
      data: data1[1].tiara
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})