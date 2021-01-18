const ytdl = require('ytdl-core');
const search = require('youtube-search');

module.exports = {
    nombre: "join",
    alias: ['entrar'],
    description: "Prueba",
    run: (client, message, args) => {


        const canalvoz = message.member.voice.channel;

        if(!canalvoz || canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
        
        } else if (message.guild.voiceConnection) {
            message.channel.send('Ya estoy conectado en un canal de voz.');
        
        } else {
            message.channel.send('Conectando...').then(m => {
                canalvoz.join().then(() => {
                    m.edit('Conectado exitosamente.').catch(error => console.log(error));
        
                }).catch(error => console.log(error));
        
            }).catch(error => console.log(error));
        };

    }
}