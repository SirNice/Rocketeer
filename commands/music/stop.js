const Discord = require("discord.js");

const {serverQueue} = require('../../events/message/message')
const { queue } = require('../../index')

module.exports = {
    nombre: "stop",
    alias: [],
    description: "Para la canción.",
    run: async (client, message, args) => {



        if (!message.member.voice.channel) return message.channel.send('Debes unirte a un canal de voz para detener la canción.');
        if (!serverQueue) return message.channel.send('¡No hay canción!, la cola esta vacía.');

        serverQueue.songs = [];

        await serverQueue.connection.dispatcher.end();
        message.channel.send('Lista de canciones fue detenida.')


    }
}