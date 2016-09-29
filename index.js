require('dotenv').config({ silent: true });
global.promise = require('bluebird');
require('./lib/server.js');
