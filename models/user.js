const mongoose=require('mongoose')

// schema
const userschema= new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'username is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:Array,
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    },
    userType:{
        type:String,
        required:[true,'usertype is required']
        ,default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.google.com/imgres?q=user%20profile&imgurl=https%3A%2F%2Fcdn.vectorstock.com%2Fi%2F1000v%2F30%2F97%2Fflat-business-man-user-profile-avatar-icon-vector-4333097.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fflat-business-man-user-profile-avatar-icon-vector-4333097&docid=u1SY3va6wsUW9M&tbnid=i57iCtS92F1kdM&vet=12ahUKEwiLjpzpmoWHAxW9SmwGHdAPCVkQM3oECGkQAA..i&w=1000&h=1080&hcb=2&ved=2ahUKEwiLjpzpmoWHAxW9SmwGHdAPCVkQM3oECGkQAA'
    }


},{timestamps:true})


//export
module.exports=mongoose.model('fooduser',userschema);