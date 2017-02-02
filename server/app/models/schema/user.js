const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
  name: {
    unique: true,
    type: String,
  },
  pwd: String,
  meta: {
    created_at: {
      type: Date,
      default: Date.now(),
    },
    update_at: {
      type: Date,
      default: Date.now(),
    },
  },
})

UserSchema.pre('save', async function (next) {
  let user = this
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
  const hash = await bcrypt.hash(user.pwd, salt)

  user.pwd = hash
  next()
})
UserSchema.pre('save', function (next) {
  this.meta.update_at = Date.now()

  next()
})

UserSchema.methods = {
  comparePwd (_pwd) {
    return bcrypt.compare(_pwd, this.pwd)
  }
}

module.exports = UserSchema
