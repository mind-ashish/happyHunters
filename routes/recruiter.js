const express= require('express');
const router=express.Router();

const recruiterController=require('../controllers/recruiter_controller');


router.get('/signup',recruiterController.signup);
router.get('/create-recruiter',recruiterController.create);
router.get('/login',recruiterController.login);
router.get('/create-session',recruiterController.createSession);
router.get('/logout',recruiterController.destroySession);
router.get('/profile',recruiterController.profile);

module.exports=router;