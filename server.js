/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Abhayjeet Singh   Student ID: 175157213  Date: September 14, 2023
*
*  Online (Cyclic) URL: https://better-woolens-fish.cyclic.cloud
*
********************************************************************************/ 



var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'root route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("<h2> <a href='/about''safdtasydu'> Abhayjeet Singh - 175157213</a><h2>");
});

// setup a route to listen on the '/about' url path
app.get("/about", (req, res) => {
    res.json({course: "WEB322", section: "NGG", task: "Assignment 1"});
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
