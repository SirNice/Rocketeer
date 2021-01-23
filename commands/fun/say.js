const {
    Util
} = require('discord.js');


module.exports = {
    nombre: "say",
    alias: ['decir'],
    description: "repite un mensaje",
    run: async (client, message, args) => {

        /*
 Codigo por DangerousZone <3
*/
        if (!args) return message.reply("no tengo nada que decir."); 

        let mensaje = args.join(" ");

        for (let i = 0; mensaje.includes("@here") || mensaje.includes("@everyone"); i++) {
            mensaje = mensaje.replace(/@here/g, "here");
            mensaje = mensaje.replace(/@everyone/g, "everyone");
        }

        message.channel.send(Util.cleanContent(mensaje, message)).catch(e => e);

    }
}