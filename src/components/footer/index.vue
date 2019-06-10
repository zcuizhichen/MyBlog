<template>
  <footer class="footer-com">
    <!-- <div class="link-group">
      <span class="link-item">
        <span class="inner">知</span>
      </span>
      <span class="link-item">
        <span class="inner">Git</span>
      </span>
    </div> -->
    <div class="footer-inline">36912PV 30228UV &nbsp; Created By Choke</div>
    <div class="footer-inline">
      Powered by
      <span class="link-item">vue</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.footer-com {
  margin-left: 228px;
  margin-top: 48px;
  margin-bottom: 32px;
  text-align: center;

  .link-group {
    margin-bottom: 8px;

    .link-item {
      background: #999999;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: 0 4px;
      display: inline-block;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background: #555555;
      }

      .inner {
        color: #ffffff;
        display: inline-block;
        transform: translateY(5px);
      }
    }
  }

  .footer-inline {
    color: #888888;
    margin-bottom: 4px;
    font-weight: 200;

    .link-item {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: #222;
      }
    }
  }
}
</style>
