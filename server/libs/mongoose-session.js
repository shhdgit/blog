const mongoose = require('mongoose')
const Store = require('koa-session2/libs/store')

class MongooseStore extends Store {
  constructor ({ connection = mongoose, model = 'SessionStore', expires = 60 * 60 * 24 * 7 } = {}) {
    super()

    const Schema = connection.Schema
    const SessionSchema = new Schema({
      sid: {
        index: true,
        type: String,
      },
      session: Object,
      updatedAt: {
        type: Date,
        default: Date.now(),
        expires,
      },
    })

    this.Session = connection.model(model, SessionSchema)
  }

  async get (sid) {
    const data = await this.Session.findOne({ sid })

    if (!data || !data.sid) return null


    return data.session
  }

  async set(session, opts) {
    if(!opts.sid) {
      opts.sid = this.getID(24)
    }

    const data = {
      sid: opts.sid,
      session,
      updatedAt: Date.now()
    }

    await this.Session.findOneAndUpdate({ sid: opts.sid }, data, { upsert: true })

    return opts.sid
  }

  async destroy (sid) {
    await this.Session.remove({ sid: sid })
  }
}

module.exports = MongooseStore
