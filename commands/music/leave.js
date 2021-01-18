
const ytdl = require('ytdl-core');
const search = require('youtube-search');

module.exports = {
        nombre: "leave",
        alias: ['salir'],
        description: "Prueba",
        run: (client, message, args) => {

                const canalvoz = message.member.voice.channel;

                if (!canalvoz) {
                    message.channel.send('No estas conectado a un canal de voz.');

                } else {
                    message.channel.send('Dejando el canal de voz.').then(() => {
                        canalvoz.leave();

                    }).catch(error => console.log(error));


                }
            }
}