<template>
  <div class="archive-page">
    <div class="archive-title">嗯..! 目前共计 12 篇文章， 继续努力。</div>
    <div class="archive-list">
      <div class="archive-item" v-for="it in list" :key="it.id">
        <div class="title">{{it.title}}</div>
        <div class="childrens">
          <div class="post-item" v-for="it in it.childrens" :key="it.id">
            <span class="post-date">{{releaseTime(it.add_timestamp)}}</span>
            <router-link :to="`/post/${it.id}`">
              <span class="post-title">{{it.title}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from "./data";
import { timestampToDate } from "@/lib/help";

export default {
  data() {
    return {
      list
    };
  },

  methods: {
    releaseTime(timestamp) {
      return timestampToDate(timestamp, "xx-xx");
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.archive-page {
  .archive-title {
    font-size: 15px;
    color: #999;
    margin-bottom: 32px;
  }

  .archive-list {
    .archive-item {
      margin-bottom: 32px;

      .title {
        font-size: 16px;
        color: #999;
        margin-bottom: 8px;
      }

      .childrens {
        margin-left: 52px;

        .post-item {
          display: block;
          font-size: 16px;
          line-height: 32px;

          .post-date {
            margin-right: 24px;
            color: #999;
          }

          a {
            .post-title {
              color: #333;
              transition: all 0.3s;

              &:hover {
                color: $mc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
