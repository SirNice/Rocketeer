let moment = new Date().toLocaleTimeString();
require('dotenv').config()
const path = require('path')

const { ShardingManager } = require('discord.js')

// ==== =============== ==== //
require('./database/connect');
require('./server')
require('happy-developer')()

const shards = new ShardingManager(path.join(__dirname, 'bot.js'),{
  token: process.env.BOT_TOKEN
})

shards.spawn()
