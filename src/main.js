import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue 在启动时是否生成生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
