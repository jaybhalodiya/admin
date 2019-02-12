const mongoose = require('mongoose');

const Off = mongoose.Schema({

    Title: String,
    Description: String,
    Start_Date: Date,
    End_Date: Date


}, {
    timestamps: true,
});

module.exports = mongoose.model('Offer', Off);