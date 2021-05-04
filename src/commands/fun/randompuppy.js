const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
    nombre: "randompuppy",
    alias: ['puppy'],
    description: "randompuppy",
    run: async (client, message, args) => {


        randomPuppy().then(url  => {

            const randomPuppy =  new Discord.MessageEmbed()
            .setImage(url)
            .setColor("RANDOM")
            message.channel.send(randomPuppy);


        }).catch(err => message.channel.send("Hubo un error, inténtelo nuevamente."));


    }
}