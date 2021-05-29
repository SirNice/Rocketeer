const mongoose = require('mongoose');

const Guild = mongoose.Schema({
    id: String,
    prefix: String,
    lang: {
        type: String,
        default: "en"
    }
});

module.exports = mongoose.model('Guild', Guild)