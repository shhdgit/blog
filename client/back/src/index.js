import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import router from 'config/routes'
import store from 'store'
import Http from 'api/http'

import App from 'components/App'

sync(store, router)
new Vue({
  ...App,
  router,
  store
}).$mount('#app')
