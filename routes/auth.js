const express=require('express');
const { registercontroller, loginusercontroller } = require('../controllers/authcontroller');

const router= express.Router();

// routes

//register || post
router.post('/register',registercontroller);


// login  || post
router.post('/login',loginusercontroller)

module.exports=router