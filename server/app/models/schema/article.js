const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Sequence = require('../sequence')

const ArticleSchema = new Schema({
  id: Number,
  article: {
    title: String,
    content: String,
  },
  edit: {
    content: String,
  },
  meta: {
    created_at: {
      type: Date,
      default: Date.now(),
    },
    update_at: {
      type: Date,
      default: Date.now(),
    },
  },
})

ArticleSchema.pre('save', async function (next) {
  if (this.isNew) {
    let id = await Sequence.increment('Article')

    this.id = id.value.next

    next()
  } else {
    next()
  }
})
ArticleSchema.pre('save', function (next) {
  this.meta.update_at = Date.now()

  next()
})

module.exports = ArticleSchema
