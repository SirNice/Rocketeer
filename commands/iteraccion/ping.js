module.exports = {
    nombre: "ping",
    alias: ['p'],
    description: "Prueba",
    run: (client, message, args) => {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(`Soy yo, me necesitas?, ${ping}ms :satellite: `);
    }
}