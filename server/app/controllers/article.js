const mongoose = require('mongoose')
const Article = require('../models/article')
const htmlToText = require('html-to-text')

exports.get_list = async function (ctx, next) {
  const articles = await Article.find({})

  if (articles.length) {
    ctx.body = articles.map(_article => {
      const article = _article.article
      const meta = _article.meta
      const id = _article.id
      const breif = `${ htmlToText.fromString(article.content).slice(0, 60) }...`

      return {
        id: id,
        article: {
          title: article.title,
          content: breif,
        },
        created_at: meta.created_at,
        update_at: meta.update_at,
      }
    })
  } else {
    ctx.body = []
  }

  next()
}

exports.get = async function (ctx, next) {
  const _id = ctx.params.id
  const _article = await Article.findOne({ id: _id })
  const article = _article.article
  const edit = _article.edit
  const meta = _article.meta
  const id = _article.id_article

  if (article) {
    ctx.body = {
      id,
      article,
      edit,
      created_at: meta.created_at,
      update_at: meta.update_at,
    }
  } else {
    ctx.status = 400
  }

  next()
}

exports.save = async function (ctx, next) {
  const _article = ctx.request.body
  const title = _article.title
  const content = _article.content
  const editContent = _article.edit.content

  const article = new Article({
    article: {
      title,
      content,
    },
    edit: {
      content: editContent
    },
  })

  await article.save()
  ctx.body = 'ok'

  next()
}

exports.update = async function (ctx, next) {
  const _article = ctx.request.body
  const _id = ctx.params.id
  const title = _article.title
  const content = _article.content
  const editContent = _article.edit.content

  if (_id) {
    const article = await Article.findOneAndUpdate({ id: _id }, {
      article: { title, content },
      edit: { content: editContent }
    })

    ctx.body = article
  }

  next()
}

exports.del = async function (ctx, next) {
  const _ids = ctx.request.query.ids

  if (Array.isArray(_ids) && _ids.length) {
    let tmp = {}
    const ids = _ids.filter(id => {
      if (tmp[id]) {
        return false
      } else {
        tmp[id] = 1
        return true
      }
    })
    const idsIterator = ids.entries()

    for (let id of idsIterator) {
      const _id = id[1]

      await Article.findOneAndRemove({ id: _id })
      console.log(_id)
    }
  } else {
    await Article.findOneAndRemove({ id: _ids })
  }

  await next()
}
