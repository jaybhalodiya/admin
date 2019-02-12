const mongoose = require('mongoose');

const Tler = mongoose.Schema({

    Tailor_Name: String,
    Address: String,
    Mobile: Number,
    Email_ID: String,
    Company_Name: String

}, {
    timestamps: true,
});

module.exports = mongoose.model('Tailor', Tler);