
module.exports = class{
    constructor(client){
        this.client = client;
    }

    async run(){

    }
}

const Events = require('../../structures/Event')

module.exports = class MessageReactionRemoveAll extends Events {
    constructor(client) {
        super(client, {
            name: 'messageReactionRemoveAll'
        })
    }
    run() {
        
    }
}