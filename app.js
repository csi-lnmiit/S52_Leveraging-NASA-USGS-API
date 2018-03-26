var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local");

mongoose.connect("mongodb://localhost/CSI_app");
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Seed data must be called here

//Passport Config
app.use(require("express-session")({
    secret: "This is the secret key!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.listen(app.get("port"), function(){
   console.log("Server has started at PORT:5000. Enter http://127.0.0.1:5000 or http://localhost:5000 to view")
});