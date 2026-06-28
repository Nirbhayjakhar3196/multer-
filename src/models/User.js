const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;