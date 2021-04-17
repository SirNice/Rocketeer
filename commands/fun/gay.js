const Discord = require("discord.js");

module.exports = {
    nombre: "gay",
    alias: [],
    description: "Description",
    run: async (client, message, args) => {

        let user = message.mentions.users.first()
        if (!user) return message.channel.send('Menciona a 1 usuario para calcularlo');

        const random = Math.floor(Math.random() * 100);
        let heard = "";

        if (random < 50) {
            heard = ':gay_pride_flag: ';

        } else if (random < 80) {
            heard = ':gay_pride_flag:  ';

        } else if (random < 100) {
            heard = ':gay_pride_flag: ';

        }

        const embed = new Discord.MessageEmbed()
            .setAuthor('El porcentaje gay de ' + user.username + ' es:')
            .setDescription(heard + ' **' + random + ' %**' + ' ' + heard)
            .setColor(0xff4d4d)

        message.channel.send(embed);

    }
}