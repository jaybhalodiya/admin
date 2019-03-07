const mongoose = require('mongoose');

const Custom = mongoose.Schema({

    UserName: String,
    Measurements: String,
    EmailID: String,
    Phone: Number,
    Message: String,
    Image: String,
    Work_Name: String,
    Size: String,
    City_Name: String,
    Area_Name: String,
    status: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserLogin'
    }

}, {
    timespace: true,
});

module.exports = mongoose.model('Custome Order', Custom)