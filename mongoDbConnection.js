
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const id = mongoose.ObjectId;
mongoose.connect('mongodb://127.0.0.1:27017/users')
// if we never define sth after / of 127.0.0.1:27017 then it will create a 
// test db and then inside it create our defined collection
  .then(() => console.log('Connected!'));

const userSchema = new Schema(
  {
    id,
     name: String,
     fatherName:String,
     rollNo:Number,
     enrollmentDate:Date


  }
)
const userSchemaModel=mongoose.model('User',userSchema)
const sendingData = async () => {
// const data=new userSchemaModel({
//   name:'usman',fatherName:'Nadeem Ashraf',rollNo:123,
//   enrollmentDate:new Date()
// })
// await data.save()
// alternative of above commented code
const data=userSchemaModel.create(
  {
      name:'Ghulam Muhiudding',fatherName:'Nadeem Ashraf',rollNo:123,
      enrollmentDate:new Date()
    }
)
}
const findingData=async()=>{
  try{

    const data=await userSchemaModel.find()
    console.log(data)
  }
  catch(err){
    console.log(err)
  }
}
findingData()
// sendingData()