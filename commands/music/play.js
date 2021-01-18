const ytdl = require('ytdl-core');
const search = require('youtube-search');

module.exports = {
    nombre: "join",
    alias: ['entrar'],
    description: "Prueba",
    run: async (client, message, args) => {

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz para reproducir música!');

        const permissions = voiceChannel.permissionsFor(message.client.user);

        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return message.channel.send('¡Necesito permisos para unirme y hablar en el canal de voz!');
        }


        var opts = {
            maxResults: 1,
            key: 'AIzaSyAfGI-S4-UChq1e6SSwFU-L-1qdcmzGOUs',
            type: "video"
        };


        const songArg = await search(args.join(' '), opts);
        const songURL = songArg.results[0].link;
        const songInfo = await ytdl.getInfo(songURL);

        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
            author: message.author.tag
        };

        if (!serverQueue) {

            const queueObject = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            };

            queue.set(message.guild.id, queueObject);

            queueObject.songs.push(song);


            try {

                var connection = await voiceChannel.join();
                queueObject.connection = connection;
                var fetchVideoInfo = require('youtube-info');
                let data = await fetchVideoInfo(queueObject.songs[0].url.slice(32))
                console.log(data)
                let embedfunction1 = new Discord.MessageEmbed()
                    .setTitle(`🎵 | Reproduciendo Música.`)
                    .addField(`Song:`, `**${song.title}**`)
                    .addField(`Añadido por:`, `**${message.author.tag}**`)
                    .setThumbnail(data.thumbnailUrl.toLocaleString())
                    .setFooter(`Nice Music`)
                    .setColor(0x03fc41)

                message.channel.send(embedfunction1);


                play(message.guild, queueObject.songs[0]);

            } catch (err) {

                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);

            }

        } else {

            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            let embedfunction1 = new Discord.MessageEmbed()
                .setTitle(`🎵 | Música añadida`)
                .addField(`Song:`, `**${song.title}**`)
                .addField(`Añadido por:`, `**${message.author.tag}**`)
                .setFooter(`Pepito.`)
                .setColor(0x03fc41)

            message.channel.send(embedfunction1);


        }
    }
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on('finish', () => {

            serverQueue.songs.shift();

            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.error(error);
        });

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}