module.exports = {
        name: "reboot",
        aliases: ['restart', "reload"],
        description: "Description",
        run: async (client, message, args) => {

            if (message.author.id !== "668256065174896681") return message.channel.send('What made you think you would be able to do that?');

            message.channel.send('Reboot');
            
            setInterval(() => {                
                process.exit();
            }, 2000);

        
    }
}
