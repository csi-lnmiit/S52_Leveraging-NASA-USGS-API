var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local");

mongoose.connect("mongodb://localhost/CSI_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use('views', __dirname + '/public');
app.set('view engine', 'ejs');

var user = [{
    Email: "admin@admin.com",
    Password: "Password123"
}]

app.get("/", function(req, res){
    res.render("landing");
    console.log("Home!");
});
//show login form
app.get("/login", function(req, res){
    res.render("login");
    console.log("Login!");
});

//login authenticate logic
app.post("/login", function(req, res){
   res.send("Post Route reached");
});

app.post("/authenticateUser", function(req, res){
//     var userDetails = [{
//         Email: req.body.email,
//         Password: req.body.pwd
//     }];
//     console.log(userDetails.Password);
//     console.log(user.Password);
//     if(userDetails.Password === user.Password){
//         res.redirect("dashboard");
//         console.log("Login success");
//     } else {
//         res.redirect("login");
//         console.log("Login failed!");
//     }
    console.log("Authentication Occuring!")
    res.redirect("login");
 });

app.listen(app.get("port"), function(){
   console.log("Server has started at PORT:5000. Enter http://127.0.0.1:5000 or http://localhost:5000 to view")
});