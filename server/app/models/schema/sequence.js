const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SequenceSchema = new Schema({
  _id: String,
  next: Number,
})

SequenceSchema.statics = {
  increment (schemaName) {
    return this.collection
      .findOneAndUpdate({ _id: schemaName }, { $inc: { next: 1 } }, { 'new': true, upsert: true })
  }
}

module.exports = SequenceSchema
