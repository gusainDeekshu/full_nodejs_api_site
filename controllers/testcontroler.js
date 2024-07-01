const testcontroler = (req,res)=>{
    try{
        res.status(200).send("<h1>this is api</h1>")
        // res.status(200).send({success:true,message:"test user data API",})
        }
    catch(error){
        console.log(`error in test api ${error}`,error);
    }

}

module.exports={testcontroler}