const express = require("express");
const app = express();
app.use('/users',(req ,res,next)=>{
    console.log("/users middelware");
    res.send("<p>The Middleware that handles just /users</p>");
    });
app.use('/',(req ,res,next)=>{
    console.log("/ middelware 23");
    res.send("<p>The Middleware that handles just /</p>");
    });



app.listen(3000)