const mongoose = require('mongoose');

const Guild = mongoose.Schema({
    guildID: String,
    prefix: String
});

module.exports = mongoose.model('Guild', Guild)
