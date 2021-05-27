
const Events = require('../../structures/Event')

module.exports = class MessageReactionRemove extends Events {
    constructor(client) {
        super(client, {
            name: 'messageReactionRemove'
        })
    }
    run() {
        
    }
}