const express= require('express');
const colors=require('colors')
const cors=require('cors');
const morgan = require('morgan');
const  dotenv=require('dotenv');
const {connectdb} = require('./config/database');


// dot env configuration
dotenv.config();


//database connection
connectdb(process.env.mongo_url)
//rest object
const app= express();


//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route

//URL => http://localhost:8000
app.use('/api/v1/test', require('./routes/testroute'))
app.use('/api/v1/auth', require('./routes/auth'))
app.use('/api/v1/user', require('./routes/userroutes'))
app.use('/api/v1/resturant', require('./routes/resturantroutes'))
app.get('/',(req,res)=>{
    return res.send("<h1>welcome to food server</h1>");
});

//port 
const port = process.env.port || 8008;


//listen
app.listen(port,()=>{ 
    console.log(`server started at port:${port}`.bgYellow.blue);
});