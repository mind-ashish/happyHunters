const mysql=require('mysql');
const env=require('./environment');
const logger = require('./winston');

const con=mysql.createConnection({
    host: env.db_host,
    user: env.db_user,
    password: env.db_password,
    database: env.db_name
});
con.connect(function(err){
    if(err){
        logger.log({
            level:'error',
            message:`error in creating connection with db, ${err}`
        });
    }else{
        logger.log({
            level:'info',
            message:'succesfully created connection with db'
        });
    }
    
});
module.exports=con;