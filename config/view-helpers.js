const environment=require('./environment');
const fs=require('fs');
const path=require('path');
const logger = require('./winston');
module.exports.pathSetter=function(app){      //to modify app.locals , passing app as an arguement to exported fn.
    app.locals.path=function(filePath){   //making path fn in app.locals
        
        if(environment.name=='development'){
            return filePath; //asset path is given in app.js , so filepath is wrt to it
        }else{
            try{
                logger.log({
                    level:'info',
                    message:`Input file path is : ${filePath}`
                });
               
                var loc=filePath.search(/[A-Za-z]/);
                var prefix=filePath.substring(0,loc);
                filePath=filePath.substring(loc);
                var base=filePath.substring(0,filePath.indexOf('/'));
                var data=fs.readFileSync(path.join(__dirname,'../public/assets/',base,'/rev-manifest.json'),'utf8');
                 //reading rev-manifest.json file from public folder and giving path from json key-value
                var obj=JSON.parse(data);
                // console.log(filePath);
                
                logger.log({
                    level:'info',
                    message:`returned file path is : ${obj[filePath]}`
                });
                return prefix + obj[filePath];
            }catch(err){
                logger.log({
                    level:'error',
                    message:'key not found in rev manifest exception, build again...'
                });
            }
        }
    }
}