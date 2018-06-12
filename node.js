var Gun = require('gun')
var createGunTransport = require('./gun-transport')
var process = require('process')
process.env.GUN_ENV = 'production'

module.exports = createGunTransport(Gun)