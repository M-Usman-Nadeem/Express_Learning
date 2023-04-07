const express=require('express')
const fs=require('fs')

const app=express()


app.get('/',(req,res)=>{
    // const read=fs.createReadStream('./package-lock.json',{highWaterMark:8})
    // read.pipe(res)
    // console.log(read)
    res.send('Ok!!!!!!!!!!!!!!')
    // res.end()
})
//route parameters 
let data=[
    {
        rollNo:1,
        student:'ali'
    },
    {
        rollNo:2,
        student:'Talha'
    },
    {
        rollNo:3,
        student:'usman'
    },
]
let number=[9,1,3,4,5,6,7,2]
app.get('/users/:department/:section/:rollNo',(req,res)=>{
    res.status(200).send(req.params)//we send param when we 
})
app.get('/users',(req,res)=>{
    res.status(200).send(data)
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    const student=data.find(studentInfo=>studentInfo.rollNo== +req.params.id)
        console.log(student)
    res.status(200).send(student)

})
app.get('/numbers',(req,res)=>{
    console.log(req.query)
    if(req.query.sort) res.send(number.sort())
    res.send(number)
})
const port =process.env.PORT || 2000
app.listen(port,()=>{
    console.log('server running '+ port)
})