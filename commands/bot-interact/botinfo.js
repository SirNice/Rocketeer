const Discord = require("discord.js");
const moment = require("moment");
require('moment-duration-format');
const config = require('../../package.json')
const GuildModel = require("../../database/models/prefix_db");
const {
    prefijo
} = require('../../config/config.json');

module.exports = {
    nombre: "botinfo",
    alias: ['botstats', 'infobot', 'bot'],
    description: "Muestra la información sobre el bot.",
    run: async (client, message, args) => {
        
        const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");

        const modelo = await GuildModel.findOne({
            id: message.guild.id
        });
        const prefix = modelo ? modelo.prefix : prefijo;


        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Información del bot')
        .setDescription(`${config.description}`)
        .setAuthor(`Bot info`, client.user.avatarURL())
        .addField(`Desarrollador`, `SirNice#0221`, true)
        .addField(`Version`, `${config.version}`, true)
        .addField(`Libreria`, `Discord ^12.5.0 (Javascript)`, true)
        .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(`Uptime`, `${actividad}`, true)
        .addField(`Servidores`, client.guilds.cache.size, true)
        .addField(`Usuarios`, client.users.cache.size, true)
        .addField(`Canales`, client.channels.cache.size, true)
        .addField(`Conexiones a voz`, client.guilds.cache.filter(x => x.me.voice.channel).size, true)


        const informacion = new Discord.MessageEmbed()
        .setAuthor("Informacion")
        .setTitle("Comandos de información", message.author.displayAvatarURL())
        .setDescription("Más información del bot, y su desarrollador")
        .addField("```"+prefix+"web```", `[Pagina web](https://sirnice.xyz)`, true)
        .addField("```"+prefix+"soporte```", `Ayuda del staff, o contacta al desarrollador del bot`, true)
        .addField("```"+prefix+"twitter```" , `[Link de twitter](https://sirnice.xyz)`, true)
        .addField("```"+prefix+"discord```", `[Link del servidor de  discord](https://discord.gg/ekFu3Y6M)`, true)
        .addField("```"+prefix+"youtube```", `Link de YouTube  **Muy pronto**`, true)
        .setFooter(`Si necesitas ayuda contacta al desarrollador.`)
        .setTimestamp()
        .setColor("RANDOM")

        await message.channel.send(embed);
        await message.channel.send(informacion)


    }
}