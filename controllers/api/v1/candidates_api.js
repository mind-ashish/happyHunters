
const mysql=require('mysql');
const pool=require('../../../config/sql_connection');

module.exports.getCandidates = function(req, res){


    let jobId=req.params.jobId;
    let selectQuery = 'select * from Applicants where ApplicantId in (select ApplicantId from JobsApplicants where JobId=?);';    
    let query = mysql.format(selectQuery,jobId);
    
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
            message: "List of Candidates",
            candidates: data
        })

    });
   
}