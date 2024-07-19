<template>
  <div class="homepage">
    <Navbar></Navbar>
    <div class="homepage-container">
      <Introduce></Introduce>
      <Guarantee></Guarantee>
      <Corich></Corich>
      <Advantage></Advantage>
      <Last></Last>
      <Footer></Footer>
    </div>

  </div>
</template>

<script setup>
import Introduce from "./components/first/introduce.vue";
import Guarantee from "./components/first/guarantee.vue";
import Corich from "./components/first/corich.vue";
import Advantage from "./components/first/advantage.vue";
import Last from "./components/first/last.vue";
import Footer from "./components/first/footer.vue";
import Navbar from './components/navbar.vue'

</script>

<style lang="scss" scoped>
.homepage {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-container {
    overflow: auto;
    width: 100%;
    flex: 1;
    position: relative;
  }
}
</style>
