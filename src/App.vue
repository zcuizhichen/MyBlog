<template>
  <div id="app" class="container">
    <global-header/>
    <main>
      <side-bar/>
      <router-view class="router-view"/>
    </main>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from "@/components/header";
import SideBar from "@/components/sideBar";
import GlobalFooter from "@/components/footer";

export default {
  name: "app",

  components: {
    GlobalHeader,
    SideBar,
    GlobalFooter
  }
};
</script>

<style lang='stylus'>
main {
  min-height: calc(100vh - 200px);
  display: flex;

  .side-bar-com {
    width: 152px;
  }

  .router-view {
    flex: 1;
    margin-left: 60px;
  }
}
</style>
