const mysql=require('mysql');
const pool=require('../config/sql_connection');

module.exports.signup=function(req,res){
    if(req.cookies.RecruiterId){
        res.redirect('/recruiter/profile');
    }
    return res.render('./recruiterSignup.ejs',{   //path is wrt views
   });
}
module.exports.create=function(req,res){
    
    
    let data=req.body;
   
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
    if(req.cookies.RecruiterId){
        res.redirect('/recruiter/profile');
    }
    return res.render('./recruiterLogin.ejs',{   //path is wrt views
    });
   
}
module.exports.createSession=function(req,res){
    let data=req.body;
   
   let selectQuery='select * from Recruiters where Mail=?;';
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
                res.cookie('RecruiterId',response[0].RecruiterId);
                return res.redirect('/recruiter/profile');         
        }
        

    });

}
module.exports.destroySession=function(req,res){
    res.cookie('RecruiterId',"");
    res.redirect('/recruiter/login');
}
module.exports.profile=function(req,res){
    if(req.cookies.RecruiterId){
        let selectQuery='select * from Recruiters where RecruiterId=?;';
    let query1=mysql.format(selectQuery,[req.cookies.RecruiterId]);
    pool.query(query1,(err, response) => {
        if(err) {
            console.error(err);
            return res.render('./errorPage.ejs',{
                message:"Some error in db connection has occured."
            })
        }
        if(response.length>0){
            return res.render('recruiterProfile.ejs',{
                recruiter:response[0]
            })
        }else{
            return res.redirect('/recruiter/login');
        }
        

    });
    }else{
        return res.redirect('/recruiter/login');
    }
    
}