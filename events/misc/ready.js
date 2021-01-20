const Discord = require('discord.js');
const informacion = require('../../package.json')

module.exports = (client)  =>  {

    console.log(`[SERVERS] ${client.guilds.cache.size}.`);
    console.log(`[USER] ${client.users.cache.size}`);
    console.log(`[MEMORIA] ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`[INICIADO COMO] ${client.user.tag}!`);
    console.log(`[VERSION] ${informacion.version}`);

}