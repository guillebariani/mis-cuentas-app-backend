const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    transaction_id:{
        type:String,
        unique: true,
    },
    account_id:{
        type:String,
        required: true,
    },
    category_id:{
        type:String,
        required: true,
    },
    concept_id:{
        type:String,
        required: true,
    },
    amount:{
        type:Number,
        required: true,
    },
    description:{
        type:String,
        maxLength: 50,
    },
    date:{
        type:String,
        required: true,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Transaction", TransactionSchema);