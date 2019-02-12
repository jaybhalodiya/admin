const mongoose = require('mongoose');

const Cmp = mongoose.Schema({

    Company_Name: String,
    Address: String,
    Mobile: Number,
    Email_ID: String,
    Area: String


}, {
    timestamps: true,
});

module.exports = mongoose.model('Company', Cmp);