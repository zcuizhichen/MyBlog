<template>
  <div class="post-item">
    <div class="add-time">{{addTime}}</div>
    <div class="right-info">
      <div class="post-name">{{it.name}}</div>
      <div class="post-tags">
        <span class="tag-item" v-for="(tag, index) in it.tags" :key="index">{{tag}}</span>
      </div>
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
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.post-item {
  display: flex;
  margin-bottom: 32px;

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
  }
}
</style>
