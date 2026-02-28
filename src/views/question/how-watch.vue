<template>
  <div class="how-watch">
    <div class="how-watch-navbar">
      <img src="@/assets/images/app-logo1.png" />
      <span>William Player</span>
    </div>
    <div class="how-watch-container">
      <div class="how-watch-title">海报墙没有生成，那怎么观看视频？</div>
      <div class="how-watch-text">
        可以在（我的）页面的媒体库列表按照文件夹的风格去访问视频。
      </div>
      <div class="how-watch-img">
        <img
          @click="
            previewImage(
              'https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/shili4.jpg'
            )
          "
          src="https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/shili4.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { showImagePreview } from 'vant'

const previewImage = (url) => {
  showImagePreview([url])
}
</script>

<style lang="scss" scoped>
.how-watch {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .how-watch-navbar {
    display: flex;
    align-items: center;
    padding: 5px 12px;
    border-bottom: 1px solid #e3e3e3;
    img {
      width: 35px;
      height: 35px;
    }
    span {
      padding-left: 5px;
    }
  }
  .how-watch-container {
    padding: 12px;
    flex: 1;
    overflow: auto;
    .how-watch-title {
      font-size: 20px;
      font-weight: 700;
    }
    .how-watch-text {
      padding-top: 12px;
    }
    .how-watch-img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        display: block;
        width: calc(50% - 6px);
        flex: 0 0 calc(50% - 6px);
        margin-top: 12px;
        height: 367.25px;
      }
    }
  }
}
</style>
