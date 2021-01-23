const Discord = require('discord.js');
const mongoose = require('mongoose')
const {
    prefijo
} = require('../../config/config.json');

const GuildModel = require("../../database/models/prefix_db");

module.exports = async (client, message) => {

    // ============ BAD WORDS ============ //

    let words = [
        "gay axel", "axel gay"
    ]

    let messageContent = message.content.toLowerCase();
    if (words.some(word => messageContent.includes(word))) {
        message.channel.send(`${message.author} estamos de acuerdo.`)
            .then(() => message.delete())
    }

    // ============ BAD WORDS ============ //

    const modelo = await GuildModel.findOne({
        id: message.guild.id
    });
    const prefix = modelo ? modelo.prefix : prefijo;

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command));

    if (cmd) {
        return cmd.run(client, message, args)
    }


}