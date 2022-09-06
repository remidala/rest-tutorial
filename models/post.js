const mongoose = require('mongoose');
const post = require('../routes/posts');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = postSchema;