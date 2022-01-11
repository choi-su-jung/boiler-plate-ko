const express = require('express')
const app = express()
const port = 4000


const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://sujngchoi:tnwjd03@boilerplate.wvdow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 반가워요 헬로월드')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})