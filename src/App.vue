<template>
  <div id="app">
    <div>一个业务组件</div>
    <br />
    <!-- 业务组件接受的参数 -->
    <demo :time="1500" :msg="'success'"></demo>
    <!-- <cq-liMarquee
      class="dowebok"
      :direction="'left'"
      :scrollamount="240"
      :hoverstop="true"
      :inverthover="false"
      :circular="true"
      :runshort="false"
    >
      <a href="javascript:">Smoothslides – 可平移的jQuery幻灯片插件</a>
      <a href="javascript:">jQuery全屏滚动插件fullPage.js</a>
      <a href="javascript:">WOWWOWWOWWOW.js – 让页面滚动更有趣</a>
      <a href="javascript:">让IE7 IE8支持CSS3 background-size属性</a>
      <a href="javascript:">shCircleLoader – jQuery Loading效果插件</a>
    </cq-liMarquee>
    <cq-liMarquee class="dowebok" :scrollamount="50" :direction="'left'">
      <img src="./assets/1.jpg" alt />
      <img src="./assets/2.jpg" alt />
      <img src="./assets/3.jpg" alt />
      <img src="./assets/4.jpg" alt />
      <img src="./assets/5.jpg" alt />
      <img src="./assets/6.jpg" alt />
      <img src="./assets/7.jpg" alt />
    </cq-liMarquee>
    <cq-liMarquee class="dowebok-y" :direction="'top'" :scrollamount="340" :circular="false">
      <ul>
        <li>
          <a href="javascript:">Smoothslides – 可平移的jQuery幻灯片插件</a>
        </li>
        <li>
          <a href="javascript:">jQuery全屏滚动插件fullPage.js</a>
        </li>
        <li>
          <a href="javascript:">WOWWOWWOWWOW.js – 让页面滚动更有趣</a>
        </li>
        <li>
          <a href="javascript:">让IE7 IE8支持CSS3 background-size属性</a>
        </li>
        <li>
          <a href="javascript:">shCircleLoader – jQuery Loading效果插件</a>
        </li>
        <li>
          <a href="javascript:">Smoothslides – 可平移的jQuery幻灯片插件</a>
        </li>
        <li>
          <a href="javascript:">jQuery全屏滚动插件fullPage.js</a>
        </li>
        <li>
          <a href="javascript:">WOWWOWWOWWOW.js – 让页面滚动更有趣</a>
        </li>
        <li>
          <a href="javascript:">让IE7 IE8支持CSS3 background-size属性</a>
        </li>
        <li>
          <a href="javascript:">shCircleLoader – jQuery Loading效果插件</a>
        </li>
        <li>
          <a href="javascript:">Smoothslides – 可平移的jQuery幻灯片插件</a>
        </li>
        <li>
          <a href="javascript:">jQuery全屏滚动插件fullPage.js</a>
        </li>
        <li>
          <a href="javascript:">WOWWOWWOWWOW.js – 让页面滚动更有趣</a>
        </li>
        <li>
          <a href="javascript:">让IE7 IE8支持CSS3 background-size属性</a>
        </li>
        <li>
          <a href="javascript:">shCircleLoader – jQuery Loading效果插件</a>
        </li>
      </ul>
    </cq-liMarquee>-->

    <!-- <cq-message :msg="'一条普通提示'"></cq-message>
    <cq-alert>hahah</cq-alert>-->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    this.$message();
  }
};
</script>

<style lang="less">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.dowebok {
  width: 800px;
  margin: 100px auto;
  font-size: 14px;
  background-color: #f6f6f6;
  a {
    margin: 0 15px;
    color: #555;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
.dowebok-y {
  width: 790px;
  height: 200px;
  margin: 100px auto;
  font-size: 14px;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
