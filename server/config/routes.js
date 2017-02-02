const Router = require('koa-router')

const router = new Router()
const User = require('../app/controllers/user')
const Article = require('../app/controllers/article')

const AuthMiddleware = require('../middleware/authorize')

// login
router
  .post('/login', User.login)
  .get('/test', User.test)

// article
  .get('/article', AuthMiddleware.auth, Article.get_list)
  .post('/article', AuthMiddleware.auth, Article.save)
  .get('/article/:id', AuthMiddleware.auth, Article.get)
  .post('/article/:id', AuthMiddleware.auth, Article.update)
  .del('/article', AuthMiddleware.auth, Article.del, Article.get_list)

module.exports = router
