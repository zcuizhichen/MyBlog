<template>
  <div class="search-popup">
    <popup :show="show" width="40%" @close="close">
      <div class="search-inner">
        <img class="search-title" :src="require('@/assets/img/logo.png')" alt="choke">
        <form class="search-bar" @submit.prevent="onSubmit">
          <input type="text" v-model="params.search.or.title" placeholder="输入你想探索的世界">
          <button type="submit">
            <i class="el-icon-search"></i>
          </button>
        </form>
        <post-list :props="$data"/>
        <div class="pagination" v-if="pagination > 0">
          <span
            class="page-dot"
            :class="{select:params.page === (index+1)}"
            @click="pageClick(index)"
            v-for="(it, index) in pagination"
            :key="index"
          ></span>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from "../common/popup";
import PostList from "./components/PostList";

export default {
  components: {
    popup,
    PostList
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      list: [],
      keyWord: "",
      // 此属性控制是否搜索过，用于显示提示文字
      once: true,
      params: {
        search: {
          or: { title: null }
        },
        page: 1,
        limit: 5,
        total: null
      }
    };
  },

  computed: {
    // 页码数量
    pagination() {
      if (total - limit <= 0) return 0;
      let { total, limit } = this.params;
      let num = total / limit;
      if (num > 6) num = 6;
      return num;
    }
  },

  methods: {
    close() {
      // 弹窗关闭时，将所有状态还原
      this.$emit("update:show", false);
      this.once = true;
      this.list = [];
      this.keyWord = "";
    },

    async onSubmit() {
      let { data, total } = await this.$http("get", "/api/post/read", {
        params: this.params
      });
      this.params.total = total;
      this.once = false;
      this.list = data;
    },

    pageClick(index) {
      index++;
      if (this.params.page === index) return;
      this.params.page = index;

      this.onSubmit();
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.search-popup {
  .search-inner {
    padding: 40px 20px;
    text-align: center;

    .search-title {
      width: 140px;
      margin-bottom: 40px;
    }

    .search-bar {
      text-align: center;
      margin-bottom: 32px;

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

    .pagination {
      margin-top: 24px;

      .page-dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        margin: 0 4px;
        border-radius: 50%;
        background: #ddd;
        cursor: pointer;
        transition: all 0.3s;

        &:hover, &.select {
          background: #666;
        }
      }
    }
  }
}
</style>
