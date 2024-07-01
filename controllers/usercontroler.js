const userSchema = require("../models/user");

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
      sucess:true,
      messsage:"User Updated Sucessffully",
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in updating user",
      error,
    });
  }
};

module.exports = { getusercontroler, updateusercontroller };
