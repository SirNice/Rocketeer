let moment = new Date().toLocaleTimeString();
let mongoose = require('mongoose')
require('dotenv').config();

function connectDB() {
    
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((connection) => {
        console.info(
            `[OK] ${moment} Connection to Mongo successful ${connection}`
        );
    })
    .catch((error) => {
        console.error(
            `[ERROR] ${moment} Error connecting to mongo. The connection to the server could not be established \n[ERROR] ${moment} ${error}`
        );
        process.exit()
    });
    
}


module.exports = connectDB();