const mongoose = require('mongoose');

const Sup = mongoose.Schema({

    Supplier_Name: String,
    Mobile: Number,
    Email_ID: String,
    Area_Name: String,
    City_Name: String,



}, {
    timestamps: true,
});

module.exports = mongoose.model('Supplier', Sup);