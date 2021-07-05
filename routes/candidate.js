const express= require('express');
const router=express.Router();

const candidateController=require('../controllers/candidate_controller');


router.get('/signup',candidateController.signup);
router.post('/create-candidate',candidateController.create);
router.get('/login',candidateController.login);
router.post('/create-session',candidateController.createSession);
router.get('/logout',candidateController.destroySession);
router.get('/profile',candidateController.profile);

module.exports=router;