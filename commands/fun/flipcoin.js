const Discord = require("discord.js");

module.exports = {
    nombre: "flipcoin",
    alias: [],
    description: "Description",
    run: async (client, message, args) => {


        const coin = ['https://cdn.discordapp.com/attachments/315914386944557056/369580701269360656/cara.png',
            'https://cdn.discordapp.com/attachments/315914386944557056/369580737919451137/sello.png'
        ];


        message.channel.send('**' + message.author.username + '** sacaste:', {
            files: [coin[Math.floor(coin.length * Math.random())]]
        });


    }
}