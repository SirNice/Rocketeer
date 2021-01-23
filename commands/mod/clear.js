const Discord = require("discord.js");

module.exports = {
    nombre: "clear",
    alias: ['bulkDeleteXmsg'],
    description: "Eliminar mensajes por un numero determinado usando bulkDelete() Limite: maximo 100 mensajes.",
    run: async (client, message, args) => {

        let permisos = 'MANAGE_MESSAGES';

        if (!message.guild.me.permissions.has(permisos)) {
            return message.channel.send("**``Error``** | No tengo permisos de ``" + permisos + "``.")
        }

        if (!message.member.permissions.has('MANAGE_ROLES')) {
            return message.channel.send("**``Error``** | No tengo permisos de ``" + permiso + "``.")
        }

        if (!args) return message.channel.send('**``Error``** | Escriba la cantidad de mensajes a eliminar. ||Limite 100.||');
        let cantidad = parseInt(args[0])

        if (!cantidad || isNaN(cantidad)) return message.reply('**``Error``** | Introduce un numero por favor')

        if (cantidad > 100) {
            message.channel.send('**``Error``** | El maximo de mensajes que puedo borrar es 100')
            cantidad = 100
        }

        message.channel.fetchMessages({
            limit: cantidad
        }).then(mensajes => {
            message.channel.bulkDelete(
                mensajes.filter(m => !m.pinned) //para no borrar los mensajes anclados
            ).then(() => {
                message.channel.send(`**``Done``** | Borre los ${cantidad} mensajes.`).then(m => m.delete(20000))
            }).catch(e => {
                message.channel.send('**``Done``** | Ocurrio un error y no pude borrar los mensajes.')
            })
        })
    }
}