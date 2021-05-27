
const Events = require('../../structures/Event')

module.exports = class MessageDelete extends Events {
    constructor(client) {
        super(client, {
            name: 'messageDelete'
        })
    }
    run() {
        
    }
}