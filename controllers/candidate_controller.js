module.exports.signup=function(req,res){
    
    return res.render('./candidateSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    //create candidate
    return res.redirect('./login.ejs');
  
}
module.exports.login=function(req,res){
    return res.render('./login.ejs',{   //path is wrt views
    });
    
   //
}
module.exports.createSession=function(req,res){
    
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