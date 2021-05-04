module.exports = {
    MakeRole: function (message, name, color, perms) {
        return message.guild.createRole({
            name: name,
            color: color,
            permissions: perms == false ? [] : perms
        })
    },
    SetChannelperms: function (message, role, permissions) {
        message.guild.channels.array().forEach(async (channel) => {
            if (channel.type == "voice") {
                await channel.replacePermissionOverwrites({
                    overwrites: permissions.voice
                })
            } else {
                await channel.replacePermissionOverwrites({
                    overwrites: permissions.text
                })
            }
        })
    },
    Convert: function (date) {
        let valid_keys = {
            "w": {
                nombre: "semana(s)",
                tiempo: 604800000
            },
            "d": {
                nombre: "dia(s)",
                tiempo: 86400000
            },
            "h": {
                nombre: "hora(s)",
                tiempo: 3600000
            },
            "m": {
                nombre: "minuto(s)",
                tiempo: 60000
            },
            "s": {
                nombre: "segundo(s)",
                tiempo: 1000
            }
        }

        let format = date.slice(-1),
            time = date.slice(0, -1)

        if (!valid_keys[format]) return false
        if (isNaN(time)) return false
        if (parseInt(time) <= 0) return false
        return {
            nombre: `${parseInt(time)} ${valid_keys[format].nombre}`,
            tiempo: valid_keys[format].tiempo * parseInt(time)
        }

    },
    SuccessEmbed: function (Discord, message, msg) {
        message.channel.send(new Discord.MessageEmbed().setColor([0, 255, 0]).setDescription(msg).setFooter(`Comando usado por ${message.author.tag}`, message.author.displayAvatarURL))
    },
    ErrorEmbed: function (Discord, message, msg) {
        message.channel.send(new Discord.MessageEmbed().setColor([255, 0, 0]).setDescription(msg).setFooter(`Comando usado por ${message.author.tag}`, message.author.displayAvatarURL))
    }
}