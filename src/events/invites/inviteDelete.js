
const Events = require('../../structures/Event')

module.exports = class InviteDelete extends Events {
    constructor(client) {
        super(client, {
            name: 'inviteDelete'
        })
    }
    run() {
        
    }
}