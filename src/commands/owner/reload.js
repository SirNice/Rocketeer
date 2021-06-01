
const Commands = require('../../structures/Command');

module.exports = class Reload extends Commands {
    constructor(client) {
        super(client, {
            name: 'reload',
            devsOnly: true
        });
    }

    async run(message, args) {

        console.log('Debes de hacer el comando Reload.')

    }
};