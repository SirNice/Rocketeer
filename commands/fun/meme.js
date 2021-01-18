module.exports = {
    nombre: "meme",
    alias: ['memes'],
    description: "Envía un meme",
    run: (client, message, args) => {
        const meme = require('../../utils/memes.json')

        let value = Math.floor(Math.random() * meme.length)

        message.channel.send(meme[value])

    }
}