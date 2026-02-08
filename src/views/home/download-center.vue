<template>
  <div class="download">
    <download-mobile v-if="isMobileDevice()"></download-mobile>
    <download-pc v-else></download-pc>
  </div>
</template>

<script setup>
import downloadPc from './components/download-pc.vue'
import downloadMobile from './components/download-mobile.vue'
const isMobileDevice = () => {
  // 防止在服务端运行时出错
  if (typeof window === 'undefined') return false

  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  // 常见移动设备关键词
  const mobileKeywords = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]

  return mobileKeywords.some(pattern => pattern.test(userAgent))
}
</script>

<style lang="scss" scoped>
.download {
  width: 100%;
  height: 100%;
}
</style>
