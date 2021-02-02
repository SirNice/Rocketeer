const Discord = require("discord.js");

const {serverQueue} = require('../../events/message/message')
const { queue } = require('../../index')

module.exports = {
    nombre: "pause",
    alias: [],
    description: "pausa el audio.",
    run: async (client, message, args) => {


        if (!serverQueue) return message.channel.send('¡No hay canción!, la cola esta vacía.');
        if (!message.member.voice.channel) return message.channel.send('debes unirte a un canal de voz.');
        await serverQueue.connection.dispatcher.pause();

        message.channel.send(`Pausado.`)


    }
}