<template>
  <div class="post-skip border-bottom">
    <div class="pre-post">
      <i class="el-icon-arrow-left"></i>
      <router-link
        :to="`/post/${skip.pre._id}`"
        :title="skip.pre.title"
        class="inner-text"
        v-if="skip && skip.pre"
      >{{skip.pre.title}}</router-link>
      <span class="inner-text no-post" v-else>无上一篇文章</span>
    </div>
    <div class="next-post">
      <router-link
        :to="`/post/${skip.next._id}`"
        :title="skip.next.title"
        class="inner-text"
        v-if="skip && skip.next"
      >{{skip.next.title}}</router-link>
      <span class="inner-text no-post" v-else>无下一篇文章</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skip: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/mixins.styl';

.post-skip {
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  margin-bottom: 40px;

  .pre-post, .next-post {
    position: relative;

    i {
      position: absolute;
      top: 0;
    }

    .inner-text {
      lineClamp(1);
      color: #777;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: #333;
      }

      &.no-post {
        cursor: default;

        &:hover {
          color: #777;
        }
      }
    }
  }

  .pre-post {
    padding-right: 50px;

    i {
      left: 0;
    }

    .inner-text {
      margin-left: 20px;
    }
  }

  .next-post {
    padding-left: 50px;

    i {
      right: 0;
    }

    .inner-text {
      margin-right: 20px;
    }
  }
}
</style>
