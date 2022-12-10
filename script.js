const express = require('express')
const bp = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.set('engine','ejs');
app.use(express.static("public"))
app.use(bp.json());
app.use(express.static('public'));
app.use(bp.urlencoded({
    extended: true
}));
mongoose.connect('mongodb://0.0.0.0:27017/eventodb',{useNewUrlParser:true});

    const userSchema = {
    
        name: String,
        email: String,
        password: String
    };
    
    const User = mongoose.model("User",userSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/signin",function(req,res){
    res.sendFile(__dirname + "/signin.html");
});


app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login.html");
});

app.get("/about",function(req,res){
    res.sendFile(__dirname + "/about.html");
});

app.get("/hackathons",function(req,res){
    res.sendFile(__dirname + "/index3.html");
});

app.post("/login",function(req,res){
    
    const email2=req.body.email;
    const password2=req.body.pswd;
    
    User.findOne({email:email2},function(err,founduser){
        if (err){
            console.log(err);
        } else{
            if(founduser){
                if(founduser.password == password2){
                    res.redirect("/hackathons")
                }
                else{
                    res.redirect("/about")
                }
                
            }
        }

    });
    

});

app.post("/signin",function(req,res){

    const name1 = req.body.Name;
    const email1 = req.body.email;
    const password1 = req.body.Password;

    const user = new User({
        name: name1,
        email: email1,
        password: password1
    });
    
    User.find(function(err,user){
        if(err)
        {
            console.log(err);
        }

        console.log(user);
    })
    
    user.save();
     

});

app.listen(3000,function(){
    console.log("Server started at port 3000")
});