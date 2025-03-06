const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({ 
    uid: {
        type: Number,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);