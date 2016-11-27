const Router = require('koa-router')

const router = new Router()

// index
router.get('/', (ctx, next) => {
  ctx.body = '3211'
})

module.exports = router
