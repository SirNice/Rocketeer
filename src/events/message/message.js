const GuildModel = require('../../database/models/Guild')
const Events = require('../../structures/Event')

module.exports = class Message extends Events {
    constructor(client) {
        super(client, {
            name: 'message'
        })
    }

    async run(message) {
        if(message.channel.type === "dm") return;

        let prefix = 'm!';
        const model = await GuildModel.findOne({
            id: message.guild.id
        });
        if (model && model.prefix) prefix = model.prefix;

        if (!message.author) return;

        const prefixes = [prefix, `<@${this.client.user.id}>`, `<@!${this.client.user.id}>`];

        const usedPrefix = prefixes.find((p) => message.content.startsWith(p));
        if (!usedPrefix || message.author.bot) return;
        if (usedPrefix !== prefix) message.mentions.users.delete(message.mentions.users.first().id);

        const args = message.content.slice(usedPrefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        let lang = require('../../assets/i18n/en.json')

        if(model && model.lang){
            if(model.lang == "es"){
                lang = require('../../assets/i18n/es.json')
            } else if (model.lang == "en"){
                lang = require('../../assets/i18n/en.json')
            } 
        }

        const cmd = this.client.commands.find(c => c.name === command || c.aliases.includes(command));

        if (!cmd) return;
        try {
            if(!(await cmd.canRun(message))) return;
            cmd.run(message, args, lang);
        } catch (e) {
            console.log(e.stack || e);
            message.channel.send(`Un error a ocurrido: ${e.message || e}`);
        }

    }
}