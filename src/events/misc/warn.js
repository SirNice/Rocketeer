
const Events = require('../../structures/Event')
let moment = new Date().toLocaleTimeString();

module.exports = class Warn extends Events {
    constructor(client) {
        super(client, {
            name: 'warn'
        })
    }
    run(w) {
        console.log(`[ERROR] ${moment} Warnings \n ${w}`);        
    }
}