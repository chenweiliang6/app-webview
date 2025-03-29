<template>
  <div>
    <van-button @click="toFeedback">新建反馈</van-button>
  </div>
</template>

<script setup>
const toFeedback = () => {
    window.location.href = 'https://gitee.com/CWLcwl0219/William-Player/issues';
}
</script>

<style lang="scss" scoped>
</style>
