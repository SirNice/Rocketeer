const Discord = require("discord.js");

module.exports = {
    nombre: "invitebot",
    alias: [],
    description: "Envía una invitación del bot.",
    run: async (client, message, args) => {

        client.generateInvite([
            ])
            .then(link => {
                message.channel.send(`Link de invitación: ${link}`);

            });

    }
}