const express=require('express');
const authmiddleware = require('../middleware/authmiddleware.js');
const { createfoodcontroller, getallfoodcontroller, getfoodbyidcontroller, getfoodbyresturantidcontroller, updatefoodcontroller, deletefoodcontroller, placeordercontroller, orderstatuscontroller } = require('../controllers/foodcontroller.js');
const adminmiddleware = require('../middleware/adminmiddleware.js');


const router=express.Router();
//routes
//Create food  || post
router.post('/create',authmiddleware,createfoodcontroller)

// get all food route
router.get('/getall',authmiddleware,getallfoodcontroller)

//get food by id
router.get('/get/:id',authmiddleware,getfoodbyidcontroller)
//getfoodbyresturant id
router.get('/getall/:id',authmiddleware,getfoodbyresturantidcontroller)

//delete resturent || delete 
router.delete('/delete/:id',authmiddleware,deletefoodcontroller)
//update food
router.put('/update/:id',updatefoodcontroller)
// place order 
router.post('/order',placeordercontroller)
//changing order status through admin
router.post('/orderstatus/:id',authmiddleware,adminmiddleware,orderstatuscontroller)


module.exports=router;