const mysql=require('mysql');
const pool=require('../config/sql_connection');
module.exports.signup=function(req,res){
    
    return res.render('./candidateSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    //create candidate
    
  
}
module.exports.login=function(req,res){
    return res.render('./candidateLogin.ejs',{   //path is wrt views
    });
    
   //
}
module.exports.createSession=function(req,res){
    return res.render('./candidateProfile.ejs',{   //path is wrt views
    });
//
}
module.exports.destroySession=function(req,res){
    
    //
}
module.exports.profile=function(req,res){
    return res.render('./candidateProfile.ejs',{   //path is wrt views
    });
    //
}