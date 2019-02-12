const mongoose = require('mongoose');

const Sta = mongoose.Schema({

    State_Name: String
}, {
    timestamps: true,
});

module.exports = mongoose.model('State', Sta);