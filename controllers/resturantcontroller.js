const resturantmodel = require("../models/resturantmodel");
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const createresurantcontroller = async (req, res) => {
  try {
    //creating resturant
    const {
      title,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      imageUrl,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      return res.status(500).send({
        sucess: false,
        message: "please provide title and address",
        error,
      });
    }
    const newresturant = new resturantmodel({
      title,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      imageUrl,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newresturant.save();
    res.status(200).send({
      sucess: true,
      message: "New resturant added sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in creating resturant api",
      error,
    });
  }
};

//get all resturant
const getallresturantcontroller = async (req, res) => {
  try {
    //find user

    const resturant = await resturantmodel.find({});
    if (!resturant) {
      return res.status(404).send({
        sucess: false,
        message: "no resturant found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "resturant get sucessfully",
      totalcount: resturant.length,
      resturant
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
const getresturantbyidcontroller = async (req, res) => {
  try {
const resturantid=req.params.id
if (!resturantid) {
  return res.status(404).send({
    sucess: false,
    message: "provide resturant id",
  });
}
    //find resturant

    const resturant = await resturantmodel.findById(resturantid);
    if (!resturant) {
      return res.status(404).send({
        sucess: false,
        message: "no resturant found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "resturant found sucessfully",
      resturant
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in getting resturant by id api",
      error,
    });
  }
};

module.exports = {
  createresurantcontroller,
  getallresturantcontroller,
  getresturantbyidcontroller
};
