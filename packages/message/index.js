import message from './message.vue'
message.install = (Vue) => {
  Vue.component(CqMessage.name, CqMessage)
}

export default message