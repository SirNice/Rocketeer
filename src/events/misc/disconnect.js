
const Events = require('../../structures/Event')
let moment = new Date().toLocaleTimeString();

module.exports = class disconnected extends Events {
    constructor(client) {
        super(client, {
            name: 'disconnected'
        })
    }
    run() {
        console.info(`[INFO] ${moment} You have been disconnected`);
    }
}