const express =require('express')
const app=express()
// making  a application level middleware 
function middleware(req,res,next){
    // console.log(

    // 'application level middleware'
    // );
    console.log(req.query.login,'fsda');
    if(req.query.login==='false'){
res.end('click here to go to a sign up page ')
    }
    else if(req.query.login===undefined) {
res.end('tell me about your login info')
}else{

    next()
}
}
module.exports=middleware