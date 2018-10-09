'use strict'

var createHash = require('create-hash')
var bs58checkBase = require('./base')
var groestlhash = require('groestl-hash-js')

// SHA256(SHA256(buffer))
function groestl (buffer) {
  return Buffer.from(Module.ccall('GroestlCoinHash', 'string', ['string'], [buffer.toString("hex")]), "hex");
}

module.exports = bs58checkBase(groestl)
