const Discord = require('discord.js');

module.exports = {
    nombre: "ping",
    alias: ['latencia'],
    description: "Prueba",
    run: async (client, message, args) => {
        let ping = Math.floor(message.client.ws.ping);

        if (ping > 300) {
            let embed = new Discord.MessageEmbed().setTitle(`¡Hey! **${ping}ms.**`)
                .setColor(0xff0000)
            await message.channel.send(embed);


        } else if (ping > 150) {
            let embed = new Discord.MessageEmbed().setTitle(`¡Hey! **${ping}ms.**`)
                .setColor(0xffcc00)
            await message.channel.send(embed);


        } else {
            let embed = new Discord.MessageEmbed().setTitle(`¡Hey! **${ping}ms.**`)
                .setColor(0x66ff66)
            await message.channel.send(embed);

        }
    }
}