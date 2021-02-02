const Discord = require("discord.js");
const {serverQueue} = require('../../events/message/message')

const { queue } = require('../../index')


module.exports = {
    nombre: "lista",
    alias: [],
    description: "Muestra la lista de la canciones",
    run: async (client, message, args) => {



        if (!serverQueue) return message.channel.send('¡No hay canción que mostrar!, la cola esta vacía');
        let i = 1
        let list = serverQueue.songs.slice(1).map((m) => {

            if (i > 16) return
            i++;
            return `[${i}] - 🎵 ${m.title}  / 👤 por: ${m.author}`

        }).join('\n')

        let hr = "---------------------------------------------"
        let time = Math.trunc(serverQueue.connection.dispatcher.streamTime / 1000)

        let playName = `${hr}\n🔊 Ahora: ${serverQueue.songs[0].title}\n🕐 Tiempo: ${time} segundos.\n👤 Por: ${serverQueue.songs[0].author}\n${hr}`
        let countSong = `\n${hr}\n📒 Lista ${serverQueue.songs.length} | 15 canciones.`


        const embed = new Discord.MessageEmbed()
            .setTitle("¡LISTA DE CANCIONES PARA REPRODUCIR!")
            .setColor(0x03fc41)
            .setDescription('\n' + playName + '\n\n' + list + '\n' + countSong + '\n')

        message.channel.send({
            embed
        })


    }
}