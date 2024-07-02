const mongoose = require("mongoose");

// schema
const resturantschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "username is required"],
    },
    foods: {
      type: Array,
    },
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    imageUrl: {
      type: String,
      default:
        "https://assets.cntraveller.in/photos/651e65983734f323ef3d37fe/16:9/w_7936,h_4464,c_limit/SWING-9.jpg",
    },
    logoUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Frestaurant-logo&psig=AOvVaw0RnCfp-sq_AqsFOm3_nrU5&ust=1720004243252000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCgyKKZiIcDFQAAAAAdAAAAABAE",
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
    code: {
      type: String,
    },
    coords: {
      id: { type: String },
      latitude: { type: String },
      latitudeDelta: { type: String },
      longitude: { type: String },
      longitudeDelta: { type: String },
      address:{type:String},
      title:{type:String}

    },
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("resturant", resturantschema);
