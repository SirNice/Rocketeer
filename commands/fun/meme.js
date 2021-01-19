const Discord = require("discord.js");

module.exports = {
    nombre: "meme",
    alias: ['memes'],
    description: "Envía un meme",
    run: (client, message, args) => {
        const meme = require('../../utils/memes.json')
        const value = Math.floor(Math.random() * meme.length)


        const embed = new Discord.MessageEmbed()
        .setTitle('New meme')
        .setImage(meme[value])
        .setTimestamp()
        .setColor(0xfff)

        message.channel.send(embed)

    }
}