const mysql=require('mysql');
const pool=require('../config/sql_connection');
module.exports.signup=function(req,res){
    
    if(req.cookies.ApplicantId){
        res.redirect('/candidate/profile');
    }
    return res.render('./candidateSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    let data=req.body;
   
    let selectQuery='select * from Applicants where Mail=?;';
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
             let insertQuery = 'insert into Applicants(FirstName,LastName,Mail,Phone,Pwd,KeySkills,Experience,CurrentOrg,Education,College) values(?,?,?,?,?,?,?,?,?,?);';    
             let query2 = mysql.format(insertQuery,[data.firstname,data.lastname,data.email,data.phone,data.password,data.keySkills,data.exp,data.currentOrg,data.education,data.collegeName]);
             
             pool.query(query2,(err1, response1) => {
                 if(err1) {
                     console.error(err);
                     return res.render('./errorPage.ejs',{
                         message:"Some error has occured."
                     })
                 }
                 
                 return res.redirect('/candidate/login');
                 
             });
         }
         
 
     });
        
}
module.exports.login=function(req,res){
    if(req.cookies.ApplicantId){
        res.redirect('/candidate/profile');
    }
    return res.render('./candidateLogin.ejs',{   //path is wrt views
    });
}
module.exports.createSession=function(req,res){
    let data=req.body;
   
    let selectQuery='select * from Applicants where Mail=?;';
     let query1=mysql.format(selectQuery,[data.email]);
     pool.query(query1,(err, response) => {
         if(err) {
             console.error(err);
             return res.render('./errorPage.ejs',{
                 message:"Some error in db connection has occured."
             })
         }
         // rows fetch
         if(response.length==0){
             return res.render('./errorPage.ejs',{
                 message:"User not found."
             })
         }else{
             if(response[0].Pwd!=req.body.password){
                 return res.render('./errorPage.ejs',{
                     message:"Invalid password."
                 });
             }
                 res.cookie('ApplicantId',response[0].ApplicantId);
                 return res.redirect('/candidate/profile');         
         }
         
 
     });

}
module.exports.destroySession=function(req,res){
    
    res.cookie('ApplicantId',"");
    res.redirect('/candidate/login');
}
module.exports.profile=function(req,res){
    if(req.cookies.ApplicantId){
        let selectQuery='select * from Applicants where ApplicantId=?;';
    let query1=mysql.format(selectQuery,[req.cookies.ApplicantId]);
    pool.query(query1,(err, response) => {
        if(err) {
            console.error(err);
            return res.render('./errorPage.ejs',{
                message:"Some error in db connection has occured."
            })
        }
        if(response.length>0){
            return res.render('candidateProfile.ejs',{
                candidate:response[0]
            })
        }else{
            return res.redirect('/candidate/login');
        }
        

    });
    }else{
        return res.redirect('/candidate/login');
    }
}