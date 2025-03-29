<template>
  <div v-if="router.currentRoute.value.fullPath != '/404'">
    <van-tabbar v-model="active" route  :fixed="true" :safe-area-inset-bottom="true" z-index="10000">
      <van-tabbar-item name="Home" to="/" icon="qr">首页</van-tabbar-item>
      <van-tabbar-item name="my" to="/my" icon="user-o" badge="+1">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  console.log(router.currentRoute.value.fullPath,'router')


  const active = ref(0);
  const state = {
    active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
    inactive: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
  };

</script>
<style scoped lang="scss">

</style>
