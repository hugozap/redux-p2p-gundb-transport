var createGunTransport = require('./gun-transport')
var gun = require('gun/gun')

module.exports = createGunTransport(gun)