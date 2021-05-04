const Discord = require("discord.js");

const {serverQueue} = require('../../events/message/message')
const { queue } = require('../../index')

module.exports = {
    nombre: "volumen",
    alias: [],
    description: "modifica el volumen del audio.",
    run: async (client, message, args) => {


        if (!serverQueue) return message.channel.send('¡No hay canción!, la cola esta vacía');
        if (!message.member.voice.channel) return message.channel.send('debes unirte a un canal de voz.');
        if (!args.join(' ')) return message.channel.send('Agrege el volumen entre **1 a 100%**')
        let countVolumen = parseInt(args[0]);

        if (countVolumen < 100) {

            let dispatcher = serverQueue.connection.dispatcher;
            await dispatcher.setVolume(Math.min((dispatcher.volume = countVolumen / 50)))

            message.channel.send(`**Volumen 🔊:** \`${Math.round(dispatcher.volume*50)}\`**%**`)

        } else {
            message.channel.send('El volumen debe estar entre ``1 a 100%``')

        }


    }
}