const userSchema = require("../models/user");
const bcrypt=require('bcrypt')
//get user info
const getusercontroler = async (req, res) => {
  try {
    //find user

    const user = await userSchema.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "user not found",
      });
    }
    //hide password
    user.password = undefined;
    //resp
    res.status(200).send({
      sucess: true,
      message: "User get sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in getting api",
      error,
    });
  }
};

const updateusercontroller = async (req, res) => {
  try {
    //finduser
    const user = await userSchema.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "User not found",
      });
    }
    //update
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    //save user
    await user.save();
    res.status(200).send({
      sucess: true,
      messsage: "User Updated Sucessffully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in updating user",
      error,
    });
  }
};

//reset password with the help of answer
const resetusercontroller = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;
    if (!email || !newpassword || !answer) {
      return res.status(500).send({
        sucess: false,
        message: "Please provide all fields",
      });
    }
    //validation
    const user = await userSchema.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "user not found or invalid answer",
      });
    }
    // hashing password

var salt=bcrypt.genSaltSync(10)
const hashedpassword=await bcrypt.hash(newpassword,salt)
user.password=hashedpassword;
await user.save();
res.status(200).send({
   sucess:true,
   message:"password reset complete"
})
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      sucess: false,
      message: "error in password reset api",
      error,
    });
  }
};
//update password with the help of old password
const updatepasswordcontroller=async(req,res)=>{
   try {
      const { email, newpassword, oldpassword } = req.body;
      if (!email || !newpassword || !oldpassword) {
        return res.status(500).send({
          sucess: false,
          message: "Please provide all fields",
        });
      }
      //validation
      const user = await userSchema.findOne({ email });
      if (!user) {
        return res.status(404).send({
          sucess: false,
          message: "user not found or invalid password",
        });
      }
      // check user password | compare password
const isMatch=await bcrypt.compare(oldpassword,user.password)
if(!isMatch){
   return res.status(500).send({
        sucess:false,
        message:"Password does not match",
    })
    
}
      // hashing password
  var salt=bcrypt.genSaltSync(10)
  const hashedpassword=await bcrypt.hash(newpassword,salt)
  user.password=hashedpassword;
  await user.save();
  res.status(200).send({
     sucess:true,
     message:"password update complete"
  })
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        sucess: false,
        message: "error in password update api",
        error,
      });
    }
}
// dellete user 
const deleteusercontroller=async(req,res)=>{
  try {
     
     //validation and deletion
     const user = await userSchema.findByIdAndDelete(req.params.id);
     if (!user) {
       return res.status(404).send({
         sucess: false,
         message: "user not found or invalid id",
       });
     }


 res.status(200).send({
    sucess:true,
    message:"user deleted sucessfully"
 })
   } catch (error) {
     console.log(error);
     return res.status(500).send({
       sucess: false,
       message: "error in password update api",
       error,
     });
   }
}
module.exports = {
  getusercontroler,
  updateusercontroller,
  resetusercontroller,
  updatepasswordcontroller,
  deleteusercontroller
};
