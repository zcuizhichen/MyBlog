<template>
  <div class="tags-page">
    <div class="tag-list">
      <span class="tag-item" v-for="it in list" :key="it.id" @click="tagClick(it)">{{it.title}}</span>
    </div>
    <div class="post-list">
      <div class="tag-group-item" v-for="it in list" :key="it.id">
        <div class="tag-title">{{it.title}}</div>
        <div class="tag-post">
          <div v-for="it in it.childrens" :key="it.id" class="post-item">
            <router-link :to="`/post/${it.id}`">{{it.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "./data";

export default {
  data() {
    return {
      list
    };
  },

  methods: {
    tagClick(it) {
      this.$router.push({
        path: "/tags",
        query: { tag: it.id }
      });
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.tags-page {
  .tag-list {
    margin-bottom: 28px;

    .tag-item {
      display: inline-block;
      margin-right: 32px;
      margin-bottom: 12px;
      font-size: 16px;
      color: #999;
      transition: all 0.3s;
      cursor: pointer;

      &:before {
        content: '#';
      }

      &:hover {
        color: #333;
      }
    }
  }

  .post-list {
    .tag-group-item {
      margin-bottom: 32px;

      .tag-title {
        font-size: 16px;
        color: #999;
        margin-bottom: 12px;
      }

      .tag-post {
        margin-left: 52px;

        .post-item {
          display: block;
          font-size: 18px;
          line-height: 36px;

          a {
            color: #444;
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
</style>
