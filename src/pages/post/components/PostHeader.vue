<template>
  <div class="post-header">
    <div class="post-title">{{post.title}}</div>
    <div class="post-info">
      <span class="release-time">发布于: {{releaseTime}}</span>
      <span class="post-tags">
        标签:
        <span class="tag-item" v-for="tag in post.tags" :key="tag.id">{{tag.title}}</span>
      </span>
      <span class="post-pv">访问: {{post.pv}}</span>
    </div>
  </div>
</template>

<script>
import { timestampToDate } from "@/lib/help";

export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    releaseTime() {
      let { release_timestamp: time } = this.post;
      return timestampToDate(time, "xxxx-xx-xx xx-xx");
    }
  }
};
</script>

<style lang="stylus">
.post-header {
  text-align: center;
  margin-bottom: 40px;

  .post-title {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .post-info {
    >* {
      padding: 0 12px;
      color: #999999;
      font-weight: 300;

      .tag-item {
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: #222222;
        }

        &:before {
          content: '/';
          padding: 0 4px;
        }

        &:last-child {
          &:after {
            content: '/';
            padding-left: 4px;
          }
        }
      }
    }
  }
}
</style>
