module.exports.signup=function(req,res){
    
    return res.render('./recruiterSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    //create recruiter
    return res.redirect('./login.ejs');
  
}
module.exports.login=function(req,res){
    
    
   //
}
module.exports.createSession=function(req,res){
    
//
}
module.exports.destroySession=function(req,res){
    
    //
}
module.exports.profile=function(req,res){
    return res.redirect('./recruiterProfile.ejs');
    //
}