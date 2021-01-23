const Discord = require("discord.js");

module.exports = {
    nombre: "kick",
    alias: [],
    description: "kick a un usuario mencionado usando member().kick(), incluye razón para los registros de auditoría-log ",
    run: async (client, message, args) => {




        let user = message.mentions.users.first() || message.guild.members.resolve(args[0]);
        let razon = args.slice(1).join(' ');

        var perms = message.member.hasPermission("KICK_MEMBERS");

        if (!perms) return message.channel.send("**``Error``** | No tienes Permisos para usar este comando.");
        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);

        if (!razon) return message.channel.send('**``Error``** | Escriba una razón, `-kick @username [razón]`');
        if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');

        message.guild.member(user).kick(razon);
        message.channel.send(`**``Done``** | **${user.username}**, fue pateado del servidor, razón: ${razon}.`);


    }
}