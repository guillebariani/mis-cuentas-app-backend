const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category_id:{
        type:String,
        unique: true,
    },
    user_id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
        maxLength: 20,
        minLength: 3,
        },
    available:{
        type:Boolean,
        required: true,
        default:true,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);