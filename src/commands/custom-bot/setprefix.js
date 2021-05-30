const Commands = require('../../structures/Command');
const GuildModel = require('../../database/models/Guild')

module.exports = class SetPrefix extends Commands {
    constructor(client) {
        super(client, {
            name: 'setprefix'
        });
    }

    async run(message, args) {

        let newPrefix = args[0];

        if (!newPrefix) return message.channel.send('Coloca el nuevo prefijo')

        let modelo = await GuildModel.findOne({
            id: message.guild.id
        })

        let dt = new GuildModel({
            id: message.guild.id,
            prefix: newPrefix
        })

        modelo ? await GuildModel.updateOne({
            id: message.guild.id
        }, {
            prefix: newPrefix
        }) : await dt.save()

        message.channel.send(`Mi nuevo prefijo ahora es ${newPrefix}`)

    }
};