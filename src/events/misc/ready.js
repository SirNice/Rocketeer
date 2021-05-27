const Discord = require("discord.js");
let moment = new Date().toLocaleTimeString();

const Events = require('../../structures/Event')

module.exports = class Ready extends Events {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
    run() {
        
        console.log(`[OK] ${moment} iniciated as ${this.client.user.tag}!`);

        setInterval(() => {
            let estados = ["Hello."];
            let status = estados[Math.floor(estados.length * Math.random())];
            this.client.user.setPresence({
                status: "online",
                activity: {
                    name: status,
                    type: "PLAYING", //LISTENINIG (ESCUCHANDO) //WATCHING (MIRANDO) //PLAYING (JUGANDO)
                },
            });
        }, 10000);
    }
}

