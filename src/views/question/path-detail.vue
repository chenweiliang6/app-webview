<template>
  <div class="path-detail">
    <div class="path-detail-navbar">
      <img src="@/assets/images/app-logo1.png" />
      <span>William Player</span>
    </div>
    <div class="path-detail-container">
      <div class="path-detail-title">如何设置文件路径？</div>
      <div class="path-detail-text">
        为了避免出现扫库的风控，所以用户需要在添加完资源之后，手动选择电影、电视剧的文件夹。以此为例，电影：/我的视频/电影/，电视剧：/我的视频/电视剧/，这个路径可以自定义，因为可以通过手动选择电影或者电视剧的文件夹路径，具体查看下方图片。
      </div>
      <div class="path-detail-img">
        <img
          @click="
            previewImage(
              'https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746958972478.png'
            )
          "
          src="https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746958972478.png"
        />
        <img
          @click="
            previewImage(
              'https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746959293712.jpg'
            )
          "
          src="https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746959293712.jpg"
        />
        <img
          @click="
            previewImage(
              'https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746959527870.jpg'
            )
          "
          src="https://gitee.com/CWLcwl0219/drawing-bed/raw/master/img/1746959527870.jpg"
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
.path-detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .path-detail-navbar {
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
  .path-detail-container {
    padding: 12px;
    flex: 1;
    overflow: auto;
    .path-detail-title {
      font-size: 20px;
      font-weight: 700;
    }
    .path-detail-text {
      padding-top: 12px;
    }
    .path-detail-img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        display: block;
        width: 100%;
        flex: 0 0 100%;
        margin-top: 12px;
        &:first-child {
          height: 100px;
        }
        &:nth-child(2) {
          height: 299px;
        }
        &:nth-child(3) {
          height: 156px;
        }
      }
    }
  }
}
</style>
