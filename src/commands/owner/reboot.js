module.exports = {
        nombre: "reboot",
        alias: ['restart', "reload"],
        description: "Description",
        run: async (client, message, args) => {

        if (message.author.id == "668256065174896681") {

            message.channel.send('bye.');
            
            setInterval(() => {                
                process.exit();
            }, 2000);

        }
    }
}
