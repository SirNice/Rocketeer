const Commands = require('../../structures/Command');
const GuildModel = require('../../database/models/Guild')
const fs = require('fs')

module.exports = class SetLang extends Commands {
    constructor(client) {
        super(client, {
            name: 'setlang'
        });
    }

    async run(message, args) {

        let langs = []

        for (const file of fs.readdirSync(process.cwd() + `/src/assets/i18n/`)) {

            if (file.endsWith(".json")) {
                let name = file.substring(0, file.length - 5)
                langs.push(name)
            }
        }

        let lang = args[0]
        if (!lang || !langs.includes(args[0])) return message.channel.send('Coloca un lenguaje válido')

        let model = await GuildModel.findOne({
            id: message.guild.id
        })

        let guild = new GuildModel({
            id: message.guild.id,
            lang: lang
        })

        model ? await GuildModel.updateOne({
            id: message.guild.id
        }, {
            lang: lang
        }) : await guild.save()

        message.channel.send(`Mi nuevo prefijo ahora es ${lang}`)

    }
};