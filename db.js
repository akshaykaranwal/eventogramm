const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersdb");

const userschema = mongoose.Schema({
        name:String,
        email:String,
        password:String,
        confirmpassword:String   
});

const User = mongoose.model("User",userschema);



user.save();

