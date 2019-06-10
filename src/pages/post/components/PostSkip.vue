<template>
  <div class="post-skip border-bottom">
    <div class="prev-post">
      <i class="el-icon-arrow-left"></i>
      <span class="inner-text">{{post.skip.prev.title}}</span>
    </div>
    <div class="next-post">
      <span class="inner-text">{{post.skip.next.title}}</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
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

  .prev-post, .next-post {
    position: relative;
    cursor: pointer;

    i {
      position: absolute;
      top: 0;
    }

    .inner-text {
      lineClamp(1);
      color: #777;
      transition: all 0.3s;

      &:hover {
        color: #333;
      }
    }
  }

  .prev-post {
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
