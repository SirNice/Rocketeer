const Discord = require("discord.js");

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports = {
    name: "eval",
    aliases: [],
    description: "eval",
    run: async (client, message, args) => {
        
        if (message.author.id !== '668256065174896681') return message.channel.send('What made you think you would be able to do that?');
        args = args.join(" ");
        try {
            var evaled = eval(args);
            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);
            message.channel.send(`\`\`\`xl\n${clean(evaled)}\n\`\`\``);
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }

    }
}