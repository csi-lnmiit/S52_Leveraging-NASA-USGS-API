var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

var user = [{
    Email: "admin@admin.com",
    Password: "Password123"
}]

app.get("/", function(req, res){
    res.render("index");
    console.log("Home!");
});

app.get("/login", function(req, res){
    res.render("login");
    console.log("Login!");
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