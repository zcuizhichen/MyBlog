<template>
  <div class="post-item">
    <div class="add-time">{{addTime}}</div>
    <div class="right-info">
      <div class="post-name" @click="pushPost">{{it.name}}</div>
      <div class="post-tags">
        <span class="tag-item" v-for="(tag, index) in it.tags" :key="index">{{tag}}</span>
      </div>
      <div class="post-content" @click="pushPost">{{it.content}}</div>
    </div>
  </div>
</template>

<script>
import { timestampToDate } from "@/lib/help";

export default {
  props: {
    it: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    addTime() {
      let { add_timestamp: time } = this.it;
      return timestampToDate(time);
    }
  },

  methods: {
    pushPost() {
      this.$router.push(`/post/${this.it.id}`);
      // this.$router.push(`/tags`);
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';
@import '~@/assets/css/mixins.styl';

.post-item {
  display: flex;
  margin-bottom: 30px;

  .add-time {
    font-size: 17px;
    line-height: 20px;
    color: #999999;
    width: 140px;
    font-weight: 300;
  }

  .right-info {
    flex: 1;

    .post-name {
      font-size: 18px;
      color: #101010;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: $mc;
      }
    }

    .post-tags {
      margin-left: -12px;
      margin-bottom: 16px;

      .tag-item {
        font-size: 14px;
        font-weight: 300;
        color: #999999;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: #222222;
        }

        &:before {
          content: '/';
          padding: 0 12px;
        }

        &:last-child {
          &:after {
            content: '/';
            padding-left: 12px;
          }
        }
      }
    }

    .post-content {
      lineClamp(2);
      color: #555;
      font-size: 14px;
      line-height: 1.8em;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: #999;
      }
    }
  }
}
</style>
