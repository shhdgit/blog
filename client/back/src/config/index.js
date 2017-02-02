export default {
  apiURL: (process.env.NODE_ENV === 'production') ? '/api' : '/api',
  requestTimeout: 30000
}
