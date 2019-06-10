<template>
  <div class="home-page">
    <div class="post-list">
      <post-item v-for="it in list" :key="it.id" :it="it"/>
    </div>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script>
import list from "./list";
import PostItem from "./components/PostItem";

export default {
  components: {
    PostItem
  },

  data() {
    return {
      list
    };
  }
};
</script>

<style lang="stylus">
.home-page {
  .post-list {
    margin-bottom: 32px;
  }

  .pagination {
    text-align: center;

    .el-pagination {
      i, li {
        font-size: 15px;
      }
    }
  }
}
</style>
