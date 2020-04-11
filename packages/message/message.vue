<template>
  <div>
    <h1 class="message">消息来了</h1>
  </div>
</template>

<script>
export default {
  name: "cq-message",
  created() {
    console.log("hhh");
  }
};
</script>

<style>
.message {
  color: red;
}
</style>