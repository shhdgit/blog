import { base } from '../http'

export default {
  login ({ name, pwd }) {
    return base.post('/login', { name, pwd })
  },
  test () {
    return base.get('/test')
  },
}
