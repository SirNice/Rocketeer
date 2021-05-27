
const Events = require('../../structures/Event')
let moment = new Date().toLocaleTimeString();

module.exports = class invalidated extends Events {
    constructor(client) {
        super(client, {
            name: 'invalidated'
        })
    }
    run() {
        this.client.destroy();
        console.log(`[ERROR] ${moment} The session is invalid`);
        process.exit();
        
    }
}