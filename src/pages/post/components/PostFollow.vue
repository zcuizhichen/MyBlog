<template>
  <div class="post-follow">
    <div class="qr-code">
      <img :src="require('@/assets/img/qr-code.jpg')" alt="qr-code">
    </div>
    <div class="follow-inline">欢迎您扫一扫上面的二维码，订阅我的微信公众号！</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.post-follow {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 52px;

  .qr-code {
    width: 180px;
    margin: 0 auto;
    margin-bottom: 24px;
  }

  .follow-inline {
    // font-size: 15px;
    color: #777;
  }
}
</style>
