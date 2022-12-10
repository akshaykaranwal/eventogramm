const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.set('strictQuery', true);


mongoose.connect('mongodb://0.0.0.0:27017/fruitsdb',{useNewUrlParser:true});

const userSchema = new mongoose.Schema({

    name:String,
    rating:Number,
    review:String
});

const Users = mongoose.model("User",userSchema);
const user = new Users({
    name:"apple",
    rating:7,
    review:"tasty"
});

user.save();
 
