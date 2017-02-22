const mongoose = require('mongoose')
const User = require('../models/user')

exports.login = async function (ctx, next) {
  const _user = ctx.request.body
  const name = _user.name
  const pwd = _user.pwd
  const user = await User.findOne({ name })

  if (user) {
    const isMatch = await user.comparePwd(pwd)

    if (isMatch) {
      ctx.session.user = {
        name: user.name
      }
      ctx.body = {
        success: 1,
        msg: 'success'
      }
    } else {
      ctx.status = 401
    }
  } else {
    ctx.status = 400
  }

  next()
}

exports.signup = async function (ctx, next) {
  // const _user = ctx.request.body
  // const name = _user.name
  // const pwd = _user.pwd
  // const user = new User({
  //   name, pwd
  // })

  // await user.save()
  // ctx.status = 200
  next()
}

exports.test = function (ctx, next) {
}

