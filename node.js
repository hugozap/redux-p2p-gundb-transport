var process = require('process')
process.env.GUN_ENV = 'production'
var Gun = require('gun')
var createGunTransport = require('./gun-transport')


module.exports = createGunTransport(Gun)