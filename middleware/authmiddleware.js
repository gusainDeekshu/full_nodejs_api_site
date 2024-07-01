const JWT=require('jsonwebtoken')


module.exports=async(req,res,next)=>{
    try{
        //get token
        const token=req.headers["authorization"].split(" ")[1]
        JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err)
{
    res.status(401).send({
        sucess:false,
        message:"error unathorizeduser ",
        
    })
} else{
    req.body.id=decode.id
    next();
}       
})
    }catch(error){
        console.log(error)
        res.status(500).send({

            sucess:false,
            message:"please provide token",
            error
        })
    }
}