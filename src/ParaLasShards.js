require('dotenv').config()
const path = require('path')

const { ShardingManager } = require('discord.js')

// ==== =============== ==== //

const shards = new ShardingManager(path.join(__dirname, 'bot.js'),{
  token: process.env.BOT_TOKEN
})

shards.spawn()
