const Discord = require('discord.js');

module.exports = (client)  =>  {

    console.log(`[SERVERS] ${client.guilds.cache.size}.`);
    console.log(`[MEMORIA] ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`[INICIADO COMO] ${client.user.tag}!`);
    console.log("[VERSION] v1.0.2");

}