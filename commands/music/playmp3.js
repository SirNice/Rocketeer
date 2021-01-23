const Discord = require("discord.js");

module.exports = {
    nombre: "playmp3",
    alias: [],
    description: "No ejecurtar",
    run: async (client, message, args) => {


        let voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');

        voiceChannel.join()
            .then(connection => {

                const dispatcher = connection.play(`C:/Users/Desktop/musica/audio.mp3`);
                message.channel.send('Reproduciendo');

            })
            .catch(console.error);


    }
}