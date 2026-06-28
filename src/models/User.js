const mongoose = require('mongoose');
const { image } = require('../config/cloudinary');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    imagePublicId: {
        type: String,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;