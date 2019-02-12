const mongoose = require('mongoose');

const Cteg = mongoose.Schema({
    Category_Name: String,

}, {
    timestamps: true,
});

module.exports = mongoose.model('Category', Cteg);