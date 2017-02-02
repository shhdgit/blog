const mongoose = require('mongoose')
const User = require('../app/models/user')

exports.auth = async function (ctx, next) {
  const _user = ctx.session.user

  if (_user) {
    const user = await User.findOne({ name: _user.name })

    if (user.name) {
      ctx.status = 200

      await next()
    } else {
      ctx.status = 401

      next()
    }
  } else {
    ctx.status = 401

    next()
  }
}
