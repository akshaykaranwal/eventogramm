const bp = require("body-parser");
const express = require("express")


const app = express();

app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/signin",function(req,res){
    res.sendFile(__dirname + "/signin.html");
});

app.post("/signin",function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var pasw = req.body.password;
    var cpasw = req.body.confirm-password;
})

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.listen(3000,function(){
    console.log("Server started at port 3000")
});