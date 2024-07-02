const mongoose = require("mongoose");

// schema
const categoryschema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: [true, "username is required"],
    },
    imageUrl:{
      type:String,
      default:"https://tse3.mm.bing.net/th?id=OIP.5c1a18GU5fHBD6LL2CPbZwHaHa&pid=Api&P=0&h=180"
    },

    },{ timestamps: true }
);

//export
module.exports = mongoose.model("category", categoryschema);
