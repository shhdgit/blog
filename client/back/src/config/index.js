export default {
  apiURL: (process.env.NODE_ENV === 'production') ? 'http://rollaround.cn:3000' : '/api',
  requestTimeout: 30000
}
