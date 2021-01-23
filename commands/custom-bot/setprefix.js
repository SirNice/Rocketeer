const Discord = require("discord.js");
const GuildModel = require("../../database/models/prefix_db");

module.exports = {
    nombre: "setprefix",
    alias: ['changeprefix'],
    description: "cambia el prefix del servidor",
    run: async (client, message, args) => {


        let nuevoprefijo = args[0];
        //ahora ponemos condicionales con if(condicion)
        //--------------//
        //por si no escribe el nuevo prefijo
        if (!nuevoprefijo) return message.channel.send('Coloca el nuevo prefijo.')
        //ahora buscamos un modelo con la id del servidor
        let modelo = await GuildModel.findOne({
            id: message.guild.id
        })
        //esta variable por si no si no encuentra uno 
        let dt = new GuildModel({
            id: message.guild.id,
            prefix: nuevoprefijo
        })
        //en esta linea si encuentra un modelo con la id del guild, pues lo actualizamos, y si no tiene llama a la variable dt y la guarda.
        modelo ? await GuildModel.updateOne({
            id: message.guild.id
        }, {
            prefix: nuevoprefijo
        }) : await dt.save()
        //y mandamos un mensaje de confirmacion
        message.channel.send(`Mi nuevo prefijo ahora es ${nuevoprefijo}`)


    }
}