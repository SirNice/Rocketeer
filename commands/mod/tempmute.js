const Discord = require("discord.js");
const {
    MakeRole,
    SetChannelperms,
    Convert,
    SuccessEmbed,
    ErrorEmbed
} = require("../../utils/funtions");

module.exports = {
    nombre: "tempmute",
    alias: [],
    description: "Description",
    run: async (client, message, args) => {



        if (!message.guild.me.hasPermission(["MANAGE_ROLES", "MANAGE_CHANNELS"])) return ErrorEmbed(Discord, message, "Necesito tener el permiso de **MANAGE_ROLES** Y **MANAGE_CHANNELS**")

        let mutedU = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!mutedU) return ErrorEmbed(Discord, message, `Necesitas nombrar al usuario que quieres mutear, tambien necesitas colocar el tiempo:
\`\`\`
s => Para segundos.
m => Para minutos.
h => Para horas.
d => Para dias.
w => Para semanas.
\`\`\`
`)

        if (mutedU.id == client.user.id || mutedU.id == message.author.id) return ErrorEmbed(Discord, message, "Menciona a un usuario diferentes.")

        if (!args[1]) return ErrorEmbed(Discord, message, `Necesitas colocar el tiempo:
\`\`\`
s => Para segundos.
m => Para minutos.
h => Para horas.
d => Para dias.
w => Para semanas.
\`\`\`
`)

        let time_v = Convert(args[1])

        if (!time_v) return ErrorEmbed(Discord, message, "Formato invalido, asegurate de poner el tiempo correctamente.")

        let mutedR = message.guild.roles.cache.find(r => r.name.toLowerCase() == "mutiado");


        if (!mutedR) {
            mutedR = await MakeRole(message, "muted", "000000", false)


            await SetChannelperms(message, mutedR, {
                voice: [{
                    id: mutedR.id,
                    type: "role",
                    denied: ["SPEAK", "CONNECT"]
                }],
                text: [{
                    id: mutedR.id,
                    type: "role",
                    denied: ["SEND_MESSAGES", "ADD_REACTIONS", "CREATE_INSTANT_INVITE", "ATTACH_FILES"]
                }]
            })
        }
        if (mutedU.roles.cache.has(mutedR.id)) return ErrorEmbed(Discord, message, `El usuario ${mutedU} actualmente ya se encuentra muteado.`)


        mutedU.roles.add(mutedR.id).then(() => {
            SuccessEmbed(Discord, message, `${mutedU} acaba de ser muteado por ${time_v.nombre}`)

            setTimeout(() => {

                mutedU.roles.remove(mutedR.id).then(() => {
                    SuccessEmbed(Discord, message, `El mute del usuario ${mutedU} acaba de expirar.`)
                }).catch(err => {

                    ErrorEmbed(Discord, message, `El mute del usuario ${mutedU} acaba de expirar pero ocurrio un error al tratar de removerte el rol: **${err}**`)
                })
            }, time_v.tiempo)
        }).catch(error => {

            ErrorEmbed(Discord, message, `Ocurrio un error al tratar de agregar el rol: **${error.message}**`)
        })

        return;


    }
}