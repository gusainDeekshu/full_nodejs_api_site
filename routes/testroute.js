const express=require('express')
const { testcontroler } = require('../controllers/testcontroler')

//router object
const router=express.Router()

// routes. get | post |update | delete
router.get('/test-user',testcontroler)

//export
module.exports=router;