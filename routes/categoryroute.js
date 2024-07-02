const express=require('express');
const authmiddleware = require('../middleware/authmiddleware');
const { createresurantcontroller, getallresturantcontroller, getresturantbyidcontroller, deleteresturantcontroller } = require('../controllers/resturantcontroller');
const { createcategorycontroller, getallcategorycontroller, updatecategorycontroller, deletecategorycontroller } = require('../controllers/categorycontroller.js');


const router=express.Router();
//routes
//Create resturant  || post
router.post('/create',authmiddleware,createcategorycontroller)

// get all resturant route
router.get('/get',authmiddleware,getallcategorycontroller)

//get returant by id
router.put('/update/:id',authmiddleware,updatecategorycontroller)

//delete resturent || delete 
router.delete('/delete/:id',authmiddleware,deletecategorycontroller)

module.exports=router;