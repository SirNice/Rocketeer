
const Events = require('../../structures/Event')

module.exports = class InviteCreate extends Events {
    constructor(client) {
        super(client, {
            name: 'inviteCreate'
        })
    }
    run() {
        
    }
}