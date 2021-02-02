const Discord = require('discord.js');
const informacion = require('../../package.json')
const mongoose = require('mongoose');


module.exports = (client) => {


    console.log(`[SERVERS] ${client.guilds.cache.size}.`);
    console.log(`[USER] ${client.users.cache.size}`);
    console.log(`[MEMORIA] ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`[INICIADO COMO] ${client.user.tag}!`);
    console.log(`[VERSION] ${informacion.version}`);

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("[DATABASE] Conectado a MongoDB") //mensaje de confirmación.
    })
    mongoose.connection.on("error", function (e) {
        console.error(e);
    });

    setInterval(function () {
        var estados = ["Hello!", "help", "The Game"]
        let estado = estados[Math.floor(estados.length * Math.random())];
        client.user.setPresence({
            status: "online",
            activity: {
                name: estado,
                type: "PLAYING", //LISTENINIG (ESCUCHANDO) //WATCHING (MIRANDO) //PLAYING (JUGANDO)
            }
        })
    }, 10000);



}