const Discord = require('discord.js')
const Commands = require('../../structures/Command');

module.exports = class Avatar extends Commands {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['av']
        });
    }

    async run(message, args, lang) { 
        let member =
        (await message.mentions.members.first()) ||
        message.guild.members.resolve(args[0]) ||
        message.member;

    const embed = new Discord.MessageEmbed()
        .setTitle("Avatar")
        .setImage(
            member.user.displayAvatarURL({
                dynamic: true,
                size: 1024,
            })
        )
        .setColor(member.displayHexColor)
        .setFooter(
            member.id === message.member.id ?
            `${lang.botinteract.avatar.footer} ${member.displayName}` :
            `${lang.botinteract.avatar.footer2} ${member.displayName}`
        );

    await message.channel.send(embed);
    }
};