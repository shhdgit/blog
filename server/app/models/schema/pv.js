const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PvSchema = new Schema({
  total: {
    type: Number,
    default: 0,
  },
})

PvSchema.statics = {
  async get_total () {
    const pv = await this.find({})

    return pv[0].total
  },
  async add_total () {
    const pv = await this.find({})

    return pv[0].update({ $inc: { total: 1 } })
  }
}

module.exports = PvSchema
