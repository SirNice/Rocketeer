
const Events = require('../../structures/Event')

module.exports = class GuildMemberAdd extends Events {
    constructor(client) {
        super(client, {
            name: 'guildMemberAdd'
        })
    }
    run() {
        
    }
}