const Discord = require("discord.js");
const moment = require("moment");
require('moment-duration-format');
const informacion = require('../../package.json')

module.exports = {
    nombre: "botinfo",
    alias: ['botstats', 'infobot'],
    description: "Muestra la información sobre el bot.",
    run: async (client, message, args) => {



        const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");

        const informacion = new Discord.MessageEmbed()
        informacion.setAuthor("Nombre del discord", client.user.displayAvatarURL())
        informacion.setTitle("Comandos de información", message.author.displayAvatarURL())
        informacion.setDescription("Estos son los comandos de informacion de la tienda web, modalidades, informacion de rangos y demas.")
        informacion.addField("```+web```", `Pagina web`, true)
        informacion.addField("```+Tienda```", `Tienda web`, true)
        informacion.addField("```+soporte```", `Ayuda del staff`, true)
        informacion.addField("```+ip```", `Te muestra la ip de OnlyMC`, true)
        informacion.addField("```+twitter```", `Link de twitter`, true)
        informacion.addField("```+modalidades```", `Info de las modalidades`, true)
        informacion.addField("```+postulaciones```", `Info de las postulaciones`, true)
        informacion.addField("```+Discord```", `Link de discord`, true)
        informacion.addField("```+Youtube```", `Link de YouTube`, true)
        informacion.addField("```+bot```", `info del bot`, true)
        informacion.setFooter(`Usa +soporte si necesitas ayuda. Â¢ pedido por ${message.author.tag}`, client.user.avatarURL())
        informacion.setTimestamp()
        informacion.setColor("RANDOM")

        const embed = new Discord.MessageEmbed()
            .setColor(0x66ff66)
            .setTitle('Información del bot')
            .setDescription('Este bot no tiene finesni nada, solo aprendizaje.')
            .setAuthor(`Bot info`, client.user.avatarURL())
            .addField(`Dueño`, `SirNice#0221`, true)
            .addField(`Version`, `${informacion.version}`, true)
            .addField(`Libreria`, `Discord ^12.5.0 (Javascript)`, true)
            .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField(`Uptime`, `${actividad}`, true)
            .addField(`Servidores`, client.guilds.cache.size, true)
            .addField(`Usuarios`, client.users.cache.size, true)
            .addField(`Canales`, client.channels.cache.size, true)
            .addField(`Conexiones a voz`, client.guilds.cache.filter(x => x.me.voice.channel).size, true)

        await message.channel.send(embed);
        await message.channel.send(informacion)


    }
}