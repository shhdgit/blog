const Router = require('koa-router')

const router = new Router()
const User = require('../app/controllers/user')
const Article = require('../app/controllers/article')
const Pv = require('../app/controllers/pv')

const AuthMiddleware = require('../middleware/authorize')

// login
router
  .post('/login', User.login)
  .get('/test', User.test)
  // .post('/signup', User.signup)

// article
  .get('/article', AuthMiddleware.auth, Article.get_list)
  .post('/article', AuthMiddleware.auth, Article.save)
  .get('/article/:id', AuthMiddleware.auth, Article.get)
  .post('/article/:id', AuthMiddleware.auth, Article.update)
  .del('/article', AuthMiddleware.auth, Article.del, Article.get_list)

// api
// article
  .get('/api/article', Article.get_list)
  .get('/api/article/:id', Article.get)
  .get('/api/pv', Pv.get_total)

module.exports = router
