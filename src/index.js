
const dotenv = require('dotenv').config();

const Discord = require('discord.js');
const fs = require('fs');

// ==== =============== ==== //
const client = new Discord.Client();
let moment = new Date().toLocaleTimeString();


client.commands = new Discord.Collection()
client.commands = new Discord.Collection()


// ======= COMMANDS ======= //
for (const subcarpet of fs.readdirSync(__dirname + "/commands/")) {

  for (const file of fs.readdirSync(__dirname + `/commands/${subcarpet}`)) {

    if (file.endsWith(".js")) {
      let fileContents = require(`./commands/${subcarpet}/${file}`);
      let fileName = fileContents.name;
      client.commands.set(fileName, fileContents);
    }

  }

}

// ======== EVENTOS ======== //

for (const subcarpet of fs.readdirSync(__dirname + '/events/')) {

  for (const file of fs.readdirSync(__dirname + `/events/${subcarpet}`)) {
    if (file.endsWith(".js")) {
      let fileName = file.substring(0, file.length - 3);
      let fileContents = require(`./events/${subcarpet}/${file}`);
      client.on(fileName, fileContents.bind(null, client));
      delete require.cache[require.resolve(`./events/${subcarpet}/${file}`)];
    }
  }
}


// ==== =============== ==== //
require('./database/connect')();
require('./server')();
require('happy-developer')()
client.login(process.env.DISCORD_TOKEN).catch(e => {
  console.error(`[ERROR] ${moment} TOKEN IVALID`)
  process.exit()
})