const JWT=require('jsonwebtoken')
const usermodal=require('../models/user')

module.exports=async(req,res,next)=>{
    try{
    
       const user= await usermodal.findById(req.body.id);
if(user.userType !== 'admin'){
    return res.status(401).send({
        sucess:false,
        message:"only admin can access access",
        error
    })
}else{next();}
}catch(error){
        console.log(error)
       return res.status(500).send({

            sucess:false,
            message:"Unauthorized access",
            error
        })
    }
}