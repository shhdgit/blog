const Router = require('koa-router')

const router = new Router()

// index
router.get('/', (ctx, next) => {
  ctx.body = '456'
})

module.exports = router
