const express = require('express')
const app = express()
const path=require('path')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs', { title: 'Hello', message: 'Hello there!' })
})
app.use(express.static('public'))
// app.get('/static',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server running ' + port)
})