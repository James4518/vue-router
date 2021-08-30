import Vue from 'vue'
import app from './vue/app.vue'
import router from './index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})

