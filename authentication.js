const express = require('express')
const app = express()
const path=require('path')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/authentication').then(() => console.log('Connected!'));
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine','ejs')
const userSchema = new Schema(
    {
   
       name: String,
      email:String,
  
  
    }
  )
  const userSchemaModel=mongoose.model('User',userSchema)


app.get('/',(req,res)=>{
 res.render('index')


})
app.get('/loginForm',(req,res)=>{
 res.render('login')

})
app.get('/signupForm',(req,res)=>{
 res.render('signup')

})
app.post('/signup', async (req,res)=>{
    console.log(req.body,'data')
 const data=new userSchemaModel(req.body)
await data.save()
    res.end('you are signed in ')
})

app.post('/login',async(req,res)=>{
   
    console.log( req.body)
    const data= await userSchemaModel.find(req.body)
    console.log(data.length)
    if(data.length){
      
        res.redirect(`/dashboard?name=${req.body.name}`)
    }
    else{
        res.redirect('/signupForm')
    }

})
app.get('/dashboard',(req,res)=>{
    res.render('dashboard',req.query)
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server running ' + port)
})