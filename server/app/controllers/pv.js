const mongoose = require('mongoose')
const Pv = require('../models/pv')

exports.get_total = async function (ctx, next) {
  ctx.body = await Pv.get_total()

  next()
}

exports.add_total = async function (ctx, next) {
  const pv = await Pv.add_total()

  if (pv.ok) {
    ctx.body = await Pv.get_total()
  }

  next()
}
