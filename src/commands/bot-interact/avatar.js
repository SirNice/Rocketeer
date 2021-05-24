const Command = require('../../assets/class/Command')

class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            description: "show avatar of user on mencion",
            usage: "ping",
            aliases: ['av']
        })
    }

    async run(message, args){
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
                `Tu avatar ${member.displayName}` :
                `Avatar de ${member.displayName}`
            );

        await message.channel.send(embed);
    }
}
