require('dotenv').config()

const Koa = require('koa')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const koaBody = require('koa-body')
const session = require('koa-session2')
const router = require('./config/routes')
const MongooseStore = require('./libs/mongoose-session')
mongoose.connect('mongodb://localhost/blog')

const port = process.env.PORT || 3000
const app = new Koa()
const sessionExpires = 1000 * 60 * 60 * 24 * 7

app
  .use(koaBody({ multipart: true }))
  .use(session({
    key: 'session_id',
    maxAge: sessionExpires,
    store: new MongooseStore({ expires: sessionExpires / 1000 }),
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => console.log(`Koa start in port: ${port}`))

module.exports = app
