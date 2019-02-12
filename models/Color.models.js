const mongoose = require('mongoose');

const Colr = mongoose.Schema({

    Color_Name: String,


}, {
    timestamps: true,
});

module.exports = mongoose.model('Color', Colr);