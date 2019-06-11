<template>
  <div class="about-item">
    <div class="item-title">{{title}}</div>
    <div class="item-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title"
    }
  }
};
</script>

<style lang="stylus">
.about-item {
  margin-bottom: 32px;

  .item-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .item-content {
    padding: 14px 20px;
    border-left: 5px solid #f4f4f4;
    font-size: 15px;
    color: #777;
    // font-style: italic;
  }
}
</style>
