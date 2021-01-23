const Discord = require("discord.js");

module.exports = {
    nombre: "channelguilds",
    alias: [],
    description: "Muestra la lista de canales del servidor solicitado usando el mapeo para el listado",
    run: async (client, message, args) => {


        let id = message.guild.id;
        const embed = new Discord.MessageEmbed()
            .setColor(0x00AE86)
            .setDescription(`${client.guilds.cache.get(id).channels.cache.map(r => r.name).join(", ")}`)
            .setFooter('Lista de canales de: ' + message.guild.name);

        await message.channel.send(embed);


    }
}