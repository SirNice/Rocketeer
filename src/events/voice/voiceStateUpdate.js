
const Events = require('../../structures/Event')

module.exports = class voiceStateUpdate extends Events {
    constructor(client) {
        super(client, {
            name: 'voiceStateUpdate'
        })
    }
    run() {
        
    }
}