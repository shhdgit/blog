const mongoose = require('mongoose')
const ArticleSchema = require('./schema/article')
const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
