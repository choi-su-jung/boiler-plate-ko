const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//서버에서 분석해서 가져올수있게함
//application/x-www-form-urlencoded 타입으로 
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://sujngchoi:tnwjd03@boilerplate.wvdow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 반가워요 헬로월드')
})

app.post('/register', (req, res) => {
  
  //회원가입할때 필요한 정보들 client에서 가져오면
  //그것들을 데이터베이스에 넣는다.

  const user = new User(req.body)
  user.save((err, userInfo) =>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})