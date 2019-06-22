<template>
  <div class="post-page">
    <post-header :post="post"/>
    <div v-html="post.content"></div>
    <post-follow/>
    <post-skip :skip="post.skip"/>
    <!-- <post-comment :post="post"/> -->
  </div>
</template>

<script>
import post from "./post.js";
import PostHeader from "./components/PostHeader";
import PostFollow from "./components/PostFollow";
import PostSkip from "./components/PostSkip";
import PostComment from "./components/PostComment";

export default {
  components: {
    PostHeader,
    PostFollow,
    PostSkip,
    PostComment
  },

  data() {
    return {
      post: {}
    };
  },

  watch: {
    $route() {
      this.getPost();
    }
  },

  mounted() {
    this.getPost();
  },

  methods: {
    async getPost() {
      let params = { id: this.$route.params.id };
      let data = await this.$http("get", "/api/post/findById", { params });
      this.post = data;
    }
  }
};
</script>

<style lang="stylus">
/* 引入github的markdown样式文件 */
@import './css/github-markdown.css';
/* 引入atom的代码高亮样式文件 */
@import './css/atom-one-dark.min.css';
</style>
