require('dotenv').config()
new (require('./managers/Client'))()

require('./database/connect');
require('./server')
require('happy-developer')()