function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
const Commands = require('../../structures/Command');

module.exports = class Eval extends Commands {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['e'],
            devsOnly: true
        });
    }

    async run(message, args) {

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
};