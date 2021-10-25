const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
    currency_id:{
        type:String,
        unique: true,
    },
    name:{
        type:String,
        required: true,
        maxLength: 20,
        minLength: 3,
        unique: true,
    },
    symbol:{
        type:String,
        required: true,
    }
},
{timestamps: true}
);

module.exports = mongoose.model("Currency", CurrencySchema);