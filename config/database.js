const mongoose=require('mongoose')
const colors=require('colors');


//function mongodb database connection
const connectdb = async () => {
    try{
         mongoose.connect(process.env.mongo_url)
        console.log(`connected to mongodb ${mongoose.Connection.host}`.rainbow.bgWhite);
    }catch(error){
        console.log('db error',error)
    }
}
module.exports={connectdb};