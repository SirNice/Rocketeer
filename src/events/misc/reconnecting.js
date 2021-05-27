const Events = require('../../structures/Event')
let moment = new Date().toLocaleTimeString();

module.exports = class reconnecting extends Events {
    constructor(client) {
        super(client, {
            name: 'reconnecting'
        })
    }
    run() {
        console.log(`[INFO] ${moment} Reconnecting `);
        
    }
}