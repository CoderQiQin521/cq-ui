<template>
  <!-- 
    https://www.dowebok.com/188.html
  liMarquee 是一款基于 jQuery 的无缝滚动插件，类似于 HTML 的 marquee 标签，但比 marquee 更强大。它可以应用于任何 Web 元素，包括文字、图像、表格、表单等元素，同时它可以设置不同的滚动方向（左右上下）、滚动速度、鼠标悬停暂停、鼠标拖动、加载 xml 文件等等。-->
  <div>
    <!-- {{topPos}} -->
    <!-- {{leftPos}}/{{strMoveLeft}} -->
    <div
      class="dowebok str_wrap"
      ref="dowebok"
      :style="'height: '+height+'px;'"
      @mouseenter="mouseenterHandle"
      @mouseleave="mouseleaveHanlde"
    >
      <div
        class="str_move str_origin"
        ref="strmove"
        :style="{'left': leftPos +'px', 'top': topPos+ 'px'}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cq-liMarquee",
  props: {
    direction: {
      type: String,
      default: "left" // 滚动方向，可选 (left | right | up | down)
    },
    loop: {
      type: Number,
      default: -1 // 循环次数，-1 为无限循环
    },
    scrolldelay: {
      type: Number,
      default: 0 // 每次重复之前的延迟(未实现)
    },
    scrollamount: {
      type: Number,
      default: 50 // 滚动速度，越大越快
    },
    circular: {
      type: Boolean,
      default: true // 无缝滚动，如果为 false，则和 marquee 效果一样
    },
    runshort: {
      type: Boolean,
      default: true // 内容不足是否滚动
    },
    hoverstop: {
      type: Boolean,
      default: true // 鼠标悬停暂停
    },
    inverthover: {
      type: Boolean,
      default: false // 反向，即默认不滚动，鼠标悬停滚动
    }
  },
  data() {
    return {
      topPos: 0,
      leftPos: 0,
      dowebok: null,
      height: 0,
      strMoveLeft: 0,
      strMoveTop: 0,
      currentLoop: 0,
      timer: null,
      str_move_clone: null
    };
  },
  created() {},
  mounted() {
    let dowebok = this.$refs.dowebok,
      str_move = this.$refs.strmove;
    if (this.direction === "top" || this.direction === "bottom") {
      dowebok.classList.add("str_vertical");
    }
    this.$nextTick(() => {
      setTimeout(() => {
        this.strMoveLeft = str_move.clientWidth;
        this.strMoveTop = str_move.clientHeight;
      }, 30);
    });

    let str_move_clone;
    // copy
    str_move_clone = str_move.cloneNode(true);
    if (this.direction === "top" || this.direction === "bottom") {
      str_move_clone.style.top = str_move.clientHeight + "px";
    } else {
      str_move_clone.style.left = str_move.clientWidth + "px";
    }
    dowebok.append(str_move_clone);
    this.str_move_clone = str_move_clone;

    this.$nextTick(() => {
      setTimeout(() => {
        this.height = str_move.clientHeight;
        if (!this.runshort) {
          if (dowebok.clientWidth > str_move.clientWidth) return;
        }

        if (!this.inverthover) {
          this.move();
        }
      }, 40);
    });
  },
  methods: {
    move() {
      let {
        loop,
        leftPos,
        topPos,
        strMoveLeft,
        strMoveTop,
        scrollamount
      } = this;

      if (this.direction === "top" || this.direction === "bottom") {
        if (Math.abs(topPos) < strMoveTop) {
          switch (this.direction) {
            case "top":
              this.topPos -= 1;
              break;
            case "bottom":
              this.topPos += 1;
              break;
            default:
              break;
          }
        } else {
          this.topPos += strMoveTop;
        }
        this.str_move_clone.style.top = this.height + this.topPos + "px";
      } else {
        if (Math.abs(leftPos) < strMoveLeft) {
          switch (this.direction) {
            case "left":
              this.leftPos -= 1;
              break;
            case "right":
              this.leftPos += 1;
              break;
            default:
              break;
          }
        } else {
          this.leftPos += strMoveLeft;
        }
        this.str_move_clone.style.left = this.strMoveLeft + this.leftPos + "px";
      }

      // 移动总宽度 / 每次移动宽度
      this.timer = setTimeout(this.move, strMoveLeft / scrollamount);
    },
    pause() {},
    play() {},
    destroy() {},
    update() {},
    mouseenterHandle() {
      let { hoverstop, inverthover, strMoveLeft, scrollamount, timer } = this;
      if (!hoverstop) return;
      hoverstop && !inverthover ? clearTimeout(timer) : this.move();
    },
    mouseleaveHanlde() {
      let { hoverstop, inverthover, strMoveLeft, scrollamount, timer } = this;
      if (!hoverstop) return;
      hoverstop && !inverthover ? this.move() : clearTimeout(timer);
    }
  }
};
</script>

<style lang="less">
@import "./assets/css/liMarquee.less";
</style>