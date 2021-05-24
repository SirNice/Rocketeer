const {
    Client,
    Collection
} = require('discord.js');
const {
    join
} = require('path')
const {
    readdirSync
} = require('fs')

class Miller extends Client {
    constructor(client) {
        super()

        this.client = client

        this.commands = new Collection()
        this.aliases = new Collection()

    }


    loadCommands() {
        try {
            for (const subcarpet of readdirSync(join(process.cwd() + "/src/commands/"))) {

                for (const file of readdirSync(join(process.cwd() + `/src/commands/${subcarpet}`))) {
                    if (file.endsWith(".js")) {
                        let fileContents = require(`../../commands/${subcarpet}/${file}`);
                        let fileName = fileContents.name;
                        this.commands.set(fileName, fileContents);
                    }

                }

            }
        } catch (e) {
            console.error(e)
        }

    }

    async loadEvents() {
        try {
            for (const subcarpet of readdirSync(process.cwd() + '/src/events/')) {

                for (const file of readdirSync(process.cwd() + `/src/events/${subcarpet}`)) {
                    if (file.endsWith(".js")) {
                        let eventName = file.split('.')[0]
                        let event = new (require(`../../events/${subcarpet}/${file}`))(this)
                        super.on(eventName, (...args) => event.run(this, ...args));
                        delete require.cache[require.resolve(`../../events/${subcarpet}/${file}`)];
                        
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }

    }


}

module.exports = Miller;