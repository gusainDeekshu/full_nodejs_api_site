const express=require('express');
const { getusercontroler, updateusercontroller } = require('../controllers/usercontroler');
const authmiddleware = require('../middleware/authmiddleware');


const router=express.Router();

router.get('/getuser',authmiddleware,getusercontroler);
router.put('/update',authmiddleware,updateusercontroller);

module.exports=router;