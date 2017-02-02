const mongoose = require('mongoose')
const SequenceSchema = require('./schema/sequence')
const Sequence = mongoose.model('Sequence', SequenceSchema)

module.exports = Sequence
