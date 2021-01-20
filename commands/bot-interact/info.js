const Discord = require("discord.js");
const moment = require("moment");
require('moment-duration-format');
const informacion = require('../../package.json')

module.exports = {
    nombre: "info",
    alias: ['botstats', 'botinfo', 'infobot'],
    description: "Description",
    run: async (client, message, args) => {



        const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


        const embed = new Discord.MessageEmbed()
            .setColor(0x66ff66)

            .setAuthor(`Bot info`, client.user.avatarURL())
            .addField(`Dueño`, `user#0000`, true)
            .addField(`Version`, `${informacion.version}`, true)
            .addField(`Libreria`, `Discord ^12.5.0 (Javascript)`, true)
            .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField(`Uptime`, `${actividad}`, true)
            .addField(`Servidores`, `${client.guilds.size.toLocaleString()}`, true)
            .addField(`Usuarios`, `${client.users.size.toLocaleString()}`, true)
            .addField(`Canales`, `${client.channels.size.toLocaleString()}`, true)
            .addField(`Conexiones a voz`, `${client.voiceConnections.size}`, true)

        await message.channel.send(embed);


    }
}