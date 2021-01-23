const Discord = require('discord.js');
const informacion = require('../../package.json')
const mongoose = require('mongoose');


module.exports = (client) => {
    

    console.log(`[SERVERS] ${client.guilds.cache.size}.`);
    console.log(`[USER] ${client.users.cache.size}`);
    console.log(`[MEMORIA] ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`[INICIADO COMO] ${client.user.tag}!`);
    console.log(`[VERSION] ${informacion.version}`);
    
    mongoose.connect( process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("[DATABASE] Conectado a MongoDB") //mensaje de confirmación.
    })
    mongoose.connection.on("error", function(e) { console.error(e); });

}

