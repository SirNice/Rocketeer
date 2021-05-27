const childProcess = require('child_process');

const Commands = require('../../structures/Command');

module.exports = class Exec extends Commands {
    constructor(client) {
        super(client, {
            name: 'exec'
        });
    }
    
    async run(message) {
        if (message.author.id !== "668256065174896681") return message.channel.send('What made you think you would be able to do that?');
        
        childProcess.exec(args.join(' '), {},
        (err, stdout) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
        
    }
};