const user = require('../models/user');
const userschema=require('../models/user')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')






//register
const registercontroller=async(req,res)=>{
try{
const {userName,email,password,phone,address}=req.body;
//validation
if(!userName || !email || !password || !address || !phone){
    return res.status(500).send({
        sucess:false,
        message:'Please Provide All Fields'
    })
}
// check user
const existing= await userschema.findOne({email})
if(existing){
    return res.status(500).send({
        sucess:false,
        messsage:'Email Already Register please Login'
    })
}
// hashing password

var salt=bcrypt.genSaltSync(10)
const hashedpassword=await bcrypt.hash(password,salt)


// create new user
const Createuser= await userschema.create({userName,email,password:hashedpassword,address,phone})
 return res.status(201).send({
    sucess:true,
    message:'Sucessfully registered',
    Createuser
})

}catch(error){
    console.log(error)
  return  res.status(500).send({
        sucess:false,message:'error in register api',
        error
    })
}
};


//login
const loginusercontroller=async(req,res)=>{
try{
const {email,password}=req.body
// validation
if(!email || !password){
    return res.status(500).send({
        sucess:false,
        message:"please email or password",
    })
}
//check user
const user =await userschema.findOne({email})
if(!user){
return res.status(404).send({
    sucess:false,
    message:"User not found"
})
}
// check user password | compare password
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
   return res.status(500).send({
        sucess:false,
        message:"Password does not match",
    })
    
}
const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{
    expiresIn:"7d",
})
user.password=undefined
return res.status(200).send({
    sucess:true,
    message:"login sucessful",
    token,
    user
})
}
catch(error){
    console.log(error)
   return res.status(500).send({
        sucess:false,
        error:"Error in login api",
        error
    })
}
}


module.exports={registercontroller,loginusercontroller}