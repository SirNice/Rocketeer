
const Commands = require('../../structures/Command');

module.exports = class Reboot extends Commands {
    constructor(client) {
        super(client, {
            name: 'reboot',
            devsOnly: true
        });
    }

    async run(message) {
        message.channel.send('Reboot');
        
        setInterval(() => {                
            process.exit();
        }, 2000);
    }
};