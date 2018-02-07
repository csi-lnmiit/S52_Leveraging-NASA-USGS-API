var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", function(req, res){
    res.render("index.html");
    console.log("reached home!");
});

app.get("/login", function(req, res){
    res.render("login.html");
});

app.listen(app.get("port"), function(){
   console.log("Server has started at PORT:3000. Enter the following address to view: 0.0.0:3000/")
});