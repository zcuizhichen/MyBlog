<template>
  <div class="search-post-list">
    <div class="post-item" v-for="it in props.list" :key="it._id">
      <span class="post-time">{{calcDate(it.publish_timestamp)}}</span>
      <router-link :to="`/post/${it._id}`" :title="it.title">
        <span>{{it.title}}</span>
      </router-link>
    </div>
    <div class="no-post-hint" v-if="props.list.length === 0 && !props.once">
      <p>对不起，暂无关于{{props.keyWord}}的文章</p>
      <p>╮(╯_╰)╭</p>
    </div>
  </div>
</template>

<script>
import { timestampToDate } from "@/lib/help";

export default {
  props: {
    props: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    calcDate(timestamp) {
      return timestampToDate(timestamp);
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/mixins.styl';

.search-post-list {
  margin-bottom: 12px;
  width: 70%;
  margin: 0 auto;

  .post-item {
    position: relative;
    font-size: 15px;

    .post-time {
      position: absolute;
      left: 0;
      padding: 8px 0;
      margin-right: 24px;
      color: #999;
    }

    a {
      padding: 8px 0 8px 12px;
      margin-left: 90px;
      transition: all 0.3s;
      display: block;
      text-align: left;

      span {
        lineClamp(1);
      }

      &:hover {
        color: #111;
        background: #eee;
      }
    }
  }

  .no-post-hint {
    text-align: center;
    line-height: 2em;
    color: #777;
    font-size: 14px;
  }
}
</style>