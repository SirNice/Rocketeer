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

        for(const subcarpet of fs.readdirSync('./commands/')){ 

            for(const file of fs.readdirSync(`./commands/${subcarpet}`)){
                if(file.endsWith(".js")){
                    let fileContents = require(`C:/Users/SirNice/Documents/Rocketeer/commands/${subcarpet}/${file}`);
                    let fileName = fileContents.nombre;
                    embed.addField( subcarpet, fileName)
                }
                
            }
        
        }



        /*      .addField("Custom Responses", "UUUU")
        .addField("Fun", "UUUU")
        .addField("Image", "UUUU")
        .addField("Level", "UUUU")
        .addField("Mod", "UUUU")
        .addField("Music", "UUUU")
        .addField("Roles", "UUUU")
        .addField("Ticket", "UUUU")
        .addField("Utility", "UUUU")
        .addField("Welcome", "UUUU")
        .addField("Wiki", "UUUU")*/
        embed.setFooter(`Escribele a SirNice.#0221 si necesitas ayuda. pedido por ${message.author.tag}`, client.user.avatarURL())
        embed.setTimestamp()
        embed.setColor("RANDOM")

        /*
        
        */

        await message.channel.send(embed)

    }
}