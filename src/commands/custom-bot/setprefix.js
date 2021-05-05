const Discord = require("discord.js");
const GuildModel = require("../../database/models/Guild");

module.exports = {
    name: "setprefix",
    aliases: [],
    description: "change prefix of the server",
    run: async (client, message, args) => {

        let permiso = 'ADMINISTRATOR'

        if (!message.guild.me.permissions.has(permiso)) {
            return message.channel.send("**``Error``** | No tienes permisos de ``" + permiso + "``.");
        }

        let newPrefix = args[0];


        if (!newPrefix) return message.channel.send('**``Error``** | Coloca el nuevo prefijo.')
        //ahora buscamos un modelo con la id del servidor
        let model = await GuildModel.findOne({
            guildID: message.guild.id
        })
        //esta variable por si no si no encuentra uno 
        let dt = new GuildModel({
            guildID: message.guild.id,
            prefix: newPrefix
        })
        //en esta linea si encuentra un modelo con la id del guild, pues lo actualizamos, y si no tiene llama a la variable dt y la guarda.
        model ? await GuildModel.updateOne({
            guildID: message.guild.id
        }, {
            prefix: newPrefix
        }) : await dt.save()
        //y mandamos un mensaje de confirmacion
        message.channel.send(`**\`\`Done\`\`** | Mi nuevo prefijo ahora es **${newPrefix}**`)


    }
}