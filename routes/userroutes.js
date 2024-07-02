const express=require('express');
const { getusercontroler, updateusercontroller, resetusercontroller, updatepasswordcontroller, deleteusercontroller } = require('../controllers/usercontroler');
const authmiddleware = require('../middleware/authmiddleware');


const router=express.Router();
//get userdata
router.get('/getuser',authmiddleware,getusercontroler);
//update userdata
router.put('/update',authmiddleware,updateusercontroller);
//reset password
router.post('/reset',authmiddleware,resetusercontroller);
//update user password
router.patch('/updatepassword',authmiddleware,updatepasswordcontroller);
// delete user data
router.delete('/delete/:id',authmiddleware,deleteusercontroller);


module.exports=router;