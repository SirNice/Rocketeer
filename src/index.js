// ===== SERVIDOR ===== //
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
); 

// ==== REQUIRIMIENTOS ===== //

const dotenv = require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');

// ==== =============== ==== //
const client = new Discord.Client();
const queue = new Map();

module.exports = { queue: queue }

let comandosHandler = 0;
let eventosHandler = 0;


client.comandos = new Discord.Collection()
client.eventos = new Discord.Collection()


// ======= COMANDOS ======= //
for(const subcarpet of fs.readdirSync(__dirname + "/commands/")){ 

    for(const file of fs.readdirSync(__dirname +`/commands/${subcarpet}`)){

        if(file.endsWith(".js")){
            let fileContents = require(`./commands/${subcarpet}/${file}`);
            let fileName = fileContents.nombre;
            client.comandos.set(fileName, fileContents);
            comandosHandler++
        }
        
    }

}

// ======== EVENTOS ======== //

for(const subcarpet of fs.readdirSync( __dirname + '/events/')){

    for(const file of fs.readdirSync(__dirname + `/events/${subcarpet}`)){
        if(file.endsWith(".js")){
            let fileName = file.substring(0, file.length - 3);
            let fileContents = require(`./events/${subcarpet}/${file}`);
            client.on(fileName, fileContents.bind(null, client));
            delete require.cache[require.resolve(`./events/${subcarpet}/${file}`)];
            eventosHandler++
        } 
    }
}
// ==== =============== ==== //

console.log(`Se han cargado ${comandosHandler} comandos, y ${eventosHandler} eventos.`);


// ==== =============== ==== //
let db = require('./database/connect')
db()

client.login(process.env.DISCORD_TOKEN);