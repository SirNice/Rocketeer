let moment = new Date().toLocaleTimeString();
const Miller = new (require('./assets/class/Client'))


Miller.loadCommands()
Miller.loadEvents()


// ==== =============== ==== //
require('./database/connect');
require('./server')
require('happy-developer')()

Miller.login(process.env.DISCORD_TOKEN).catch(e => {
  console.error(`[ERROR] ${moment}  ${e}`)
  process.exit()
})