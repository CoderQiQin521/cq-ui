import message from './message.vue'
message.install = (Vue, options) => {
  console.log('options: ', options);
  Vue.component(CqMessage.name, CqMessage)
  Vue.prototype.$message = function (options) {
    console.log('options: ', options);

  }
}

export default message