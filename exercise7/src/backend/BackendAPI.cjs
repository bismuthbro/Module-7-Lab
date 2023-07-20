let Express = require('express')
let App = Express()
let Posts = require('./Posts.json')
const cors = require('cors')
App.use(cors())
App.use(Express.json())
App.get('/',(req,res)=>{
    res.json(Posts)
})
App.post('/',(req,res)=>{
    Posts.push(req.body)
    res.send('sent post')
})
App.listen(3001)