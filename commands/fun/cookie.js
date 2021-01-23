const Discord = require("discord.js");

module.exports = {
    nombre: "cookie",
    alias: [],
    description: "Regalale una galleta a un usuario mencionandolo.",
    run: async (client, message, args) => {


        let user = message.mentions.users.first();
        // let reas = args.split(' ').slice(1).join(' ');

        if (!user) return message.channel.send('Mencione a un usuario.');

    
        message.channel.send(`**${user.username},** tienes una :cookie: de **${message.author.username}**

(づ｡◕‿‿◕｡)づ:･ﾟ✧ :cookie:`);


    }
}