const mongoose = require('mongoose');

const PurRet = mongoose.Schema({

    Product_Name: String,
    Return_QTY: Number,
    Stock: Number,
    Return_Description: String



}, {
    timestamps: true,
});

module.exports = mongoose.model('Purchase Return', PurRet);