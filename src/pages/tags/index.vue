<template>
  <div class="tags-page">
    <div class="tag-list">
      <span
        class="tag-item"
        :class="{select:select === it._id}"
        v-for="it in allTag"
        :key="it._id"
        @click="tagClick(it)"
      >{{it.title}}</span>
    </div>
    <div class="post-list">
      <div class="tag-group-item" v-for="it in tagList" :key="it._id">
        <div class="tag-title">{{it.title}}</div>
        <div class="tag-post">
          <div v-for="it in it.childrens" :key="it._id" class="post-item">
            <router-link :to="`/post/${it._id}`">{{it.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "All",
      allTag: [],
      tagList: []
    };
  },

  mounted() {
    let tagId = this.$route.query._id;
    if (tagId) {
      this.select = tagId;
    }

    this.getAllTag();
    this.getTagList();
  },

  methods: {
    async getAllTag() {
      let data = await this.$http("get", "/api/tag/read");
      this.allTag = data;
      this.allTag.unshift({ _id: "All", title: "All" });
    },

    async getTagList() {
      let params = {
        _id: this.select
      };

      let data = await this.$http("get", "/api/tag/read", { params });
      this.tagList = data;
    },

    tagClick(it) {
      this.select = it._id;
      this.$router.replace({
        path: "/tags",
        query: { tag: it._id }
      });

      this.getTagList();
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

      &.select {
        color: $mc;
      }

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
