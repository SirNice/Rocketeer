const childProcess = require('child_process');

const Commands = require('../../structures/Command');

module.exports = class Exec extends Commands {
    constructor(client) {
        super(client, {
            name: 'exec',
            devsOnly: true
        });
    }
    
    async run(message, args) {
        
        childProcess.exec(args.join(' '), {},
        (err, stdout) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
        
    }
};