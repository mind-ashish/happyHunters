const development={
    name:'development',
    asset_path:'./assets',   //in ref with app.js,
    db_name:process.env.DB_NAME,
    db_host:process.env.DB_HOST,
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD
}

const production={
    name:process.env.ENV,
    asset_path:process.env.ASSET_PATH,
    db_name:process.env.DB_NAME,
    db_host:process.env.DB_HOST,
    db_user:process.env.DB_USER,
    db_password:process.env.DB_PASSWORD
}

var environment=eval(process.env.ENV);
if(environment==undefined){ 
    module.exports=development;  //nodemon app.js
}else{
    module.exports=production; //NODE_ENV=production nodemon app.js
}