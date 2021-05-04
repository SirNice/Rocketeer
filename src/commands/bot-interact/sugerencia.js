const Discord = require("discord.js");
const {
    channelsug
} = require('../../config/config.json')

let cooldown = new Set();

module.exports = {
    nombre: "sugerencia",
    alias: ['sug', 'suggestion'],
    description: "Permite enviar un mensaje como sugerencia al dueño del bot.",
    run: async (client, message, args) => {

        if (cooldown.has(message.author.id)) {
            message.channel.send(`**\`\`Error\`\`** | ${message.author.username}, utilice el comando desde de 20 segundos.`);
            return;
        }

        cooldown.add(message.author.id);

        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, 20000)



        let channelSug = client.channels.cache.get(channelsug);
        let reporte = args.join(' ');
        if (!reporte) return message.channel.send("**``Error``** | Envia una sugerencia o bug.")

        const embedDev = new Discord.MessageEmbed() 
            .setTitle(':e_mail: | **Sugerencia o bug**')
            .setDescription('`Tu sugerencia o bug se ha enviado al buzón del bot.`')
            .setDescription(reporte)
            .setColor(0x77AEFF)
            .setFooter(`sugerencia/bug enviado por ${message.author.username}#${message.author.discriminator}.`)

        
        await channelSug.send(embedDev)
        await message.channel.send("**``Done``** | Mensaje enviado a los desarrolladores.").then(m => m.react("\u2709"))



        // PROPUESTO POR: Giorgi#3219


    }
}