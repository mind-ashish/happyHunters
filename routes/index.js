const express= require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/recruiter',require('./recruiter'));
router.use('/candidate',require('./candidate'));
router.use('/api',require('./api'));
module.exports=router;