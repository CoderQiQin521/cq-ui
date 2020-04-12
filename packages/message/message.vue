<template>
  <div>
    <h1 class="message">
      <div class="message-content">{{msg}}</div>
    </h1>
  </div>
</template>

<script>
export default {
  name: "cq-message",
  props: {
    msg: {
      type: String,
      default: "普通提示"
    }
  },
  created() {
    console.log("hhh");
  }
};
</script>

<style lang="less">
.message {
  display: inline-block;
  pointer-events: all;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  &-content {
    font-size: 13px;
  }
}
</style>