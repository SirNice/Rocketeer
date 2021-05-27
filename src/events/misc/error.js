
const Events = require('../../structures/Event')
let moment = new Date().toLocaleTimeString();

module.exports = class error extends Events {
    constructor(client) {
        super(client, {
            name: 'error'
        })
    }
    run() {
        console.error(`[ERROR] ${moment} \n ${error}`);
    }
}