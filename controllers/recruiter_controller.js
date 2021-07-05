module.exports.signup=function(req,res){
    
    return res.render('./recruiterSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    //create recruiter
    
  
}
module.exports.login=function(req,res){
    
    return res.render('./recruiterLogin.ejs',{   //path is wrt views
    });
   //
}
module.exports.createSession=function(req,res){
    return res.render('./recruiterProfile.ejs',{   //path is wrt views
    });
//
}
module.exports.destroySession=function(req,res){
    
    //
}
module.exports.profile=function(req,res){
    return res.render('./recruiterProfile.ejs');
    //
}