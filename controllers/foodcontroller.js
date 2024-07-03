
const foodmodal = require("../models/foodmodal");
const ordermodal = require("../models/ordermodal");
//create category

const createfoodcontroller = async (req, res) => {
  try {
    //creating food
    const {title,discription,price,imageUrl,
    foodTags,
    category,
    code,
    isAvailable,
    resturant,
    rating,
    ratingcount} = req.body;
    if (!title || !discription || !price || !resturant){
      return res.status(500).send({
        sucess: false,
        message: "please provide all field",
        error,
      });
    }
    const newfood= new foodmodal({
      title,discription,price,imageUrl,
    foodTags,
    category,
    code,
    isAvailable,
    resturant,
    rating,
    ratingcount
    });

    await newfood.save();
    res.status(201).send({
      sucess: true,
      message: "New food added sucessfully",
      newfood
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in creating food api",
      error,
    });
  }
};

//get all food
const getallfoodcontroller = async (req, res) => {
  try {
    //find food
    const food = await foodmodal.find({});
    if (!food) {
      return res.status(404).send({
        sucess: false,
        message: "no food found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "food get sucessfully",
      totalcount: food.length,
      food,
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


// get food by id
const getfoodbyidcontroller = async (req, res) => {
  try {
    const foodid = req.params.id;
    if (!foodid) {
      return res.status(404).send({
        sucess: false,
        message: "provide food id",
      });
    }
    //find food

    const food = await foodmodal.findById(foodid);
    if (!food) {
      return res.status(404).send({
        sucess: false,
        message: "no food found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "food found sucessfully",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in getting food by id api",
      error,
    });
  }
};


// get food by resturantid
const getfoodbyresturantidcontroller = async (req, res) => {
  try {
    const resturantid = req.params.id;
    if (!resturantid) {
      return res.status(404).send({
        sucess: false,
        message: "provide food id",
      });
    }
    //find food

    const food = await foodmodal.find({resturant:resturantid});
    if (!food) {
      return res.status(404).send({
        sucess: false,
        message: "no food found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "food found sucessfully based on resturant",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in getting food by id api",
      error,
    });
  }
};

// update food based on id
const updatefoodcontroller = async (req, res) => {
  try {
    //findcategory
    const foodid=req.params.id
    if (!foodid) {
      return res.status(404).send({
        sucess: false,
        message: "please provide food id",
      });
    }
    const food = await foodmodal.findById(foodid)
    // validation
    if (!food) {
      return res.status(404).send({
        sucess: false,
        message: "food not found",
      });
    }
    const {title,discription,price,imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingcount}=req.body
const updatedfood=await foodmodal.findByIdAndUpdate(foodid,{title,discription,price,imageUrl,
  foodTags,
  category,
  code,
  isAvailable,
  resturant,
  rating,
  ratingcount})
   
    res.status(200).send({
      sucess: true,
      messsage: "food item Updated Sucessffully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in updating food",
      error,
    });
  }
};

// delete category by id
const deletefoodcontroller = async (req, res) => {
  try {
    const foodid = req.params.id;
    if (!foodid) {
      return res.status(404).send({
        sucess: false,
        message: "provide food id",
      });
    }
    //find food

    const food = await foodmodal.findByIdAndDelete(foodid);
    if (!food) {
      return res.status(404).send({
        sucess: false,
        message: "no food found",
      });
    }

    //resp
    res.status(200).send({
      sucess: true,
      message: "food deleted sucessfully",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in deleting food by id api",
      error,
    });
  }
};


// place order
const placeordercontroller = async (req, res) => {
  try {
    const {cart,payment}=req.body;
    if(!cart){
      return res.status(500).send({
        sucess:false,
        message:"place order or payment"
      })
    }
    let total =0;
    //calculating cart price
    cart.map((i) =>{
      total += i.price;
    })

    const neworder=new ordermodal({
      foods:cart,payment:total,buyer:req.body.id
    })
    await neworder.save()
    res.status(201).send({
      sucess: true,
      message: "order placed sucessfully",
      neworder,
    }); 
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in placing order api",
      error,
    });
  }
};
//change order status 
const orderstatuscontroller=async(req,res)=>{
  try {
   const orderid=req.params.id;
   if(!orderid){
    return res.status(404).send({
      sucess: false,
      message: "requested id or  not found",
      error,
    });
   }
   const {status}=req.body;
   const order=await ordermodal.findByIdAndUpdate(orderid,{status},{new:true})
   if(!order){
    return res.status(401).send({
      sucess: false,
      message: "requested id or status  not found",
      error,
    });
   }
   res.status(200).send({
    sucess: true,
    message: "status updated sucessfully",
    
  });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in changing order status",
      error,
    });
  } 
}

module.exports = {
  createfoodcontroller,
  getallfoodcontroller,
  getfoodbyidcontroller,
  getfoodbyresturantidcontroller,
  updatefoodcontroller,
  deletefoodcontroller,
  placeordercontroller,
  orderstatuscontroller
};
