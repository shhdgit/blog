const mongoose = require('mongoose')
const PvSchema = require('./schema/pv')
const Pv = mongoose.model('Pv', PvSchema)

Pv.find({}).then(async function (res) {
  if (!res.length) {
    const pv = new Pv()
    await pv.save()
  }
})

module.exports = Pv
