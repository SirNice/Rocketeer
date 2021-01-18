module.exports = {
    nombre: "prefix",
    alias: ['setprefix', "changeprefix"],
    description: "Cambia el prefix del bota",
    run: async (client, message, args) => {

        if (!args[1]) return await message.channel.send('The actual prefix is ' + (message.guild.cache.prefix ? message.guild.prefix : await message.guild.getPrefix()));
    if (args[2]) return await message.channel.send('I\'m not compatible with spaces, sorry.')

    const thing = await message.guild.setPrefix(args[1]);
    await message.channel.send("Now the new server prefix is " + thing);

    }
}