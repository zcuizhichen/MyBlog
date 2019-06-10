<template>
  <div class="post-comment">
    <comment-form/>
    <div class="comment-list">
      <div class="comment-total border-bottom">{{post.comments.length}}评论</div>
      <div class="comment-item border-bottom" v-for="it in post.comments" :key="it.id">
        <div class="user-meta">
          <div class="avatar-wrapper">
            <img :src="require('@/assets/img/user-avatar.png')" alt="avatar">
          </div>
          <div class="user-info">
            <div class="user-name">{{it.username}}</div>
            <div class="comment-time">{{releaseTime(it.timestamp)}}</div>
          </div>
        </div>
        <div class="comment-content">{{it.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm";
import { timestampToDate } from "@/lib/help";

export default {
  components: {
    CommentForm
  },

  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    releaseTime(time) {
      return timestampToDate(time, "xxxx-xx-xx xx-xx");
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.post-comment {
  .comment-total {
    color: $mc;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 18px;
    margin-bottom: 18px;
  }

  .comment-item {
    padding-bottom: 24px;
    margin-bottom: 24px;

    .user-meta {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .avatar-wrapper {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
      }

      .user-info {
        .user-name {
          color: $mc;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .comment-time {
          color: #999;
        }
      }
    }

    .comment-content {
      color: #555;
      font-size: 14px;
    }
  }
}
</style>
