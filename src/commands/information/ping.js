const Commands = require('../../structures/Command');

module.exports = class Ping extends Commands {
    constructor(client) {
        super(client, {
            name: 'ping'
        });
    }

    async run(message) {
        message.channel.send(`Pong! Took ${message.createdAt - Date.now()}ms. ${Math.round(this.client.ws.ping)}ms.`)    }
};