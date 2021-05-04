const Discord = require("discord.js");

module.exports = {
    nombre: "fish",
    alias: ['pescar'],
    description: "Description",
    run: async (client, message, args) => {



        let rollfish = Math.floor(Math.random() * 7) + 1;
        if (rollfish === 1) {
            message.channel.send(`Felicitaciones, ${message.author.username}! pescaste: :tropical_fish:`);

        } else if (rollfish === 2) {
            message.channel.send(`Felicitaciones, ${message.author.username}! pescaste: :fish:`);

        } else {

            message.channel.send(`Felicitaciones, ${message.author.username}! pescaste: :shopping_cart:`);
        }


    }
}