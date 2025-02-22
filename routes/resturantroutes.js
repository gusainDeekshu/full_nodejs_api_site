const express=require('express');
const authmiddleware = require('../middleware/authmiddleware');
const { createresurantcontroller, getallresturantcontroller, getresturantbyidcontroller, deleteresturantcontroller } = require('../controllers/resturantcontroller');


const router=express.Router();
//routes
//Create resturant  || post
router.post('/create',authmiddleware,createresurantcontroller)

// get all resturant route
router.get('/get',authmiddleware,getallresturantcontroller)

//get returant by id
router.get('/getresturant/:id',authmiddleware,getresturantbyidcontroller)

//delete resturent || delete 
router.delete('/delete/:id',authmiddleware,deleteresturantcontroller)

module.exports=router;