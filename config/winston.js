const winston=require('winston');
var d=new Date();
var shortDate=d.toLocaleDateString(); //to convert to short format
const logPath="./logs";
const logger=new winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),  //giving format to logs
        winston.format.prettyPrint(),
       winston.format.colorize()
    ),
    transports:[
        
        new winston.transports.File({filename:logPath+'/'+shortDate+'/combined.log'}), //printing on file
        
        
    ],
    exceptionHandlers:[
        new winston.transports.File({filename:logPath+'/'+shortDate+'/exceptions.log'})  //this if for writing logs of unhandles exception 
    ],
    exitOnError:false  //true means exit the process in case of error, so keeping it false.
});

module.exports=logger;

