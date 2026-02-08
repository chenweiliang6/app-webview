<template>
  <div class="download-mobile">
    <div class="download-mobile-bubble">
      <div class="circle" v-for="item in 4" :key="item">
        <div class="circle-item" v-for="sitem in 4" :key="sitem"></div>
      </div>
    </div>
    <div class="download-mobile-container">
      <img
        src="@/assets/images/williamPlayerName.png"
        draggable="false"
        class="container-logo"
      />
      <div class="container-info">
        <img
          src="@/assets/images/app-logo1.png"
          class="container-info-logo animate__fadeInUp"
          draggable="false"
          style="animation-delay: 0.1s"
        />
        <span
          class="container-info-title animate__fadeInUp"
          style="animation-delay: 0.2s"
          >下载William Player</span
        >
        <span
          class="container-info-desc animate__fadeInUp"
          style="animation-delay: 0.4s"
          >基于Alist、Openlist、天翼云盘、夸克网盘开发的视频播放器，支持刮削影视元信息，支持IPTV播放，优雅打造私人影视库</span
        >
      </div>
      <div
        class="container-list animate__fadeInUp"
        style="animation-delay: 0.6s"
      >
        <div
          class="container-list-item"
          v-for="item in downloadList"
          :key="item.title"
          @click="handelDownload(item)"
        >
          <img :src="item.icon" draggable="false" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadList = [
  {
    title: 'Android',
    icon: 'https://filmly.res.netease.com/website/img/device-Android_7d572535.png',
    downloadUrl:
      'https://gitee.com/CWLcwl0219/William-Player/releases/download/latest/app-mobile.apk'
  },
  {
    title: 'Android TV',
    icon: 'https://filmly.res.netease.com/website/img/device-AndroidTV_9afff6f0.png',
    downloadUrl:
      'https://gitee.com/CWLcwl0219/William-Player/releases/download/latest/app-tv.apk'
  },
  {
    title: 'Windows',
    icon: 'https://filmly.res.netease.com/website/img/device-Windows_70e73d9c.png',
    downloadUrl:
      'https://gitee.com/CWLcwl0219/William-Player/releases/download/latest/app-pc.exe'
  }
]

const handelDownload = (item) => {
  window.open(item.downloadUrl, '_blank', 'noopener')
}
</script>

<style lang="scss" scoped>
.download-mobile {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #dcecfd, #f8f8f8);
  position: relative;
  .download-mobile-bubble {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    .circle {
      position: absolute;
      z-index: 1;
      transition: all 3s ease;
      border-radius: 50%;
      .circle-item {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 50%;
        transition: opacity 3s ease;
        &:first-of-type {
          opacity: 1;
        }
      }
      &:first-of-type {
        top: -44px; /* 1.173rem */
        left: 205px; /* 5.467rem */
        width: 340px; /* 9.067rem */
        height: 340px; /* 9.067rem */
        filter: blur(19px); /* 0.507rem */
        .circle-item {
          &:first-of-type {
            background-image: linear-gradient(133deg, #defce1, #62c0db);
            opacity: 1;
          }
          &:nth-of-type(2) {
            background-image: linear-gradient(133deg, #fffbde, #d5fcf7);
          }
          &:nth-of-type(3) {
            background-image: linear-gradient(133deg, #ffe7de, #d5e3fc);
          }
        }
      }
      &:nth-of-type(2) {
        left: -206px; /* 5.493rem */
        right: auto;
        top: 260px; /* 6.933rem */
        width: 412px; /* 10.987rem */
        height: 412px; /* 10.987rem */
        filter: blur(17px); /* 0.453rem */
        .circle-item {
          &:first-of-type {
            background-image: linear-gradient(133deg, #fffcde, #fcd5f6);
            opacity: 1;
          }
          &:nth-of-type(2) {
            background-image: linear-gradient(133deg, #ffd6c8, #bb80e8);
          }
          &:nth-of-type(3) {
            background-image: linear-gradient(133deg, #b5d3ff, #b091fe);
          }
        }
      }
      &:nth-of-type(3) {
        left: 236px; /* 6.3rem */
        top: 611px; /* 16.3rem */
        width: 252px; /* 6.72rem */
        height: 252px; /* 6.72rem */
        filter: blur(16px); /* 0.427rem */
        .circle-item {
          &:first-of-type {
            background-image: linear-gradient(
              133deg,
              rgba(249, 29, 16, 0.3),
              rgba(238, 137, 40, 0.6)
            );
            opacity: 0.5;
          }
          &:nth-of-type(2) {
            background-image: linear-gradient(
              133deg,
              rgba(16, 108, 249, 0.3),
              rgba(40, 96, 238, 0.6)
            );
            opacity: 0.5;
          }
          &:nth-of-type(3) {
            background-image: linear-gradient(133deg, #f6ffce, #b6fff6);
          }
        }
      }
    }
  }
  .download-mobile-container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    .container-logo {
      width: 150px; /* 4rem */
    }
    .container-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 30px; /* 0.8rem */
      .container-info-logo {
        border-radius: 14px; /* 0.373rem */
        width: 60px; /* 1.6rem */
        height: 60px; /* 1.6rem */
        margin-top: 30px; /* 0.8rem */
      }
      .container-info-title {
        margin-top: 30px; /* 0.8rem */
        font-size: 26px; /* 0.693rem */
        font-weight: 600;
        color: #17181b;
        margin-bottom: 22.5px; /* 0.6rem */
      }
      .container-info-desc {
        margin-bottom: 22.5px; /* 0.6rem */
        color: #7b7d7f;
        font-size: 14px; /* 0.373rem */
        display: block;
        text-align: center;
      }
    }
    .container-list {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 37.5px; /* 1rem */
      .container-list-item {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 26.25px 12px; /* 0.7rem 0.32rem */
        border-radius: 14px; /* 0.373rem */
        margin-left: 12px; /* 0.32rem */
        width: 97.5px; /* 2.6rem */
        transition: transform 0.2s;
        cursor: pointer;
        box-shadow: 0 0.05333rem 0.076rem 0 rgba(205, 208, 230, 0.5);
        &:active {
          transform: translateY(-0.5rem);
        }
        img {
          width: 32px; /* 0.85rem */
          height: 32px; /* 0.85rem */
        }
        span {
          font-size: 14px; /* 0.373rem */
          padding-top: 5.625px; /* 0.15rem */
        }
      }
    }
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
.animate__fadeInUp {
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}
</style>
