<template>
  <div class="alert" :class="`alert-${type}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cq-alert",
  props: {
    type: {
      type: String,
      default: "info"
    }
  }
};
</script>

<style lang="less">
.alert {
  position: relative;
  padding: 8px 48px 8px 16px;
  border-radius: 4px;
  color: #515a6e;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
}
.alert-info {
  border: 1px solid #abdcff;
  background-color: #f0faff;
}
</style>