var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

var user = [{
    UserName: "Admin",
    Password: "Password123"
}]

app.get("/", function(req, res){
    res.render("index.ejs");
    console.log("Home!");
});

app.get("/login", function(req, res){
    res.render("login.ejs");
    console.log("Login!");
});

app.listen(app.get("port"), function(){
   console.log("Server has started at PORT:5000. Enter the following address to view: localhost:5000/")
});