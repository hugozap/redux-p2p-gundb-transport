var Gun = require('gun')
var createGunTransport = require('./gun-transport')

module.exports = createGunTransport(Gun)