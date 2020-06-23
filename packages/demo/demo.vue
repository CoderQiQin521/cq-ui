<template>
  <div>
    <button class="cq-btn primary" @click="fetch">请求网络图片</button>
    <br />
    <br />
    <transition name="fade">
      <div v-show="flag">
        <img :src="src" alt />
        <message :msg="msg"></message>
      </div>
    </transition>
  </div>
</template>

<script>
import message from "../message";
import axios from "axios";
export default {
  name: "demo",
  props: {
    time: Number,
    msg: {
      type: String,
      default: "图片请求成功"
    }
  },
  data() {
    return {
      flag: false,
      src: ""
    };
  },
  components: {
    message
  },
  methods: {
    async fetch() {
      console.log("假如这是一个复杂的业务组件,(飞冰称为区块), 或一个页面");

      let { data } = await axios.get(
        "https://www.fastmock.site/mock/de8258e7b013fd4589f4d7ed66c78b75/testmock/flutter"
      );
      this.flag = true;
      this.src = data.src;
      setTimeout(() => {
        this.flag = false;
      }, this.time || 1500);
    }
  }
};
</script>

<style lang="less" scoped>
img {
  max-width: 100%;
}
.cq-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  &:hover {
    color: #fff;
    background-color: #57a3f3;
    border-color: #57a3f3;
  }
  &.primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>