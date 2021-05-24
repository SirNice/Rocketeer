
const GuildModel = require("../../database/models/Guild");

module.exports = class {
    constructor(client, commands, aliases){
        this.client = client;
        this.commands = commands;
        this.aliases = aliases
    }
    
    async run(client, message){
        
        const model = await GuildModel.findOne({
            guildID: message.guild.id
        });
        const prefix = model ? model.prefix : "m!";
        
        if (message.author.bot) return;
        if (message.channel.type == 'dm') return;
        if (!message.content.startsWith(prefix)) return;
        
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let command = args.shift().toLowerCase();
        
        const cmd = this.commands.get(command) || this.commands.get(this.aliases.get(command))
        
        if (!cmd) return
        cmd.run(message, args)
    }
}