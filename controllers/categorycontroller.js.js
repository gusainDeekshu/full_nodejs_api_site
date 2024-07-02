
const categorymodel = require("../models/categorymodal");
const bcrypt = require("bcrypt");
//create category

const createcategorycontroller = async (req, res) => {
  try {
    //creating category
    const {title,imageUrl,} = req.body;
    if (!title) {
      return res.status(500).send({
        sucess: false,
        message: "please provide title and imageurl",
        error,
      });
    }
    const newcategory= new categorymodel({
      title,
      imageUrl,
    });

    await newcategory.save();
    res.status(201).send({
      sucess: true,
      message: "New category added sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in creating category api",
      error,
    });
  }
};

//get all category
const getallcategorycontroller = async (req, res) => {
  try {
    //find category
    const category = await categorymodel.find({});
    if (!category) {
      return res.status(404).send({
        sucess: false,
        message: "no category found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "category get sucessfully",
      totalcount: category.length,
      category,
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

// update category based on id
const updatecategorycontroller = async (req, res) => {
  try {
    //findcategory
    const {id}=req.params
    const {title,imageUrl}=req.body;
    const updatecategory = await categorymodel.findByIdAndUpdate(id,{title,imageUrl},{new:true})
    // validation
    if (!updatecategory) {
      return res.status(404).send({
        sucess: false,
        message: "category not updated or found",
      });
    }
   
    res.status(200).send({
      sucess: true,
      messsage: "category Updated Sucessffully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in updating category",
      error,
    });
  }
};

// delete category by id
const deletecategorycontroller = async (req, res) => {
  try {
    const categoryid = req.params.id;
    if (!categoryid) {
      return res.status(404).send({
        sucess: false,
        message: "provide category id",
      });
    }
    //find category

    const category = await categorymodel.findByIdAndDelete(categoryid);
    if (!category) {
      return res.status(404).send({
        sucess: false,
        message: "no category found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "category deleted sucessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in deleting category by id api",
      error,
    });
  }
};

module.exports = {
  createcategorycontroller,
  getallcategorycontroller,
  updatecategorycontroller,
  deletecategorycontroller
};
