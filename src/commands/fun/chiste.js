const Discord = require("discord.js");
const superagent = require('superagent')

module.exports = {
    nombre: "chiste",
    alias: [],
    description: "Description",
    run: async (client, message, args) => {


        superagent.get("https://risapi.glitch.me/").end((err, res) => {
            let body = res.body;

            message.channel.send(body.chiste)
        })

    }
}