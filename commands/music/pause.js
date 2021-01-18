const ytdl = require('ytdl-core');
const search = require('youtube-search');

module.exports = {
    nombre: "pause",
    alias: ['pausar'],
    description: "Prueba",
    run:  async (client, message, args) => {

        if (!serverQueue) return message.channel.send('¡No hay canción!, la cola esta vacía.');
        if (!message.member.voice.channel) return message.channel.send('debes unirte a un canal de voz.');
        await serverQueue.connection.dispatcher.resume();

        message.channel.send(`Canción actual reanudada.`)


    }
}