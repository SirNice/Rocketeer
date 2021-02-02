const Discord = require("discord.js");

const {serverQueue} = require('../../events/message/message')
const { queue } = require('../../index')

module.exports = {
    nombre: "join",
    alias: ['entra'],
    description: "el bot ingresa a un chat de voz donde está el usuario que lo ejecuta.",
    run: async (client, message, args) => {



        const canalvoz = message.member.voice.channel;

        if (!canalvoz || canalvoz.type !== 'voice') {
            message.channel.send('*``Error``** | ¡Necesitas unirte a un canal de voz primero!.');

        } else if (message.guild.voiceConnection) {
            message.channel.send('*``Error``** | Ya estoy conectado en un canal de voz.');

        } else {
            message.channel.send('Conectando...').then(m => {
                canalvoz.join().then(() => {
                    m.edit('*``Done``** | Conectado exitosamente.').catch(error => console.log(error));

                }).catch(error => console.log(error));

            }).catch(error => console.log(error));
        };


    }
}