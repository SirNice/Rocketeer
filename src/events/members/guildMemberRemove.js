
const Events = require('../../structures/Event')

module.exports = class GuildMemberRemove extends Events {
    constructor(client) {
        super(client, {
            name: 'guildMemberRemove'
        })
    }
    run() {
        
    }
}