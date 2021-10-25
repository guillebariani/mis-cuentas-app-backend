const mongoose = require('mongoose');

const UserExtraSchema = new mongoose.Schema({
    user_id:{
        type:String,
        unique: true,
    },
    account_limit:{
        type:Number,
        default: 3,
    },
    category_limit:{
        type:Number,
        default: 3,
    },
    concept_limit:{
        type:Number,
        default: 3,
    },
    spend_limit:{
        type:Number,
        default: 10000,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("UserExtra", UserExtraSchema);