import alert from './alert'
import message from './message'

const components = [
  alert,
  message
]

const install = (Vue) => {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  // 直接引入文件
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}

export default {
  install,
  alert
}