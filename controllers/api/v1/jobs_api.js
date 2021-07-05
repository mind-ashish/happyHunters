const mysql=require('mysql');
const pool=require('../../../config/sql_connection');

module.exports.getAllJobs = function(req, res){


    
    let selectQuery = 'select a.JobId,a.RecruiterId,a.JobTitle,a.JobDesc, b.OrgName from Jobs as a inner join Recruiters as b on a.RecruiterId=b.RecruiterId;';    
    let query = mysql.format(selectQuery);
    
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return res.json(502,{
                message:"Some error occured at db"
            });
        }
        // rows fetch
        console.log(data);
        return res.json(200, {
            message: "List of All posted jobs",
            jobs: data
        })

    });
   
}
module.exports.getJobsByRecruiter = function(req, res){


    let recruiterId=req.params.recruiterId;
    let selectQuery = 'select * from Jobs where RecruiterId=?;';    
    let query = mysql.format(selectQuery,recruiterId);
    
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return res.json(502,{
                message:"Some error occured at db"
            });
        }
        // rows fetch
        console.log(data);
        return res.json(200, {
            message: "List of All jobs by this recruiter",
            jobs: data
        })

    });
   
}
module.exports.create = function(req, res){

    //console.log(req.body);
    let data=req.body;
   // console.log(data);
    let insertQuery = 'insert into Jobs(RecruiterId,JobTitle,JobDesc) values(?,?,?);';    
    let query = mysql.format(insertQuery,[data.RecruiterId,data.JobTitle,data.JobDesc]);
    
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return res.json(502,{
                message:"Some error occured"
            });
        }
        // rows fetch
        console.log(data);
        return res.json(200, {
            message: "Job created successfully",
            response: response
        })
    });
  
}
module.exports.apply=function(req, res){

    //console.log(req.body);
    let data=req.body;
   // console.log(data);
    let insertQuery = 'insert into JobsApplicants(JobId,ApplicantId) values(?,?);';    
    let query = mysql.format(insertQuery,[data.JobId,data.ApplicantId]);
    
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return res.json(502,{
                message:"Some error occured"
            });
        }
        // rows fetch
        console.log(data);
        return res.json(200, {
            message: "Applied to job successfully",
            response: response
        })
    });
  
}