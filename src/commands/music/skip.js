const Discord = require("discord.js");

const {serverQueue} = require('../../events/message/message')
const { queue } = require('../../index')

module.exports = {
    nombre: "skip",
    alias: [],
    description: "Salta la canción a la siguiente.",
    run: async (client, message, args) => {


        if (!message.member.voice.channel) return message.channel.send('debes unirte a un canal de voz.');

        if (!serverQueue) return message.channel.send('¡No hay canción que saltar!, la cola esta vacía');

        await serverQueue.connection.dispatcher.destroy();
        message.channel.send(`Reproduciendo ahora: **${serverQueue.songs[1].title}**`);


    }
}