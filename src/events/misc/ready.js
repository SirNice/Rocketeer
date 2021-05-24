const Discord = require("discord.js");
let moment = new Date().toLocaleTimeString();

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(client) {
        console.log(`[OK] ${moment} iniciated as ${client.user.tag}!`);

        setInterval(function () {
            let estados = ["Hello."];
            let status = estados[Math.floor(estados.length * Math.random())];
            client.user.setPresence({
                status: "online",
                activity: {
                    name: status,
                    type: "PLAYING", //LISTENINIG (ESCUCHANDO) //WATCHING (MIRANDO) //PLAYING (JUGANDO)
                },
            });
        }, 10000);
    }
};