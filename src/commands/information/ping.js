const Commands = require('../../structures/Command');

module.exports = class Ping extends Commands {
    constructor(client) {
        super(client, {
            name: 'ping'
        });
    }

    async run(message, args, lang) {

        let msg = lang.information.ping.message.replace('{ping}', message.createdAt - Date.now()).replace('{pingClient}', Math.round(this.client.ws.ping))

        message.channel.send(msg)
    }
};