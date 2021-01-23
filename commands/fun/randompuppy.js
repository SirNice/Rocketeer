const Discord = require("discord.js");
const randomPuppy = require('random-puppy');

module.exports = {
    nombre: "randompuppy",
    alias: ['puppy'],
    description: "randompuppy",
    run: async (client, message, args) => {


        randomPuppy().then(url => {

            message.channel.send(url);


        }).catch(err => message.channel.send("Hubo un error, inténtelo nuevamente."));


    }
}