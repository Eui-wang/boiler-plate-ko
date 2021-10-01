const express = require('express')
const app = express()
const port = 9000
const { User } = require("./models/User");
const config = require('./config/key');
//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//application/json
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!'))

app.post('/register', (req, res) => {
    //회원가입시 필요한 정보들을 cliet에서 가져오면
    //Database에 넣는다.
    const user = new User(req.body)
    user.save((err, userinfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({ success: true})
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))