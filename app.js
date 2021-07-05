const express= require('express');
const env=require('./config/environment');

const morgan=require('morgan');
const logger=require('./config/winston');


const app=express();
const port=8000;

app.use(morgan("combined",{stream:logger.stream.write}));


const view_helper=require('./config/view-helpers');
view_helper.pathSetter(app);

//const expressLayouts=require('express-ejs-layouts');

const pool=require('./config/sql_connection');

const sassMiddleware=require('node-sass-middleware');

app.use(express.urlencoded({extended:false}));

const path=require('path');
if(env.name=='development'){ //for scss to css in dev environment using sass middleware instead of gulp 
    app.use(sassMiddleware({
        src: path.join(__dirname,env.asset_path,'scss'),
        dest: path.join(__dirname,env.asset_path,'css') ,
        debug: true,
        outputStyle: 'extended',
        prefix: '/css'
    }));
}
//using sass middleware: conversion takes place at each req, unlike production which is cached
app.use(express.static(env.asset_path));



//app.use(expressLayouts);
//app.set('layout extractStyles', true);
//app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', './views');

app.use('/',require('./routes')); //this load router instance exported elsewhere, from this path. 
// app.use(app.router);
// routes.initialize(app);

app.listen(port, function(err){
    if(err){
       
        logger.log({
            level:'error',
            message:`Error in running the server: ${err}`
        });
    }else{
       
        logger.log({
            level:'info',
            message:`server is up and running at port ${port}`
        });
    }
});