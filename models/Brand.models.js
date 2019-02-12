const mongoose = require('mongoose');

const Bnd = mongoose.Schema({
    Brand_Name: String,

}, {
    timestamps: true,
});

module.exports = mongoose.model('Brand', Bnd);