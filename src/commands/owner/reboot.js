
const Commands = require('../../structures/Command');

module.exports = class Reboot extends Commands {
    constructor(client) {
        super(client, {
            name: 'reboot'
        });
    }

    async run(message) {
        if (message.author.id !== "668256065174896681") return message.channel.send('What made you think you would be able to do that?');

        message.channel.send('Reboot');
        
        setInterval(() => {                
            process.exit();
        }, 2000);
    }
};