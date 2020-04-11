import alert from './alert.vue'

alert.install = (Vue) => {
  Vue.component(alert.name, alert)
}

export default alert