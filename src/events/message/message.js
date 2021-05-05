
const GuildModel = require("../../database/models/Guild");

module.exports = async (client, message) => {

    const model = await GuildModel.findOne({
        guildID: message.guild.id
    });
    const prefix = model ? model.prefix : "m!";

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    let cmd = client.commands.get(command) || client.commands.find((c) => c.aliases.includes(command));

    if (cmd) {
        return cmd.run(client, message, args)
    }


}