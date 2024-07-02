const mongoose = require("mongoose");

// schema
const foodschema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, "foodtitle is required"],
    },discription:{
      type: String,
      required: [true, "discription is required"],
    },price:{
      type: Number,
      required: [true, "price is required"],
    },imageUrl:{
      type: String,
      default:"https://tse3.mm.bing.net/th?id=OIP.5c1a18GU5fHBD6LL2CPbZwHaHa&pid=Api&P=0&h=180"
    },
    foodTags:{
      type:String,
    },
    category:{
      type:String,
    },
    code:{
      type:String,
    },
    isAvailable:{
      type:Boolean,
      default:true
    },
    resturant:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'resturant'
    },
    rating:{
      type:Number,
      default:5,
      min:1,
      max:5
    },
    ratingcount:{
      type:Number
    }

    },{ timestamps: true }
);

//export
module.exports = mongoose.model("food", foodschema);
