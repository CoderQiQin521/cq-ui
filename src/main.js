import Vue from 'vue'
import App from './App.vue'
// 单独引入
// import cqmessage from '../packages/message'
// Vue.use(cqmessage)

// 整体引入
import cqui from '../packages'
Vue.use(cqui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
