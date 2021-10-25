const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    account_id:{
        type:String,
        unique: true,
    },
    user_id:{
        type:String,
        required: true,
    },
    currency_id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
        maxLength: 20,
        minLength: 5,
    },
    available:{
        type:Boolean,
        required: true,
        default:true,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Account", AccountSchema);