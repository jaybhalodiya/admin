const mongoose = require('mongoose');

const Pur = mongoose.Schema({
    Purchase_Date: Date,
    Supplier_Name: String,
    Product_Name: String,
    QTY: Number,
    Price: Number,
    CGST: Number,
    SGST: Number,
    Total: Number,



}, {
    timestamps: true,
});

module.exports = mongoose.model('Purchase', Pur);