const Discord = require("discord.js");
const fs = require('fs');

module.exports = {
    nombre: "help",
    alias: ['commands', 'ayuda'],
    description: "Description",
    run: async (client, message, args) => {




        const embed = new Discord.MessageEmbed()
            .setAuthor(`Comandos`, client.user.displayAvatarURL())
            .setTitle("Comandos de Rocketeer")
            .setURL("https://SirNice.xyz")
            .setDescription("Estos son las categorias y sus comandos")
            .setFooter(`Escribele a SirNice.#0221 si necesitas ayuda. pedido por ${message.author.tag}`, client.user.avatarURL())
            .setTimestamp()
            .setColor("RANDOM")

        embedHelp('bot-interact')
        // embedHelp('custom-bot')
        // embedHelp('custom-responses')
        embedHelp('fun')
        //embedHelp('image')
       // embedHelp('level')
        embedHelp('mod')
        //embedHelp('music')
        embedHelp('roles')
        //embedHelp('ticket')
        embedHelp('utility')
        //embedHelp('welcome')
        //embedHelp('wiki')

        async function embedHelp(subcarpet) {

            let commands = []

            for (const file of fs.readdirSync(`./commands/${subcarpet}`)) {
                if (file.endsWith(".js")) {
                    var fileContents = require(`C:/Users/SirNice/Documents/Rocketeer/commands/${subcarpet}/${file}`);
                    commands.push(fileContents.nombre)
                }

            }
            let comandos = commands.join(", ")

            await embed.addField(subcarpet, comandos)

        }






        await message.channel.send(embed)

    }
}