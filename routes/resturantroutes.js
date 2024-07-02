const express=require('express');
const authmiddleware = require('../middleware/authmiddleware');
const { createresurantcontroller, getallresturantcontroller, getresturantbyidcontroller } = require('../controllers/resturantcontroller');


const router=express.Router();
//routes
//Create resturant  || post
router.post('/create',authmiddleware,createresurantcontroller)

// get all resturant route
router.get('/get',authmiddleware,getallresturantcontroller)

//get returant by id
router.get('/getresturant/:id',authmiddleware,getresturantbyidcontroller)

module.exports=router;