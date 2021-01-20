module.exports = {
    nombre: "ping",
    alias: ['latencia'],
    description: "Prueba",
    run: async (client, message, args) => {
        let ping = Math.floor(message.client.ws.ping);
        await message.channel.send(`¡Hey! ${ping}ms :satellite: `);
    }
}