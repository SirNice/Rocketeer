const childProcess = require('child_process');

module.exports = {
    name: "exec",
    aliases: [],
    description: "Description",
    run: async (client, message, args, data, errors) => {

        if (message.author.id !== "668256065174896681") return message.channel.send('What made you think you would be able to do that?');

        childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });

    }
}