const mongoose = require('mongoose')
const User = require('../models/user')

exports.login = async function (ctx, next) {
  // const _user = ctx.request.body
  // const name = _user.name
  // const pwd = _user.pwd
  // const user = await User.findOne({ name })

  // if (user) {
  //   const isMatch = await user.comparePwd(pwd)

  //   if (isMatch) {
  //     ctx.session.user = {
  //       name: user.name
  //     }
  //     ctx.body = {
  //       success: 1,
  //       msg: 'success'
  //     }
  //   } else {
  //     ctx.status = 401
  //   }
  // } else {
  //   ctx.status = 400
  // }
  ctx.body = ctx.request

  next()
}

exports.test = function (ctx, next) {
  ctx.body = ctx.request
  console.log(ctx.cookies.get('session_id'))
}

