const Discord = require("discord.js");
const got = require('got');

module.exports = {
    nombre: "dograndom",
    alias: ['dog'],
    description: "Mostrar imagenes random",
    run: async (client, message, args) => {

    
        got('https://random.dog/woof.json').then(res =>  {

        var coso = JSON.parse(res.body).url

            const doogg = new Discord.MessageEmbed()
            .setImage(coso)
            .setColor("RANDOM")

            message.channel.send(doogg);

        });
    

    }
}