const app = require('express')();
let moment = new Date().toLocaleTimeString();

app.get('/', (req, res) => res.send('Server is up.'));

function server() {
  app.listen(3000)
  console.log(`[SERVER] ${moment} Listen on port`, 3000)
}

module.exports = server()