const Discord = require("discord.js");

module.exports = {
    nombre: "detectrole",
    alias: ['findrole'],
    description: "Description",
    run: async (client, message, args) => {


        let miembro = message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.member

        if (miembro == message.member) {
            if (!args) return message.channel.send("Debes poner el nombre del rol")
            var nombrerol = args.join(' ')

            var rol = message.guild.roles.cache.find(r => r.name == nombrerol)
            if (!rol) return message.channel.send('Rol no encontrado en el servidor')

            if (miembro.roles.cache.some(r => r == rol)) {
                message.channel.send(`Tu si tienes el rol \`${rol.name}\` `)
            } else {
                message.channel.send(`Tu no tienes el rol \`${rol.name}\` `)
            }
        } else {
            let nombrerol = args.slice(1).join(' ')
            if (!nombrerol) return message.channel.send("Debes poner el nombre del rol despues de la mencion o id")

            let rol = message.guild.roles.cache.find(r => r.name == nombrerol)
            if (!rol) return message.channel.send('Rol no encontrado en el servidor')

            if (miembro.roles.cache.some(r => r == rol)) {
                message.channel.send(`**${miembro.user.tag}** si tiene el rol \`${rol.name}\` `)
            } else {
                message.channel.send(`**${miembro.user.tag}** no tiene el rol \`${rol.name}\` `)
            }
        }


    }
}