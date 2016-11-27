require('dotenv').config()

const Koa = require('koa')
const router = require('./http/routes')

const port = process.env.PORT || 3000
const app = new Koa()

app.use(router.routes())

app.listen(port)

module.exports = app
