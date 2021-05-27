
const Events = require('../../structures/Event')

module.exports = class MessageReactionAdd extends Events {
    constructor(client) {
        super(client, {
            name: 'messageReactionAdd'
        })
    }
    run() {
        
    }
}