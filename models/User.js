const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id:{
        type:String,
        unique: true,
    },
    username:{
        type:String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required: true,
        minLength: 6,
        maxLength: 80,
    },
    email:{
        type:String,
        required: true,
        minLength:8,
        maxLength: 50,
        unique: true,
        lowercase:true,
        trim:true,
    },
    phone:{
        type:String,
        required: true,
        minLength:8,
        maxLength:9,
        trim:true,
        unique:true,
        match: /^[0-9]*$/gm,
    },
    address:{
        type:String,
        required: true,
        minLength: 10,
        maxLength:40,
    },
    country:{
        type:String,
        required: true,
        lowercase:true,
        maxLength:25,
        trim:true,
    },
    firstname:{
        type:String,
        required: true,
        minLength: 2,
        maxLength:18,
        trim:true,
    },
    lastname:{
        type:String,
        required: true,
        minLength: 2,
        maxLength:18,
        trim:true,
    },
    secondname:{
        type:String,
        maxLength:15,
        trim:true,
    },
    secondlastname:{
        type:String,
        maxLength:15,
        trim:true,
    },
    picture:{
        type:String,
        default:"",
    },
    pin:{
        type:String,
        maxLength: 6,
        minLength: 4,
        trim:true,
        match: /^[0-9]*$/gm,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);