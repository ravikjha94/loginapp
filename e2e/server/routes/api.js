const express = require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const mongoose=require('mongoose')

const User=require('../models/users')
const db="mongodb://ravi:ravi45@ds159812.mlab.com:59812/eventdb"
mongoose.connect(db,err=>
    {
        if(err){
        console.error('error'+err)}
        else{
            console.log('dabase is connect')
        }
    })
    function verifyToken(req,res,next){
        if(!req.headers.authorization){
            return res.status(401).send('unauthoriz requests')
        }
        let token=req.headers.authorization.split(' ')[1]
        if(token===null){
            return res.status(401).send('unauthoriz requests')
        }
      let payload=jwt.verify(token,'secrectkey')
        if(!payload){
            return res.status(401).send('unauthorizedtion requestsed')
        }
        req.userId=payload.subject
        next()
    }

router.get('/',(req,res) =>{
    res.send('from api routes')

})
router.post('/register',(req,res)=>
{
let userdata=req.body

let user = new User(userdata)
user.save((err,registeruser)=>
{
if(err){
console.error(error)}
else{
    let payload={ subject:registeruser.id }
    let token=jwt.sign(payload,'secretkey')
res.status(200).send({token})}
})
})
router.post('/login',(req,res)=>
{
let userdata=req.body
User.findOne({email:userdata.email},(error,user)=>{
if(error)
{
console.log(error)
}
else{
    if(!user){
        res.status(401).send('invaid user')
    }else
    if(user.password!==userdata.password){
        res.status(401).send('invalid password')

    }else{
        let payload={subject:user.id}
        let token=jwt.sign(payload,'secretkey')
    res.status(200).send({token})}
        
    

}})
})
router.get('/events',(req ,res)=>
{
    let event =[
        {
            "id":"1",
        "NAME":"RAVI KUMAR",
        "RESUME":"RESUME"
                },
        {
            "id":"2",
            "name":"ravi14",
            "current position":"jobless",
            "age":"24"
        },
        {
            "id":"3",
            "name":"ravi",
            "current position":"jobless",
            "age":"24"
        },
        {
            "id":"4",
            "name":"ravi",
            "current position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"ravi",
            "current position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"ravi",
            "current position":"jobless",
            "age":"24"
        }
    ]
    res.json(event)
})
router.get('/special', (req ,res)=>
{
    let event =[
        {
            "id":"1",
        "NAME":"RAVI KUMAR",
        "RESUME":"RESUME"
        },
        {
            "id":"2",
            "name":"mishra",
            "position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"golu",
            "position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"ravi",
            "position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"ravi",
            "position":"jobless",
            "age":"24"
        },
        {
            "id":"1",
            "name":"ravi",
            "position":"jobless",
            "age":"24"
        }
    ]
    res.json(event)
})


module.exports=router





