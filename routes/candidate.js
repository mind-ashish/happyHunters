const express= require('express');
const router=express.Router();
const articleController=require('../controllers/candidate_controller');

router.get('/',candidateController.home);
router.get('/login',candidateController.login);
router.get('/signup',candidateController.signup);
router.get('/logout',candidateController.logout);



module.exports = router;