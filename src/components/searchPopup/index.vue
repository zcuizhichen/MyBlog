<template>
  <div class="search-popup">
    <popup :show="show" width="40%" @close="close">
      <div class="search-inner">
        <div class="search-title">Choke</div>
        <form class="search-bar">
          <input type="text" placeholder="搜索你想搜的文章">
          <button type="primary">
            <i class="el-icon-search"></i>
          </button>
        </form>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from "../common/popup";

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  components: {
    popup
  },

  methods: {
    close() {
      this.$emit("update:show", false);
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.search-popup {
  .search-inner {
    padding: 40px 20px;

    .search-title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 40px;
    }

    .search-bar {
      text-align: center;
      margin-bottom: 20px;

      input {
        width: 60%;
        padding: 10px 12px;
        vertical-align: middle;
        border-color: #d6d6d6;
        border-right: none;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        &:focus {
          border-color: $mc;
        }
      }

      button {
        vertical-align: middle;
        padding: 8px 16px;
        background: $mc;
        border: none;
        transition: all 0.3s;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        &:hover {
          background: $hmc;
        }

        i {
          color: #fff;
          font-size: 21px;
        }
      }
    }
  }
}
</style>
