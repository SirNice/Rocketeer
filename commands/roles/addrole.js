const Discord = require("discord.js");

module.exports = {
    nombre: "Addrole",
    alias: [],
    description: "agrga rol a user",
    run: async (client, message, args) => {

        let permisos = 'MANAGE_ROLES';

        if (!message.guild.me.permissions.has(permisos)) {
            return message.channel.send(`No tengo permisos de ${permisos}.`)
        }

        if (!message.member.permissions.has('MANAGE_ROLES')) {
            return message.channel.send(`No tienes permisos de ${permisos}.`)
        }

        let persona = await message.mentions.members.first() ||
            message.guild.members.resolve(args[0])

        if (!persona) return message.channel.send('Debe mencionar o poner la ID de alguien para darle el rol.')

        if (!args[1]) {
            return message.channel.send('Debes mencionar o poner el nombre o ID del rol a dar.')
        }

        let rol = await message.mentions.roles.first() ||
            message.guild.roles.resolve(args[1]) ||
            message.guild.roles.cache.find(r => r.name == args.slice(1).join(' '))

        if (!rol) {
            return message.channel.send('Rol no encontrado en el servidor.')
        } else if (!rol.editable) {
            return message.channel.send('No puedo darle ese rol a nadie, debido a que esta más alto que mi rol.')
        } else if (rol.comparePositionTo(message.member.roles.highest) > 0) {
            return message.channel.send('Ese rol es mas alto que tu rol mas alto, así que no puedré darselo a nadie.')
        }

        await persona.roles.add(rol)
            .catch(e => message.reply('Ocurrio un **error**'))
            .then(() => {
                message.channel.send(`Rol **${rol.name}** agregado a **${persona.user.username}**.`)
            })
    }
}