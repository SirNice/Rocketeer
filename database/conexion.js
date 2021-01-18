const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
console.log("Connected to the database");
    return true;

module.exports = mongoose;