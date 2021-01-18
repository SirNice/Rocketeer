const Discord = require('discord.js');
const config = require('../../config/config.json');
let prefix = config.prefix;

module.exports = async (client, message) => {

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;


    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command));

    if (cmd) {
        return cmd.run(client, message, args)
    }

}