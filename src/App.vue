<template>
  <div id="app" class="container">
    <global-header/>
    <main>
      <side-bar/>
    </main>
  </div>
</template>

<script>
import GlobalHeader from "@/components/header";
import SideBar from "@/components/sideBar";

export default {
  name: "app",

  components: {
    GlobalHeader,
    SideBar
  }
};
</script>

<style lang='stylus'>
main {
  display: flex;

  .side-bar-com {
    width: 124px;
  }
}
</style>
