'use strict'

var createHash = require('create-hash')
var bs58checkBase = require('./base')
var groestlhash = require('groestl-hash-js')

// GROESTL512(GROESTL512(buffer))
function groestl (buffer) {
  return Buffer.from(Module.ccall('GroestlCoinHash', 'string', ['string'], [buffer.toString("hex")]), "hex");
}

module.exports = bs58checkBase(groestl)
