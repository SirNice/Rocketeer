
const Events = require('../../structures/Event')

module.exports = class ChannelDelete extends Events {
    constructor(client) {
        super(client, {
            name: 'channelDelete'
        })
    }
    run() {
        
    }
}