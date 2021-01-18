const ytdl = require('ytdl-core');
const search = require('youtube-search');

module.exports = {
    nombre: "skip",
    alias: ['saltar'],
    description: "Prueba",
    run: async (client, message, args) => {

        if (!message.member.voice.channel) return message.channel.send('debes unirte a un canal de voz.');

        if (!serverQueue) return message.channel.send('¡No hay canción que saltar!, la cola esta vacía');

        await serverQueue.connection.dispatcher.destroy();
        message.channel.send(`Reproduciendo ahora: **${serverQueue.songs[1].title}**`);

    }
}