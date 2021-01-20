const Discord = require('discord.js');

module.exports = {
  nombre: "8ball",
  alias: [],
  description: "Da una respuesta aletaria",
  run: async (client, message, args) => {

    if (!args[1]) return await message.reply("por favor ingresa una pregunta con 2 o más palabras.");

    let replies = ["Sí", "No", "Tal vez", "No sé", "¡Claro!"]

    const result = Math.floor(Math.random() * replies.length);
    const question = args.slice(1).join(" ");

    const ballembed = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setColor("RANDOM")
      .addField("Question", question)
      .addField("Answer", replies[result]);

    await message.channel.send(ballembed);
  }
}