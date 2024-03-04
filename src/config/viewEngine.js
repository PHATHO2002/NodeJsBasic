
const path= require('path');

const configViewEngine=(app)=>{
    app.set('views',path.join('./src' ,'views')) // specify the views directory
    app.set('view engine', 'ejs') // register the template engine
}
module.exports =configViewEngine;