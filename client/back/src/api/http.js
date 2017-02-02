import Vue from 'vue'
import httpPlugin from 'plugins/http'
import config from 'config'

Vue.use(httpPlugin, {
  requestTimeout: config.requestTimeout
})
const Http = Vue.Http

export const base = Http.create({
  baseURL: `${config.apiURL}`
})
export default Http
