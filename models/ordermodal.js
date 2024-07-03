const mongoose = require("mongoose");

// schema
const ordershema = new mongoose.Schema(
  {
    foods:[
      { type: mongoose.Schema.Types.ObjectId,
        ref:'food'}

    ]
     
    ,payment:{},
    buyer:{
     type:mongoose.Schema.ObjectId
     ,ref:'fooduser'
    },status:{
      type: String,
      enum:["prepairing",'prepare','on the way','delivered']
      ,default:'prepairing'
    },


    },{ timestamps: true }
);

//export
module.exports = mongoose.model("order", ordershema);
