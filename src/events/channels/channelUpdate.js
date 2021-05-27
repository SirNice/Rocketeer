
const Events = require('../../structures/Event')

module.exports = class ChannelUpdate extends Events {
    constructor(client) {
        super(client, {
            name: 'channelUpdate'
        })
    }
    run() {
        
    }
}