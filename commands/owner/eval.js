const Discord = require("discord.js");

module.exports = {
    nombre: "eval",
    alias: [''],
    description: "eval",
    run: async (client, message, args) => {

        if (message.author.id == "668256065174896681") {

            function mayuscula(string) {
                string = string.replace(/[^a-z]/gi, '')
                return string[0].toUpperCase() + string.slice(1)
            }

            let tiempo1 = Date.now()


            const edit = new Discord.MessageEmbed()
                .setDescription(":stopwatch: Evaluando...")
                .setColor("#7289DA")
            message.channel.send(edit).then(async msg => {
                try {
                    let code = args.join(" ");
                    let evalued = await eval(code);
                    let tipo = typeof evalued || "Tipo no encontrado."
                    if (typeof evalued !== 'string') evalued = require('util').inspect(evalued, {
                        depth: 0,
                        maxStringLength: 2000
                    });
                    let txt = "" + evalued;



                    const embed = new Discord.MessageEmbed()
                        // .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                        .addField("Salida", `\`\`\`js\n${txt.replace(client.token, "No quieres saber eso.")}\n\`\`\``)
                        .addField("Tipo", `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
                        .addField("Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                        .setColor("#7289DA")
                    msg.edit(embed);

                } catch (err) {
                    let code = args.join(" ")
                    const embed = new Discord.MessageEmbed()

                        // .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                        .addField("Salida", `\`\`\`js\n${err}\n\`\`\``)
                        .addField("Tipo", `\`\`\`js\nError\n\`\`\``)
                        .setColor("RED")
                    msg.edit(embed);
                }
            })
        } else {


            const nopuedes = new Discord.MessageEmbed()
                .setDescription("No puedes ejecutar este comando.")
                .setColor("RED")
            message.channel.send(nopuedes)

        }


    }
}