const express=require('express')
const fs=require('fs')

const app=express()

app.route('/')
.get((req,res)=>{
    res.send('replying to route / get request')
})
.post((req,res)=>{
    res.send('replying to post request')
})
.put((req,res)=>{
    res.send('replying to put request')
})
.delete((req,res)=>{
    res.send('replying to delete~ request')
})
module.exports=app