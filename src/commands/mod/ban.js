const Discord = require("discord.js");

module.exports = {
    nombre: "ban",
    alias: ['banear'],
    description: "Banea a un usuario.",
    run: async (client, message, args) => {

        let permiso = 'BAN_MEMBERS'

        if (!message.guild.me.permissions.has(permiso)) {
            return message.channel.send("**``Error``** | No tengo permisos de ``" + permiso + "``.");
        }

        if (!message.member.permissions.has(permiso)) {
            return message.channel.send("**``Error``** | No tienes el permisos de ``" + permiso + "``.")
        }

        let persona = message.mentions.members.first() ||
            message.guild.members.resolve(args[0])

        if (!persona) {
            return message.channel.send('**``Error``** | Debe mencionar a alguien para banear.')
        }  else if (persona == message.author) {
            return message.channel.send('**``Error``** | No puedes autobanear.')
        } else if (!persona.bannable) {
            return message.channel.send('**``Error``** | No puedo banear a esta persona.')
        } else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
            return message.channel.send('**``Error``** | Esta usuario tiene el mismo o mayor rol que tu, no puedes banearlo.')
        }

        var razon = args.slice(1).join(' ')
        if (!razon) {
            razon = 'Razon no especificada'
        }

        razon += `, Baneado por ${message.author.tag}.`

        await message.guild.members.ban(persona, {
                reason: razon
            })
            .catch(e => message.reply('Ocurrio un **error** desconocido'))
            .then(() => {
                message.channel.send(`**``Done``** | Banee a **${persona.user.tag}**.`)
            })



    }
}