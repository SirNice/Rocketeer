
const Events = require('../../structures/Event')

module.exports = class messageUpdate extends Events {
    constructor(client) {
        super(client, {
            name: 'messageUpdate'
        })
    }
    run() {
        
    }
}