const mysql=require('mysql');
const pool=require('../config/sql_connection');

module.exports.signup=function(req,res){
    
    return res.render('./recruiterSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    //create recruiter
    //console.log(req.body);
    let data=req.body;
   // console.log(data);
   let selectQuery='select * from Recruiters where Mail=?;';
    let query1=mysql.format(selectQuery,[data.email]);
    pool.query(query1,(err, response) => {
        if(err) {
            console.error(err);
            return res.render('./errorPage.ejs',{
                message:"Some error has occured."
            })
        }
        // rows fetch
        if(response.length>0){
            return res.render('./errorPage.ejs',{
                message:"User already exists with this email."
            })
        }else{
            let insertQuery = 'insert into Recruiters(OrgName,Mail,Phone,Pwd) values(?,?,?,?);';    
            let query2 = mysql.format(insertQuery,[data.orgName,data.email,data.phone,data.password]);
            
            pool.query(query2,(err1, response1) => {
                if(err1) {
                    console.error(err);
                    return res.render('./errorPage.ejs',{
                        message:"Some error has occured."
                    })
                }
                
                return res.redirect('/recruiter/login');
                
            });
        }
        

    });
    
   

    
  
}
module.exports.login=function(req,res){
    
    return res.render('./recruiterLogin.ejs',{   //path is wrt views
    });
   
}
module.exports.createSession=function(req,res){
    
//
}
module.exports.destroySession=function(req,res){
    
    //
}
module.exports.profile=function(req,res){
    return res.render('./recruiterProfile.ejs');
    //
}