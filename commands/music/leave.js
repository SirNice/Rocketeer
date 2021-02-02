const Discord = require("discord.js");

module.exports = {
    nombre: "leave",
    alias: ['salir'],
    description: "El bot sale de el canal de voz en el que esta.",
    run: async (client, message, args) => {



        const canalvoz = message.member.voice.channel;

        if (!canalvoz) {
            message.channel.send('*``Error``** | No estas conectado a un canal de voz.');

        } else {
            message.channel.send('*``Done``** | Dejando el canal de voz.').then(() => {
                canalvoz.leave();

            }).catch(error => console.log(error));



        }
    }
}