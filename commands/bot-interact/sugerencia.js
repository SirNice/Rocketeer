const Discord = require("discord.js");
const {
    channelsug
} = require('../../config/config.json')

module.exports = {
    nombre: "sugerencia",
    alias: ['sug', 'suggestion'],
    description: "Permite enviar un mensaje como sugerencia al dueño del bot.",
    run: async (client, message, args) => {


        let channel = client.channels.cache.get(channelsug);
        let reporte = args.join(' ');
        if (!reporte) return message.channel.send("**``Error``** | Envia una sugerencia o bug.")

        const embedDev = new Discord.MessageEmbed()
            .setTitle(':e_mail: | **Sugerencia o bug**')
            .setDescription('`Tu sugerencia o bug se ha enviado al buzón del bot.`')
            .setDescription(reporte)
            .setColor(0x77AEFF)
            .setFooter(`sugerencia/bug enviado por ${message.author.username}#${message.author.discriminator}.`)

        const embedUser = new Discord.MessageEmbed()
            .setTitle(':e_mail: | **Sugerencia o bug**')
            .setDescription('`Tu sugerencia o bug se ha enviado al buzón del bot.`')
            .setDescription(reporte)
            .setColor(0x77AEFF)
            .setFooter(`sugerencia/bug enviado por ${message.author.username}#${message.author.discriminator}.`)

        await channel.send(embedDev)
        await message.channel.send("**``Done``** | Mensaje enviado a los desarrolladores.").then(m => m.react("\u2709"))



        // PROPUESTO POR: Giorgi#3219


    }
}