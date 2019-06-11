<template>
  <!-- 外部的transition用于组件延缓消失，消失时也执行动画 -->
  <transition name="popup">
    <div class="popup" @click.stop="tooglePopup" v-show="show">
      <transition name="main">
        <div class="popup-wrapper" :style="{width,maxHeight}" @click.stop v-show="show">
          <i class="el-icon-circle-close" @click.stop="tooglePopup"></i>
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    },
    width: {
      type: String,
      default: "50%"
    },
    maxHeight: {
      type: String,
      default: "88%"
    }
  },

  watch: {
    // 当显示时，点击Esc键，当前弹窗消失
    show() {
      if (this.show)
        window.onkeydown = r => {
          r.key === "Escape" && this.$emit("close");
        };
      else window.onkeydown = null;
    }
  },

  methods: {
    tooglePopup() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.48);
  text-align: center;

  .popup-wrapper {
    position: relative;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    overflow: hidden;
    border: 1px solid #ebeef5;
    background: #fff;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;

    // /* 设置滚动条的样式 */
    // &::-webkit-scrollbar {
    // width: 7px;
    // background-color: #ffffff;
    // }

    // /* 滚动条滑块 */
    // &::-webkit-scrollbar-thumb {
    // width: 7px;
    // background: #d7d7d7;
    // border-radius: 40px;
    // }
    .el-icon-circle-close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 16px;
      font-size: 24px;
      opacity: 0.2;
      cursor: pointer;
    }
  }

  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
}

.popup-enter-active, .popup-leave-active {
  transition: all 0.4s;
}

.popup-enter, .popup-leave-to {
  opacity: 0;
}

.main-enter-active, .main-leave-active {
  transition: all 0.5s;
}

.main-enter, .main-leave-to {
  opacity: 0;
  transform: translate(0, 70%);
}

.main-enter-to, .main-leave {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
