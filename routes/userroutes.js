const express=require('express');
const { getusercontroler } = require('../controllers/usercontroler');
const authmiddleware = require('../middleware/authmiddleware');


const router=express.Router();

router.get('/getuser',authmiddleware,getusercontroler);

module.exports=router;