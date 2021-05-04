const Discord = require('discord.js');
const mongoose = require('mongoose');
let moment = new Date().toLocaleTimeString();


module.exports = (client) => {


    console.log(`[OK] ${moment} iniciated as ${client.user.tag}!`);


    setInterval(function () {
        var estados = ["Hello."]
        let estado = estados[Math.floor(estados.length * Math.random())];
        client.user.setPresence({
            status: "online",
            activity: {
                name: estado,
                type: "PLAYING", //LISTENINIG (ESCUCHANDO) //WATCHING (MIRANDO) //PLAYING (JUGANDO)
            }
        })
    }, 10000);



}