const mysql=require('mysql');
const env=require('./environment');
const logger = require('./winston');

const pool=mysql.createPool({
    host: env.db_host,
    user: env.db_user,
    password: env.db_password,
    database: env.db_name
});

module.exports=pool;