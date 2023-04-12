const express=require('express')
const fs=require('fs')
const routes=require('./route')
const app=express()
const router =express.Router()
router.get('/',(req,res)=>{
    res.send('replying to get request')
})
router.post('/',(req,res)=>{
    res.send('replying to post request')
})
router.put('/',(req,res)=>{
    res.send('replying to put request')
})
router.delete('/',(req,res)=>{
    res.send('replying to delete~ request')
})
module.exports=router