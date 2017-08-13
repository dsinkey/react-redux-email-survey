// key.js - figure what credentials to return
if (process.env.NODE_ENV === 'production') {
    // return the production keys
    module.exports = require('./prod');
} else {
    // we are in the developement - return the dev keys
    module.exports = require('./dev');
}
