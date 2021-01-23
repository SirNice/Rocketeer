const Discord = require("discord.js");

module.exports = {
    nombre: "createinvite",
    alias: [],
    description: "Crea una invitación del servidor.",
    run: async (client, message, args) => {


        //https://discord.js.org/#/docs/main/stable/class/GuildChannel?scrollTo=createInvite
        //En ese url se pueden ver las opciones a la hora de crear la invitacion

        message.channel.createInvite({
                //opciones de la invitacion
                maxAge: 0
            })
            .then(invite => {
                message.channel.send(invite.url)
            })
            .catch(err => {
                message.channel.send('Ocurrio un error al crear la invitacion')
                console.log(`Error al ejecurtar createinvite \n ${err}`)
            })


    }
}