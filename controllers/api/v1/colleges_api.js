
const mysql=require('mysql');
const pool=require('../../../config/sql_connection');

module.exports.getColleges = function(req, res){


   
    let selectQuery = 'select * from CollegesMaster;';    
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
            message: "List of Colleges",
            colleges: data
        })

    });
   
}