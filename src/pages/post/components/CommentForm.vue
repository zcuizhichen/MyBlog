<template>
  <form class="commit-form">
    <label for="input-name">
      <div class="inner-text">昵称</div>
      <input type="text" id="input-name">
    </label>
    <label for="input-comment">
      <div class="inner-text">评论</div>
      <textarea id="input-comment" placeholder="欢迎调戏博主~如果想要收到评论回复提醒，请记得填写姓名哦"></textarea>
    </label>
    <div class="under-inline">
      <span class="under-desc">让你的评论影响到更多的人</span>
      <button type="submit" class="one">提交</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.commit-form {
  margin-bottom: 48px;

  label {
    display: block;
    margin-bottom: 18px;

    .inner-text {
      margin-bottom: 8px;
      font-size: 14px;
      color: #555;
    }

    input, textarea {
      padding: 4px 8px;
      border-radius: 4px;
    }

    input {
      width: 30%;
    }

    textarea {
      width: 100%;
      height: 100px;
    }
  }

  .under-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .under-desc {
      color: #888888;
      font-size: 14px;
    }

    button {
      padding: 3px 18px;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
</style>
