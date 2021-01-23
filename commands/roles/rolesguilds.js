const Discord = require("discord.js");

module.exports = {
    nombre: "rolesguilds",
    alias: [],
    description: "Description",
    run: async (client, message, args) => {


        /*
Muestra la lista de roles del servidores solicitado o del actual
usando el mapeo para el listado
*/

        const guild = client.guilds.resolve(args[0]) || message.guild;
        const roles = guild.roles.cache;

        const embed = new Discord.MessageEmbed()
            .setColor(0x00AE86)
            .setDescription(
                roles.map(role => `<@&${role.id}>`)
                .join('\n')
            )
            .setFooter(`Lista de roles de: ${guild.name}`, guild.iconURL());

        message.channel.send({
            embed
        });
        //PROPUESTO POR: Fabricio-191#8051


    }
}