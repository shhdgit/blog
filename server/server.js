require('dotenv').config()

const Koa = require('koa')
const router = require('./http/routes')
const serve = require('koa-static')
const path = require('path')

const port = process.env.PORT || 3000
const app = new Koa()

app.use(serve(path.resolve(process.cwd(), '../client/front')))
app.use(router.routes())

app.listen(port)

module.exports = app
