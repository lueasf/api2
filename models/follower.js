const mongoose = require('mongoose')

const followerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    following: {
        type: String,
        required: true
    },
    followingDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Follower', followerSchema) // pour exporter le model avec:
// Follower est le nom du model et followerSchema est le schema du model