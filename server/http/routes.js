const Router = require('koa-router')

const router = new Router()

// index
router.get('/', (ctx, next) => {
  ctx.body = '123'
})

module.exports = router
